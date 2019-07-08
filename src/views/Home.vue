<template>
  <div id="home"><b-container>

  <transition name='fade'>
  <div class='row' v-if='showButton'>
    <b-button pill variant='outline-danger' v-on:click='runProgram' id='start-btn'>don&rsquo;t drive into the sun</b-button>
  </div>
  </transition>

  <div id='output'>
    <p>
      <span>{{ userCoordinateString }}</span>
    </p>

    <p>
      <span id='altitude'> {{ altitudeString }} </span>
    </p>

    <div v-if='showResults'>
      <div ref='results' id='results'>
        <SafeToDrive
          :sunAltitude='sunAltitude'
          :sunAzimuth='sunAzimuth'
          :userLatitude='userLatitude'
          :userLongitude='userLongitude'
        ></SafeToDrive>
      </div>
    </div>
  </div>

  </b-container></div>
</template>

<style scoped>

#home > div.container {
  /*display: table;*/
  position: fixed;
  height: 100%;
}

#start-btn {
  position: fixed;
  top: 35%;
  /*display: table-cell;
  vertical-align: middle;*/
  width: 200px;
  margin-left: 60px;
}

#output {
  position: fixed;
  width: 100%;
  top: 25%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

<script>

/*
    altitude: sun altitude above the horizon in radians, e.g. 0 at the horizon and PI/2 at the zenith (straight over your head)
    "An elevation angle of 10 degrees [PI/18] is usually enough to allow you to block it with a sunvisor"; close to 0 is most dangerous (Quora)

    azimuth: horizontal angle in radians (direction along the horizon, measured from south to west), e.g. 0 is south and Math.PI * 3/4 is northwest
    Due west = 90deg
    Due east = 270deg

    Radians to degrees = radian_val * 180 / Math.PI;

    http://astronomy.beamappzone.com/ : animated demo

    To add custom time to SunCalc.getTimes results:
    SunCalc.addTime(angleInDegrees, morningName, eveningName)

*/



export default {
  name: 'home',
  components: {
    SafeToDrive: () => import('@/components/SafeToDrive.vue')
  },
  data () {
    return {
      showButton: true,
      showResults: false,
      userLatitude: null,
      userLongitude: null,
      sunAltitude: null,
      sunAzimuth: null
    }
  },
  computed: {
    userCoordinateString: function() {
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
    }
  },
  methods: {

    runProgram: function() {

        const vm = this

        vm.getGPSCoordinates()
        .then(function(coords) {
          vm.showButton = false
          vm.updateUserCoords(coords)
          return coords
        }, function(error) {
          // show modal asking for permission
          alert("getGPSCoordinates: " + error)
        })

        .then(function(coords) {
          vm.getSunPosition(coords.latitude, coords.longitude)
          .then(function(position) {
            vm.updateSunPosition(position)
            vm.showResults = true
          }, function(error) {
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
          reject(Error("Can't access location"))
        }
      })
    },

    getAltitude: function (userLatitude, userLongitude) {
      return new Promise((resolve, reject) => {
        if (!userLatitude || !userLongitude) {
          reject(Error("Can't read coordinates"))
        }
        const SunCalc = this.$suncalc
        let now = new Date()
        let sunPosition = SunCalc.getPosition(now, userLatitude, userLongitude)
        if (!sunPosition) {
          reject(Error("getAltitude: Can't get sun position"))
        }
        let sunAltitude = sunPosition.altitude * 180 / Math.PI
        resolve(sunAltitude)
      })
    },

    getSunPosition: function (userLatitude, userLongitude) {
      return new Promise((resolve, reject) => {
        if (!userLatitude || !userLongitude) {
          reject(Error("Can't read coordinates"))
        }
        const SunCalc = this.$suncalc
        let now = new Date()
        let sunPosition = SunCalc.getPosition(now, userLatitude, userLongitude)
        if (!sunPosition) {
          reject(Error("Can't get sun position"))
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
