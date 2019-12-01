<template>
  <div>
    <section class="searchTrip">
      <div class="filterRegion">
        <h3 class="searchTripH3">VYBER KRAJ</h3>
        <customSelect
          :options="['Celá Česká republika', 'Hlavní město Praha', 'Středočeský kraj', 'Jihočeský kraj', 'Plzeňský kraj', 'Karlovarský kraj', 'Ústecký kraj', 'Liberecký kraj', 'Královéhradecký kraj', 'Pardubický kraj', 'Kraj Vysočina', 'Jihomoravský kraj', 'Olomoucký kraj', 'Zlínský kraj', 'Moravskoslezský kraj']"
          v-on:input="filterTrips($event)"
        />
      </div>

      <div class="filterType">
        <h3 class="searchTripH3">VYBER TYP</h3>
        <form>
          <label class="radios">
            Turistika
            <input type="radio" name="tripType" value="1" checked="checked" v-model="tripTyp" />
            <span class="checkmark"></span>
          </label>
          <label class="radios">
            Cyklo
            <input type="radio" name="tripType" value="2" v-model="tripTyp" />
            <span class="checkmark"></span>
          </label>
          <label class="radios">
            In-line
            <input type="radio" name="tripType" value="3" v-model="tripTyp" />
            <span class="checkmark"></span>
          </label>
        </form>
      </div>
    </section>

    <section class="shortTripSection">
      <div class="shortTripDiv" v-for="(shortTrip, index) in filteredTrips" :key="index">
        <!--<img class="shortTripImg" v-bind:src="'../public/images/'+shortTrip.fotky[0].url" alt="picOfCountryside">-->
        <img class="shortTripImg" v-bind:src="'./assets/images/img2.jpg'" alt="picOfCountryside" />
        <h3>{{ shortTrip.nazev }}</h3>
        <div class="elipsis">
          <p class="text">{{ shortTrip.odstavce[0].text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>





<script>
import CustomSelect from "./CustomSelect.vue";

export default {
  data: function() {
    return {
      filteredTrips: [],
      trips: null,
      tripTyp: 1,
      tripKraj: 0
    }
  },

  watch: {
    tripTyp: function() {
      this.filteredTrips = (this.tripKraj === 0 ? this.trips.filter(trip => trip.typ == this.tripTyp): this.trips.filter(trip => trip.kraj == this.tripKraj).filter(trip => trip.typ == this.tripTyp));

    }   
  },

  components: {
    customSelect: CustomSelect
  },

  created: function() {
    this.trips = require("../routes.json");
  },

  methods: {
    filterTrips(event) {
      this.tripKraj = event.index;
      this.filteredTrips = (this.tripKraj === 0 ? this.trips.filter(trip => trip.typ == this.tripTyp) : this.trips.filter(trip => trip.kraj == event.index).filter(trip => trip.typ == this.tripTyp));
    } 
  }
};
</script>





<style>
.searchTripH3 {
  margin-left: 5%;
  font-size: 20px;
  color: #463f3a;
}

.filterType {
  margin-bottom: 20%;
}

.radios {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #463f3a;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 5%;
}

/* Hide the browser's default radio button */
.radios input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 5px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
}

/* On mouse-over, add different background color */
.radios:hover input ~ .checkmark {
  background-color: #bcb8b1;
}

/* When the radio button is checked, add a dark background */
.radios input:checked ~ .checkmark {
  background-color: #8a817c;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radios input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radios .checkmark:after {
  top: 7px;
  left: 7px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}
</style>