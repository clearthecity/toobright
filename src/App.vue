<template>
  <div id="app"><b-container fluid>
    <div id='nav-menu-area'>
      <a v-b-toggle.nav-collapse id='nav-menu-toggle'>
        <MenuIcon class="when-closed" role='navigation' :size='36' />
        <CloseIcon class="when-opened" role='navigation' :size='28' />
      </a>
      <b-collapse id="nav-collapse">
        <b-nav vertical id='nav'>
          <b-nav-item><router-link to="/">home</router-link></b-nav-item>
          <b-nav-item><router-link to="/about">about</router-link></b-nav-item>
        </b-nav>
      </b-collapse>
    </div>
    <router-view/>
  </b-container></div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: 500;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a:hover {
  text-decoration-style: dotted;
}

.nav-link {
  padding-left: 0;
}

.collapsed > .when-opened, :not(.collapsed) > .when-closed {
  display: none;
}

a .material-design-icon {
  cursor: pointer;
}

</style>

<script>

import MenuIcon from 'vue-material-design-icons/Menu.vue'

export default {
  name: 'App',
  components: {
    MenuIcon,
    CloseIcon: () => import('vue-material-design-icons/Close.vue')
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
