<template>
  <div id='user-location'>
    <div class='row'>
      <b-button variant='outline-primary' v-on:click='getUserLocation' style='margin:auto'>Find Me</b-button>
    </div>
    <div class='row'><div class='col'>
      <p><span id='longitude'>{{ longitudeString }}</span></p>
      <p><span id='latitude'> {{ latitudeString }}</span></p>
    </div></div>
  </div>
</template>

<style scoped>
</style>

<script>

export default {
  name: 'UserLocation',
  data () {
    return {
      latitude: null,
      longitude: null
    }
  },
  computed: {
    latitudeString: function () {
      if (this.latitude) {
        return 'Latitude: ' + this.latitude.toFixed(2) + String.fromCharCode('176')
      }
      return ''
    },
    longitudeString: function () {
      if (this.longitude) {
        return 'Longitude: ' + this.longitude.toFixed(2) + String.fromCharCode('176')
      }
      return ''
    }
  },
  methods: {
    getUserLocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude
        })
      }
      else {
        alert("Can't access location")
      }
    },
    getSunPosition: function () {
      // const SunCalc = this.$suncalc
    }
  }
}

</script>
