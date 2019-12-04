<template>
  <section class="menu">
    <ul class="ulMenu">
      <li
        class="liMenu"
        v-on:click="changePage('/searchTrip')"
        v-bind:class="{aktivni:this.$route.path=='/searchTrip'}"
      >Vyhledej výlet</li>
      <li
        class="liMenu"
        v-on:click="changePage('/addTrip')"
        v-bind:class="{aktivni:this.$route.path=='/addTrip'}"
      >Přidej výlet</li>
      <li
        class="liMenu"
        v-on:click="changePage('/listOfTrips')"
        v-bind:class="{aktivni:this.$route.path=='/listOfTrips'}"
      >Seznam výletů</li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    changePage(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style>
</style>


