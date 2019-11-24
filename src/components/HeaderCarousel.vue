<template>
  <carousel :per-page="1" :autoplay="true" :mouse-drag="false">
    <slide><img src="../assets/images/carousel/carousel1.jpg" alt="Carousel 1"></slide>
    <slide><img src="../assets/images/carousel/carousel2.jpg" alt="Carousel 2"></slide>
    <slide><img src="../assets/images/carousel/carousel3.jpg" alt="Carousel 3"></slide>
    <slide><img src="../assets/images/carousel/carousel4.jpg" alt="Carousel 4"></slide>
  </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
export default  { 
  components: {
    'carousel': Carousel,
    'slide': Slide


  },

};



</script>

<style>
</style>