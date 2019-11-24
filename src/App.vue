<template>
  <div>
    <HeaderCarousel></HeaderCarousel>
    <mojeMenu />
    <mujVylet />
  </div>
</template>

<script>
import HeaderCarousel from './components/HeaderCarousel.vue';
import Menu from './components/Menu.vue';
import Vylet from './components/Vylet.vue';


export default {

  components: {
    'mojeMenu': Menu,
    'mujVylet': Vylet,
    'HeaderCarousel': HeaderCarousel

  },
}

</script>

<style>

</style>
