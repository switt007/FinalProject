<template>
  <section class="menu">
    <ul class="ulMenu">
      <li
        class="liMenu"
        v-on:click="changePage('/searchTrip#searchTripID')"
        v-bind:class="{aktivni:this.$route.path=='/searchTrip'}"
      >Vyhledej výlet</li>
      <li
        class="liMenu"
        v-on:click="changePage('/addTrip#addTripID')"
        v-bind:class="{aktivni:this.$route.path=='/addTrip'}"
      >Přidej výlet</li>
      <li
        class="liMenu"
        v-on:click="changePage('/listOfTrips#mapTripID')"
        v-bind:class="{aktivni:this.$route.path=='/listOfTrips'}"
      >Mapa výletů</li>
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


