<template>
  <div class="about">
  <b-container>
    <div class='row' style='margin-top:2rem'><div class='col'>
    <ImagePanel :photo_id='1'></ImagePanel>
    </div></div>

    <div style='max-width:24rem; margin: 0 auto'>
    <div class='row'><div class='col'>
      <p>i wanted to make a lower-case app about saving ourselves from doom</p>
      <p>this program was written in <a href='https://vuejs.org/'>VueJS</a> & uses Vladimir Agafonkin&rsquo;s <a href='https://github.com/mourner/suncalc'>suncalc</a> library </p>
      <p>i don&rsquo;t collect your location or any other data</p>
      <p><router-link to="/" class='link'>don&rsquo;t drive into the sun</router-link></p>
    </div></div>
    </div>

  </b-container>

  <footer>
    <div class='row'>
      <div class='col-3' id='social-icons'>
        <a href='https://twitter.com/clearthecity'><img src='@/assets/images/Twitter_bird_logo.svg' alt='Twitter' style='height:1rem' class='mr-2'></a>
      </div>
      <div class='col' style='text-align: right'>
        &copy; 2019 nice derangements, inc.
      </div>
    </div>
  </footer>

  </div>
</template>

<style scoped>

footer {
  position: relative;
  margin-top: 2rem;
  bottom: 0.5rem;
  width: 100%;
  font-size: 0.8rem;
}

</style>

<script>
export default {
  name: 'about',
  components: {
    ImagePanel: () => import('@/components/ImagePanel.vue')
  }
}
</script>
