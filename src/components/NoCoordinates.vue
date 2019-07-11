<template>
  <div class='col' id='no-coordinates'>
    <div v-if='insecure'>
      <p>there is a problem with the security configuration of this program</p>
      <p>we do apologize</p>
    </div>

    <div v-else>
      <p>this program requires access to your location</p>
      <p>none of your data will be stored or shared</p>
      <b-button pill variant='outline-primary' v-on:click='requestPermission' class='mr-2'>allow</b-button>

      <div v-if='showBrowserOptions' class='row' id='browserOptions'>
        <p style='font-size:0.9em'>Update your browser settings, then refresh this page.</p>
        <ul>
          <li v-bind:key='b' v-for='b in browserLinks'>
            <a v-bind:href='b.url' target='_blank' class=''>
              {{ b.browser }}
              <img src='@/assets/images/new_window.svg' alt='' style='height:0.9rem' />
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>

#browserOptions {
  text-align: left;
  width: 24rem;
  margin: 1rem auto 0 auto;
}

#browserOptions ul {
  list-style-type: none;
  line-height: 1.8;
}

</style>

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
      showBrowserOptions: false,
      browserLinks: [
          {
            'browser': 'Firefox',
            'url': 'https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites'
          },
          {
            'browser': 'Chrome',
            'url': 'https://support.google.com/chrome/answer/114662?visit_id=636984104253447540-631076792&rd=1'
          },
          {
            'browser': 'IE 11',
            'url': 'https://support.microsoft.com/en-ca/help/17479/windows-internet-explorer-11-change-security-privacy-settings'
          },
          {
            'browser': 'Safari (Mac)',
            'url': 'https://support.apple.com/en-ca/guide/safari/ibrw7f78f7fe/12.0/mac/10.14'
          }
      ]
    }
  },
  methods: {
    requestPermission: function () {
      this.showBrowserOptions = !this.showBrowserOptions
    }
  }
}

</script>
