<template>
  <section class="shortTripSection">
    <div
      class="shortTripDiv"
      v-for="(shortTrip, index) in trips"
      :key="index"
      v-on:click="goToDetail(shortTrip)"
    >
      <!-- <img class="shortTripImg" v-bind:src="'shortTrip.fotky[0].url'" alt="picOfCountryside" /> -->
      <img class="shortTripImg" v-bind:src="'/Images/img1.jpg'" alt="picOfCountryside" />
      <h3>{{ shortTrip.nazev }}</h3>
      <div class="elipsis">
        <p class="text">{{ shortTrip.odstavce[0].text }}</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data: function() {
    return {
      trips: []
    };
  },

  methods: {
    goToDetail(shortTrip) {
      this.$router.push({ path: "/detail/" + shortTrip.id });
    }
  },

  created: function() {
    this.trips = require('../routes.json');
    console.log('trips loaded...');
  }

  /*created: function getAllTrips_IncludesUnauthorized() {
    fetch("http://rest.dogtrekking.cz/trips/1")
      .then(response => response.json())
      .then(response => {
        this.trips = response;
      });
  }*/
};
</script>

<style>
</style>