<template>
  <div id='safe-to-drive'>
    <p v-if='isSafe'>you&rsquo;ll be ok</p>
    <p v-else>don&rsquo;t drive into the sun</p>
    <br />
    <p><router-link to="/about" class='link'>about</router-link></p>
  </div>
</template>

<style scoped>

.link {

}
.link:hover {
  text-decoration: underline;
  text-decoration-style: dotted;
}

</style>

<script>

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
      isSafe: true
    }
  },
  mounted: function () {
    if (this.sunAltitude >= 1 && this.sunAltitude <= 8) {
      this.isSafe = false
    }
  },
  methods: {
    getSafeHours: function () {
      // ...
    }
  }
}

</script>
