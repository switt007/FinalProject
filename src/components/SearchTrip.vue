<template>
  <div>
    <section class="searchTrip" id="searchTripID">
      <div class="filterRegion">
        <h3 class="searchTripH3">VYBER KRAJ</h3>
        <customSelect
          :options="['Celá Česká republika', 'Hlavní město Praha', 'Středočeský kraj', 'Jihočeský kraj', 'Plzeňský kraj', 'Karlovarský kraj', 'Ústecký kraj', 'Liberecký kraj', 'Královéhradecký kraj', 'Pardubický kraj', 'Kraj Vysočina', 'Jihomoravský kraj', 'Olomoucký kraj', 'Zlínský kraj', 'Moravskoslezský kraj', 'Zahraničí']"
          v-on:input="filterRegion($event)"
        />
        <h3 class="searchTripH3">VYBER AUTORA</h3>
        <customSelect :options="arrayOfAuthors" v-on:input="filterAuthor($event)" />
      </div>

      <div class="filterType">
        <h3 class="searchTripH3">VYBER TYP</h3>
        <form>
          <label class="radios">
            Turistika
            <input
              type="radio"
              name="tripType"
              value="1"
              checked="checked"
              v-model="tripTyp"
            />
            <span class="checkmark"></span>
          </label>
          <label class="radios">
            Cyklo
            <input type="radio" name="tripType" value="2" v-model="tripTyp" />
            <span class="checkmark"></span>
          </label>
          <label class="radios">
            Ostatní
            <input type="radio" name="tripType" value="3" v-model="tripTyp" />
            <span class="checkmark"></span>
          </label>
        </form>
      </div>
    </section>

    <section class="shortTripSection">
      <div
        class="shortTripDiv"
        v-for="(shortTrip, index) in filteredTrips"
        :key="index"
        v-on:click="goToDetail(shortTrip)"
      >
        <img
          class="shortTripImg"
          v-bind:src="`http://img.dogtrekking.cz/${typeof shortTrip.fotky[0] === 'undefined' ? '' : shortTrip.fotky[0].url}`"
          alt="picOfCountryside"
        />
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
      trips: [],
      tripTyp: 1,
      tripKraj: 0,
      tripAutor: 0,
      singleTrip: {},
      arrayOfAuthors: ['Všichni']
    };
  },

  watch: {
    tripTyp: function() {
      this.filterTrips();
    }
  },

  components: {
    customSelect: CustomSelect
  },

  created: function getAllTrips_IncludesUnauthorized() {
    fetch("http://rest.dogtrekking.cz/trips/1")
      .then(response => response.json())
      .then(response => {
        this.trips = response;
        this.generateArrayOfAuthors();
        console.log(this.trips);
        this.filterTrips();
   });
  },

  /*created: function() {
    this.trips = require("../routes.json");
    this.generateArrayOfAuthors();
  },*/

  methods: {
    filterRegion(event) {
      console.log("method filterTrips executed...");
      this.tripKraj = event.index;
      this.filterTrips();
    },
    generateArrayOfAuthors() {
      //this.arrayOfAuthors.push("Všichni");
      this.trips.forEach(trip => {
        trip.autor = trip.autor.trim();
        if (!this.arrayOfAuthors.includes(trip.autor)) {
          this.arrayOfAuthors.push(trip.autor);
        }
      });
      return this.arrayOfAuthors;
    },

    filterAuthor(event) {
      this.tripAutor = this.arrayOfAuthors[event.index];
      this.filterTrips();
    },

    /*filterTrips() {
      this.filteredTrips =
        this.tripAutor === "Všichni"
          ? this.tripKraj === 0
            ? this.trips.filter(trip => trip.typ == this.tripTyp)
            : this.trips
                .filter(trip => trip.typ == this.tripTyp)
                .filter(trip => trip.kraj == this.tripKraj)
          : this.tripKraj === 0
          ? this.trips
              .filter(trip => trip.typ == this.tripTyp)
              .filter(trip => trip.autor == this.tripAutor)
          : this.trips
              .filter(trip => trip.autor == this.tripAutor)
              .filter(trip => trip.kraj == this.tripKraj)
              .filter(trip => trip.typ == this.tripTyp); 
    },*/

    filterTrips() {
    this.filteredTrips = this.trips.filter(trip => trip.typ == this.tripTyp);
    this.filteredTrips = this.tripKraj !== 0 ? this.filteredTrips.filter(trip => trip.kraj == this.tripKraj) : this.filteredTrips;
    //this.filteredTrips = this.tripAutor !== 'Všichni' ? this.filteredTrips.filter(trip => trip.autor == this.tripAutor) : this.filteredTrips;
    console.log(this.filteredTrips);
    },

    goToDetail(shortTrip) {
      this.$router.push({ path: "/detail/" + shortTrip.id });
    }
  }
};
</script>





<style>
.searchTripH3 {
  margin-left: 5%;
  font-size: 20px;
  color: #463f3a;
  margin-top: 0;
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