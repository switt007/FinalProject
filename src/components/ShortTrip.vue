<template>
  <section class="shortTripSection">
    <div
      class="shortTripDiv"
      v-for="(shortTrip, index) in randomTrips"
      :key="index"
      v-on:click="goToDetail(shortTrip)"
    >
      <img class="shortTripImg" v-bind:src="'http://img.dogtrekking.cz/' + `${typeof shortTrip.fotky[0] === 'undefined' ? '' : shortTrip.fotky[0].url}`" alt="picOfCountryside" />
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
      trips: [],
      randomTrips: []
    };
  },

  methods: {
    goToDetail(shortTrip) {
      this.$router.push({ path: "/detail/" + shortTrip.id });
    }
  },

  /*created: function() {
    this.trips = require('../routes.json');
    console.log('trips loaded...');
    for (let i = 0; i < 2; i++) {
      let item = Math.floor(Math.random() * this.trips.length);
      this.randomTrips.push(this.trips[item]);
      this.trips = this.trips.slice(0,item).concat(this.trips.slice(item+1, this.trips.length));
    }
    console.log(this.randomTrips);
    console.log(this.trips);
  }*/

  created: function getAllTrips_IncludesUnauthorized() {
    fetch("http://rest.dogtrekking.cz/trips/1")
      .then(response => response.json())
      .then(response => {
        this.trips = response;
        for (let i = 0; i < 4; i++) {
          let item = Math.floor(Math.random() * this.trips.length);
          this.randomTrips.push(this.trips[item]);
          this.trips = this.trips.slice(0, item).concat(this.trips.slice(item + 1, this.trips.length));
       }
    });
  }
};
</script>

<style>
</style>