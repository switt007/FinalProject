<template>
  <div class="detail">
    <!-- HLAVICKA S NAZVEM A AUTOREM -->
    <section class="tripHeader">
      <h1 class="tripTitle">{{ shortTrip.nazev }}</h1>
      <hr class="divider" />
      <p class="author">{{ shortTrip.autor }}</p>
    </section>

    <div class="flexContainer">
      <!-- SEZNAM PARAMETRU VYLETU -->
      <section class="listOfParameters">
        <ul>
          <!-- kraj -->
          <li>{{ region }}</li>
          <!-- typ -->
          <li>{{ type }}</li>
          <!-- delka -->
          <li>{{ delka }} km</li>
        </ul>
      </section>

      <!-- MAPA -->
      <maps class="maps" v-bind:gpxObject="gpxObject" v-if="gpxObject"/>
    </div>

    <!-- TEXT -->
    <section class="tripTextSection">
      <div class="tripText" v-for="(paragraph, index) in text" v-bind:key="index">
        <p>{{ paragraph }}</p>
      </div>
    </section>

    <!-- FOTKY -->
    <carousel v-bind:shortTrip="shortTrip" />
  </div>
</template>

<script>
import Maps from "@/components/Maps.vue";
import Carousel from "@/components/Carousel.vue";
import {gpx} from '@tmcw/togeojson';
import * as turf from '@turf/turf';

export default {
  data: function() {
    return {
      trips: [],
      shortTrip: {},
      regions: [
        "Celá Česká republika",
        "Hlavní město Praha",
        "Středočeský kraj",
        "Jihočeský kraj",
        "Plzeňský kraj",
        "Karlovarský kraj",
        "Ústecký kraj",
        "Libereceký kraj",
        "Královéhradecký kraj",
        "Pardubický kraj",
        "Kraj Vysočina",
        "Jihomoravský kraj",
        "Olomoucký kraj",
        "Moravskoslezský kraj",
        "Zlínský kraj",
        "Zahraničí"
      ],
      region: "",
      types: ["Turistika", "Cyklistika", "Ostatní"],
      type: "",
      text: [],
      delka: null,
      gpxObject: null
    };
  },
  components: {
    maps: Maps,
    carousel: Carousel
  },
  props: ["tripID"],
  
  created: function getAllTrips_IncludesUnauthorized() {
    fetch("http://rest.dogtrekking.cz/trips/1")
      .then(response => response.json())
      .then(trips => {
        this.shortTrip = trips.filter(
          shortTrip2 => shortTrip2.id == this.tripID
        )[0];
        this.region = this.regions[this.shortTrip.kraj];
        this.type = this.types[this.shortTrip.typ - 1];
        this.text = this.shortTrip.odstavce[0].text.split(/\r?\n/); 
      })
      .then(response => this.fetchGPX(this.shortTrip.trasa))
      .then(GPX => {
        this.gpxObject = this.getTripGPX(GPX);
        this.delka = Math.round(this.getGPXLength(this.gpxObject));
      }
    );
  },
  methods: {
    getTripGPX(GPX) {
      return JAK.XML.createDocument(GPX); 
    },
    getGPXLength(gpxObject) {
      var geoJson = gpx(gpxObject);
      return turf.length(geoJson);
    },
    fetchGPX(guid) {
      return fetch(`http://rest.dogtrekking.cz/gpx/${guid}`)
      .then(response=>response.json());
    }
  }
};
</script>

<style scoped>
.detail {
  color: #463f3a;
  background-color: white;
}

.tripHeader {
  text-align: center;
  padding-top: 40px;
}

.tripTitle {
  margin-bottom: 0;
  font-size: 28px;
  padding-left: 2%;
  padding-right: 2%;
}

.divider {
  margin-left: 25%;
  margin-right: 25%;
  background-color: #bcb8b1;
  color: #bcb8b1;
  border: none;
  height: 3px;
}

.listOfParameters {
  margin: 10% auto 10% 5%;
  font-size: 20px;
}

.tripText {
  padding-left: 8%;
  padding-right: 8%;
  margin-bottom: 3%;
  margin-top: 3%;
}

.tripTextSection {
  margin-top: 10%;
  margin-bottom: 10%;
}

li {
  list-style-type: disc;
}

/* TABLET */

@media (min-width: 500px) {
  .tripTitle {
    font-size: 38px;
  }

  .flexContainer {
    display: flex;
    margin-top: 8%;
  }

  .maps,
  .listOfParameters {
    flex: 1 1 auto;
  }

  .listOfParameters {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 3%;
    margin-left: 7%;
  }

  .maps {
    margin-top: 3%;
  }

  .tripHeader {
    padding-top: 8%;
  }

  .shortTripImg {
    display: block;
  }

  .tripTextSection {
    margin-top: 5%;
  }
}

/* DESKTOP */

@media (min-width: 1000px) {
  .tripTitle {
    font-size: 42px;
  }

  body {
    background-color: #f4f3ee;
  }

  .detail {
    max-width: 960px;
    margin: auto;
    background-color: white;
    box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2),
      0 3px 5px -5px rgba(0, 0, 0, 0.2);
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .listOfParameters {
    padding-left: 5%;
  }
}
</style>