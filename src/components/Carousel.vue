<template>
  <carousel class="photos" :per-page="1" :mouse-drag="false" :navigationEnabled="true" paginationActiveColor="#463F3A" paginationColor="#BCB8B1" autoplay="true" autoplayTimeout=2000>
      <slide><img class="shortTripImg" src="/images/img1.jpg" alt="Carousel 1"></slide>
      <slide><img class="shortTripImg" src="/images/img3.jpg" alt="Carousel 2"></slide>
      <slide><img class="shortTripImg" src="/images/img4.jpg" alt="Carousel 3"></slide>
      <slide><img class="shortTripImg" src="/images/img1.jpg" alt="Carousel 4"></slide>
    </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
export default  { 
  components: {
    'carousel': Carousel,
    'slide': Slide
  },
  props: ['shortTrip']
};

//:navigationNextLabel="`<img src='/images/rightArrow.png class='iconCarousel'>`" :navigationPrevLabel="`<img src='/images/rightArrow.png class='iconCarousel'>`"


</script>

<style>
.iconCarousel {
 color: white;
}


</style>