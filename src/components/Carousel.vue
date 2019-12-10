<template>
  <carousel
    class="photos"
    :per-page="1"
    :mouse-drag="false"
    paginationActiveColor="#463F3A"
    paginationColor="#BCB8B1"
    :autoplay="true"
    :autoplayTimeout="2500"
    easing="linear"
  >
    <slide v-for="(fotka, index2) in typeof shortTrip === 'undefined' ? [] : shortTrip.fotky" v-bind:key="index2">
      <img class="shortTripImg" v-bind:src="`http://img.dogtrekking.cz/${fotka.url}`" alt="Carousel 1" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    carousel: Carousel,
    slide: Slide
  },
  props: ["shortTrip"]
};
</script>

<style>
.iconCarousel {
  color: white;
}
</style>