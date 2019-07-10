<template>
  <div class='col' id='no-coordinates'>
    <div v-if='insecure'>
      <p>there is a problem with the security configuration of this program</p>
      <p>we do apologize</p>
    </div>

    <div v-else>
      <p>this program requires access to your location</p>
      <p>none of your data will be stored or shared</p>
      <b-button pill variant='outline-info' v-on:click='requestPermission' class='mr-2'>allow</b-button>
      <b-button pill variant='outline-secondary' onclick='window.history.back()'>decline</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NoCoordinates',
  props: {
    insecure: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    requestPermission: function () {
      alert('Coming soon')
    }
  }
}

</script>
