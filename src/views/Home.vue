<template>
  <div id="home"><b-container>

  <div class='row'>
    <b-button pill variant='outline-danger' v-on:click='runProgram' id='start-btn'>don&rsquo;t drive into the sun</b-button>
  </div>

  <div class='row' id='user-location-row'><div class='col'>
    <p>
      <span id='coord-msg'>{{ coordinateMessageStart }}</span>
      <span id='latitude'> {{ userLatitudeString }}</span>
      <span id='longitude'>{{ userLongitudeString }}</span>
    </p>

    <p>
      <span id='altitude'> {{ altitudeString }} </span>
    </p>
  </div></div>

<!--
  <div class='row'>
    <b-button pill variant='info' v-on:click='getSunPosition' style='margin:auto'>Find the Sun</b-button>
  </div>
-->

  </b-container></div>
</template>

<style scoped>

#home > div.container {
  /*display: table;*/
  position: fixed;
  height: 100%;
  text-align: center;
}

#start-btn {
  position: fixed;
  top: 35%;
  /*display: table-cell;
  vertical-align: middle;*/
  width: 200px;
  margin-left: 60px;
}

#user-location-row {
  position: fixed;
  top: 25%;
}

</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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
  },
  data () {
    return {
      userLatitude: null,
      userLongitude: null,
      sunAltitude: null,
      sunAzimuth: null,
      timeSunrise: null,
      timeMorningDangerEnd: null,
      timeEveningDangerBegin: null,
      timeSunset: null
    }
  },
  computed: {
    userLatitudeString: function () {
      if (this.userLatitude) {
        return this.userLatitude.toFixed(2) + String.fromCharCode('176') + ', '
      }
      return ''
    },
    userLongitudeString: function () {
      if (this.userLongitude) {
        return this.userLongitude.toFixed(2) + String.fromCharCode('176')
      }
      return ''
    },
    coordinateMessageStart: function () {
      if (this.userLatitude) {
        return 'you are here:'
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

        // fade button

        this.getGPSCoordinates()
        .then(function(coords) {
          vm.updateUserCoords(coords)
          return coords
        }, function(error) {
          alert("getGPSCoordinates: " + error)
        })
        .then(function(coords) {
          vm.getAltitude(coords.latitude, coords.longitude)
          .then(function(altitude) {
            // alert("altitude: " + altitude)
            vm.updateAltitude(altitude)
            return altitude
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

    updateUserCoords: function (coords) {
      this.userLatitude = coords.latitude
      this.userLongitude = coords.longitude
    },
    updateAltitude: function (altitude) {
      this.sunAltitude = altitude
    }
  }
}
</script>
