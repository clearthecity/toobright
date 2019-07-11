<template>
  <div id="home"><b-container>

  <div class='row home-text' id='no-coords-row' v-if='step == 0'>
    <NoCoordinates v-bind:insecure='insecure'></NoCoordinates>
  </div>

  <transition name='fade05'>
  <div class='row home-text' id='start-btn-row' v-if='step == 1'><div class='col'>
    <b-button pill variant='outline-danger' v-on:click='runProgram' id='start-btn'>don&rsquo;t drive into the sun</b-button>
  </div></div>
  </transition>

  <div class='home-text' id='output'>

  <transition name='fade05'>
    <p v-if='step >= 2'>
      <span>{{ userCoordinateString }}</span>
      &nbsp;
      <a v-bind:href="mapHref" class='link-underline' target='blank'>
          <img src='@/assets/images/new_window.svg' alt='' style='height:0.9rem' />
          map
      </a>
    </p>
  </transition>

  <transition name='fade05'>
    <p v-if='step >= 3'>
      <span id='altitude'> {{ altitudeString }} </span>
    </p>
  </transition>

  <transition name='fade05'>
    <div v-if='step >= 4'>
        <SafeToDrive
          :sunAltitude='sunAltitude'
          :sunAzimuth='sunAzimuth'
          :userLatitude='userLatitude'
          :userLongitude='userLongitude'
        ></SafeToDrive>
    </div>
  </transition>

  </div>

  </b-container></div>
</template>

<style scoped>

#home > div.container {
  position: fixed;
  height: 100%;
}

.home-text {
  position: fixed;
  width: 100%;
}

#start-btn-row, #no-coords-row {
  top: 35%;
  text-align: center;
}

#output {
  top: 25%;
}

.fade05-enter-active, .fade05-leave-active {
  transition: opacity .5s;
}
.fade05-enter, .fade05-leave-to {
  opacity: 0;
}

</style>

<script>

const STEP_WAITING = 1
const STEP_COORDS = 2
const STEP_ALTITUDE = 3
const STEP_RESULTS = 4
const STEP_NO_COORDS = 0

const isLocalHost = () => {
  return (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
}
const isInsecure = () => {
  return (location.protocol && location.protocol !== 'https:')
}

export default {
  name: 'home',
  components: {
    SafeToDrive: () => import('@/components/SafeToDrive.vue'),
    NoCoordinates: () => import('@/components/NoCoordinates.vue')
  },
  data () {
    return {
      step: STEP_WAITING,
      insecure: false,
      userLatitude: null,
      userLongitude: null,
      sunAltitude: null,
      sunAzimuth: null
    }
  },
  computed: {
    userCoordinateString: function () {
      if (this.userLatitude && this.userLongitude) {
        let str = 'you are here: (' + this.userLatitude.toFixed(2) + String.fromCharCode('176')
        str += ', ' + this.userLongitude.toFixed(2) + String.fromCharCode('176') + ')'
        return str
      }
      return ''
    },
    mapHref: function () {
      if (this.userLatitude && this.userLongitude) {
        return 'https://www.openstreetmap.org/#map=14/' + this.userLatitude + '/' + this.userLongitude
      }
      return ''
    },
    altitudeString: function () {
      if (this.sunAltitude) {
        return 'altitude of the sun: ' + this.sunAltitude.toFixed(2) + String.fromCharCode('176')
      }
      return ''
    }
  },
  methods: {
    runProgram: function () {
      if (!isLocalHost() && (isInsecure() || !navigator.geolocation)) {
        if (isInsecure()) {
          this.insecure = true
        }
        this.step = STEP_NO_COORDS
        return
      }

      const vm = this

      vm.getGPSCoordinates()
      .then(function (coords) {
        vm.updateUserCoords(coords)
        vm.step = STEP_COORDS
        return coords
      }, function (error) {
        vm.step = STEP_NO_COORDS
        console.log(error)
      })

      .then(function (coords) {
        vm.getSunPosition(coords.latitude, coords.longitude)
        .then(function (position) {
          vm.updateSunPosition(position)
          setTimeout(() => {
            vm.step = STEP_ALTITUDE
          }, 1000)
          setTimeout(() => {
            vm.step = STEP_RESULTS
          }, 1000)
        }, function (error) {
          console.log(error)
        })
      })
    },

    getGPSCoordinates: function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              let userCoords = position.coords
              resolve(userCoords)
            })
          }
          else {
            reject(Error('No navigator'))
          }
        }, 1000)
      })
    },

    getAltitude: function (userLatitude, userLongitude) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!userLatitude || !userLongitude) {
            reject(Error('Cannot read coordinates'))
          }
          var SunCalc = this.$suncalc
          let now = new Date()
          let sunPosition = SunCalc.getPosition(now, userLatitude, userLongitude)
          if (!sunPosition) {
            reject(Error('getAltitude: Cannot get sun position'))
          }
          let sunAltitude = sunPosition.altitude * 180 / Math.PI
          resolve(sunAltitude)
        }, 1000)
      })
    },

    getSunPosition: function (userLatitude, userLongitude) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!userLatitude || !userLongitude) {
            reject(Error('Cannot read coordinates'))
          }
          var SunCalc = this.$suncalc
          let now = new Date()
          let sunPosition = SunCalc.getPosition(now, userLatitude, userLongitude)
          if (!sunPosition) {
            reject(Error('Cannot get sun position'))
          }
          resolve(sunPosition)
        }, 1000)
      })
    },

    updateUserCoords: function (coords) {
      this.userLatitude = coords.latitude
      this.userLongitude = coords.longitude
    },

    updateSunPosition: function (position) {
      this.sunAltitude = position.altitude * 180 / Math.PI
      this.sunAzimuth = position.azimuth * 180 / Math.PI
    }
  }
}
</script>
