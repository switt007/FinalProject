<template>
  <section class="shortTripSection">
        <div class="shortTripDiv" v-for="(shortTrip, index) in trips" :key="index">
            <img class="shortTripImg" v-bind:src="'/Images/' + shortTrip.fotky[0].url" alt="picOfCountryside">
            <h3>{{ shortTrip.nazev }}</h3>
            <div class="elipsis">
                <p class="text">{{ shortTrip.odstavce[0].text }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
 data: function() {
    return {
      trips: null
    }
  },

created: function() {
    this.trips = require('../routes.json');
    console.log('trips loaded...');
  }
}
</script>

<style>

</style>