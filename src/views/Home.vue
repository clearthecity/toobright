<template>
  <div class="home"><b-container>

    <UserLocation></UserLocation>

  </b-container></div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    UserLocation: () => import('@/components/UserLocation.vue')
  }
}
</script>
