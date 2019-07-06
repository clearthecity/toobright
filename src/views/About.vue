<template>
  <div class="about"><b-container>
    <ImagePanel :photo_id='1'></ImagePanel>

    <div class='row'><div class='col'>
      <p>I like making apps, and I don&rsquo;t like driving into the sun.</p>
    </div></div>

  </b-container></div>
</template>

<script>
export default {
  name: 'about',
  components: {
    ImagePanel: () => import('@/components/ImagePanel.vue')
  }
}
</script>
