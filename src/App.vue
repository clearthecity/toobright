<template>
  <div id="app">
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>
</template>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .link:hover {
    text-decoration-style: dotted;
  }

  .link-underline {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  .link-underline:hover {
    text-decoration: underline;
    text-decoration-style: solid;
  }

  .link-underline:active {
    text-decoration: none;
  }

</style>

<script>

// import MenuIcon from 'vue-material-design-icons/Menu.vue'

export default {
  name: 'App',
  components: {
    // MenuIcon
    // CloseIcon: () => import('vue-material-design-icons/Close.vue')
  },
  data () {
    return {
      appStyle: {
        backgroundColor: 'lightgrey'
      }
    }
  }
}
</script>
