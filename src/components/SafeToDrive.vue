<template>
  <div id='safe-to-drive'>

    <div v-if='isSafe'>
      <p>you&rsquo;ll be ok for another <span>{{ waitUntil }}</span> </p>
    </div>

    <div v-else>
      <p>{{ directionWarning }}</p>
      <p>or maybe wait about {{ waitUntil }}</p>
    </div>

    <br /><br />
    <p><router-link to="/about" class='link'>about</router-link></p>
  </div>
</template>

<style scoped>

.link:hover {
  text-decoration-style: dotted;
}

</style>

<script>

/*
    altitude: sun altitude above the horizon in radians, e.g. 0 at the horizon and PI/2 at the zenith (straight over your head)

    azimuth: horizontal angle in radians (direction along the horizon, measured from south to west), e.g. 0 is south and Math.PI * 3/4 (135deg) is northwest
    Due west = 90deg
    Due east = 270deg
    Note that some algorithms are opposite (i.e., 0 is north, 270 is west)

    Radians to degrees = radian_val * 180 / Math.PI;

    http://astronomy.beamappzone.com/ : animated demo

    To add custom time to SunCalc.getTimes results:
    SunCalc.addTime(angleInDegrees, morningName, eveningName)

*/

const HIGH_DANGER = 9
const LOW_DANGER = 4

export default {
  name: 'SafeToDrive',
  props: {
    sunAltitude: Number,
    sunAzimuth: Number,
    userLatitude: Number,
    userLongitude: Number
  },
  data () {
    return {
      isSafe: true,
      waitUntil: ''
    }
  },
  mounted: function () {
    if (this.sunAltitude >= LOW_DANGER && this.sunAltitude <= HIGH_DANGER) {
      this.isSafe = false
    }
    this.startTimeCalculations()
  },
  computed: {
    directionWarning: function () {
      if (this.sunAzimuth >= 45 && this.sunAzimuth <= 135) {
        return 'be careful driving west'
      }
      return 'be careful driving east'
    }
  },
  methods: {
    startTimeCalculations: function () {
      const moment = this.$moment
      let now = moment()

      const SunCalc = this.$suncalc
      SunCalc.addTime(HIGH_DANGER, 'morningDangerEnd', 'eveningDangerBegin')
      SunCalc.addTime(LOW_DANGER, 'morningDangerBegin', 'eveningDangerEnd')
      let sunTimesToday = SunCalc.getTimes(now, this.userLatitude, this.userLongitude)

      let vm = this

      if (this.isSafe) {
        let tomorrow = moment().add(1, 'd')
        let sunTimesTomorrow = SunCalc.getTimes(tomorrow, this.userLatitude, this.userLongitude)
        this.getTimeToDanger(now, sunTimesToday, sunTimesTomorrow)
          .then(function (timeUntil) {
            return timeUntil
          }, function (error) {
            console.log(error)
          })
          .then(function (timeUntil) {
            vm.writeWaitMessage(timeUntil)
          })
      }
      else {
        this.getTimeToSafety(now, sunTimesToday)
          .then(function (timeUntil) {
            return timeUntil
          }, function (error) {
            console.log(error)
          })
          .then(function (timeUntil) {
            vm.writeWaitMessage(timeUntil)
          })
      }
    },

    getTimeToSafety: function (now, sunTimesToday) {
      return new Promise((resolve, reject) => {
        const moment = this.$moment
        if (!moment) {
          reject(Error('getTimeToSafety: cannot access moment'))
        }
        // if morning
        let sixAM = moment().hour(6)
        let noon = moment().hour(12)
        if (now.isBetween(sixAM, noon)) {
          resolve(sunTimesToday.morningDangerEnd)
        }
        // if evening
        else {
          resolve(sunTimesToday.eveningDangerEnd)
        }
      })
    },

    getTimeToDanger: function (now, sunTimesToday, sunTimesTomorrow) {
      return new Promise((resolve, reject) => {
        const moment = this.$moment
        if (!moment) {
          reject(Error('getTimeToDanger: cannot access moment'))
        }

        let fourPM = moment().hour(16)
        let beforeMidnight = moment().hour(23).minute(59)
        let midnight = moment().hour(0)
        let sixAM = moment().hour(6)

        // if evening: time to sunrise tomorrow
        if (now.isBetween(fourPM, beforeMidnight) || now.isBetween(midnight, sixAM)) {
          resolve(sunTimesTomorrow.morningDangerBegin)
        }
        // if day: time to golden hour tonight
        else {
          resolve(sunTimesToday.eveningDangerBegin)
        }
      })
    },

    writeWaitMessage: function (timeUntil) {
      const moment = this.$moment
      let difference = moment(timeUntil).diff(moment(), 'minutes')
      if (difference > 90) {
        difference = moment(timeUntil).diff(moment(), 'hours') + ' hours'
      }
      else {
        difference += ' minutes'
      }
      this.waitUntil = difference
    }
  }
}

</script>
