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
</style>

<script>

const HIGH_DANGER = 9
const LOW_DANGER = 3

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
      var moment = this.$moment
      let now = moment()

      var SunCalc = this.$suncalc
      SunCalc.addTime(HIGH_DANGER, 'morningDangerEnd', 'eveningDangerBegin')
      SunCalc.addTime(LOW_DANGER, 'morningDangerBegin', 'eveningDangerEnd')
      let sunTimesToday = SunCalc.getTimes(now, this.userLatitude, this.userLongitude)

      let vm = this

      if (this.isSafe) {
        let tomorrow = moment().add(1, 'd')
        let sunTimesTomorrow = SunCalc.getTimes(tomorrow, this.userLatitude, this.userLongitude)
        this.getTimeToDanger(sunTimesToday, sunTimesTomorrow)
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
        this.getTimeToSafety(sunTimesToday)
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

    getTimeToSafety: function (sunTimesToday) {
      return new Promise((resolve, reject) => {
        var moment = this.$moment
        if (!moment) {
          reject(Error('getTimeToSafety: cannot access moment'))
        }
        // if morning
        if (this.sunAltitude <= LOW_DANGER) {
          resolve(sunTimesToday.morningDangerEnd)
        }
        else {
          resolve(sunTimesToday.eveningDangerEnd)
        }
      })
    },

    getTimeToDanger: function (sunTimesToday, sunTimesTomorrow) {
      return new Promise((resolve, reject) => {
        var moment = this.$moment
        if (!moment) {
          reject(Error('getTimeToDanger: cannot access moment'))
        }
        // if night: time to sunrise tomorrow
        if (this.sunAltitude <= LOW_DANGER) {
          // after midnight
          if (moment().isBefore(moment().hour(9))) {
            resolve(sunTimesToday.morningDangerBegin)
          }
          resolve(sunTimesTomorrow.morningDangerBegin)
        }
        else {
          resolve(sunTimesToday.eveningDangerBegin)
        }
      })
    },

    writeWaitMessage: function (timeUntil) {
      var moment = this.$moment
      let difference = moment(timeUntil).diff(moment(), 'minutes')
      if (difference > 119) {
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
