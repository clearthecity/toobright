<template>
  <div id="home"><b-container>

  <transition name='fade05'>
  <div class='row home-text' id='start-btn-row' v-if='step == 1'><div class='col'>
    <b-button pill variant='outline-danger' v-on:click='runProgram' id='start-btn'>don&rsquo;t drive into the sun</b-button>
  </div></div>
  </transition>

  <div class='home-text' id='output'>

  <transition name='fade05'>
    <p v-if='step >= 2'>
      <span>{{ userCoordinateString }}</span>
    </p>
  </transition>

  <transition name='fade1'>
    <p v-if='step >= 3'>
      <span id='altitude'> {{ altitudeString }} </span>
    </p>
  </transition>

  <transition name='fade2'>
    <div v-if='step >= 3'>
      <div ref='results' id='results'>
        <SafeToDrive
          :sunAltitude='sunAltitude'
          :sunAzimuth='sunAzimuth'
          :userLatitude='userLatitude'
          :userLongitude='userLongitude'
        ></SafeToDrive>
      </div>
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

#start-btn-row {
  top: 35%;
  text-align: center;
}

#output {
  top: 25%;
}

.fade05-enter-active, .fade05-leave-active {
  transition: opacity .5s;
}
.fade1-enter-active, .fade1-leave-active {
  transition: opacity 2s;
}
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 4s;
}
.fade05-enter, .fade05-leave-to, .fade1-enter, .fade1-leave-to, .fade2-enter, .fade2-leave-to {
  opacity: 0;
}

</style>

<script>

const STEP_WAITING = 1
const STEP_COORDS = 2
const STEP_RESULTS = 3
// eslint-disable-next-line
const STEP_NO_COORDS = 0

export default {
  name: 'home',
  components: {
    SafeToDrive: () => import('@/components/SafeToDrive.vue')
  },
  data () {
    return {
      step: STEP_WAITING,
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
    altitudeString: function () {
      if (this.sunAltitude) {
        return 'altitude of the sun: ' + this.sunAltitude.toFixed(2) + String.fromCharCode('176')
      }
      return ''
    }
  },
  methods: {

    runProgram: function () {
        const vm = this

        vm.getGPSCoordinates()
        .then(function (coords) {
          vm.updateUserCoords(coords)
          vm.step = STEP_COORDS
          return coords
        }, function (error) {
          // show modal asking for permission
          alert('getGPSCoordinates: ' + error)
        })

        .then(function (coords) {
          vm.getSunPosition(coords.latitude, coords.longitude)
          .then(function (position) {
            vm.updateSunPosition(position)
            vm.step = STEP_RESULTS
          }, function (error) {
            console.log(error)
          })
        })
    },

    getGPSCoordinates: function () {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            let userCoords = position.coords
            resolve(userCoords)
          })
        }
        else {
          reject(Error('No navigator'))
        }
      })
    },

    getAltitude: function (userLatitude, userLongitude) {
      return new Promise((resolve, reject) => {
        if (!userLatitude || !userLongitude) {
          reject(Error('Cannot read coordinates'))
        }
        const SunCalc = this.$suncalc
        let now = new Date()
        let sunPosition = SunCalc.getPosition(now, userLatitude, userLongitude)
        if (!sunPosition) {
          reject(Error('getAltitude: Cannot get sun position'))
        }
        let sunAltitude = sunPosition.altitude * 180 / Math.PI
        resolve(sunAltitude)
      })
    },

    getSunPosition: function (userLatitude, userLongitude) {
      return new Promise((resolve, reject) => {
        if (!userLatitude || !userLongitude) {
          reject(Error('Cannot read coordinates'))
        }
        const SunCalc = this.$suncalc
        let now = new Date()
        let sunPosition = SunCalc.getPosition(now, userLatitude, userLongitude)
        if (!sunPosition) {
          reject(Error('Cannot get sun position'))
        }
        resolve(sunPosition)
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
