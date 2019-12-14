<template>
  <section class="listOfTrips">
    <div class="mapa">
      <mapavyletu v-bind:trips="filtrovanySeznamVyletu" />
    </div>
    <!-- <div>
      <div v-on:click="filtrTuristika">filtr1</div>
      <div v-on:click="filtrCyklistika">filtr1</div>
      <div v-on:click="filtrOstatni">filtr1</div>
    </div>
-->

    <!-- PRO MAZANI VYLETU ... -->
    <!-- <div>
      <div v-for="vylet in filtrovanySeznamVyletu" v-bind:key="vylet.id">{{vylet.nazev}}
        <button v-on:click="smazVylet(vylet.id)">Smazni</button>
      </div>
    </div> -->
  </section>
</template>

<script>

import MapsOfTrips from './MapOfTrips.vue';

export default {
  components: {
    'mapavyletu': MapsOfTrips
  },
  data: function() {
   return {
    seznamVyletu: [],
    filtrovanySeznamVyletu: []
   };
  },
  methods: {
    // PRO MAZANI VYLETU ...
    // smazVylet: function(id) {
    //   fetch("http://rest.dogtrekking.cz/trips/delete/Czechitas2019/" + id)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.seznamVyletu = data;
    //   });
    // }
  },

  // methods: {
  //   filtrTuristika() {
  //       this.filtrovanySeznamVyletu =  this.seznamVyletu.filter(function(vylet) {
  //         return vylet.typ === 1;
  //           });
      
  //   },
    
  //   filtrCyklistika() {
  //       this.filtrovanySeznamVyletu =  this.seznamVyletu.filter(function(vylet) {
  //         return vylet.typ === 2;
  //           });
      
  //   },

  //   filtrOstatni() {
  //       this.filtrovanySeznamVyletu =  this.seznamVyletu.filter(function(vylet) {
  //         return (vylet.typ !== 1) && (vylet.typ !== 2);
  //         });
      
  //   }

  // },

  mounted() {
    // fetch("http://rest.dogtrekking.cz/trips/1/1") - verze pro stahnuti vyletu bez GPX - v pripade, kdy vylety jiz maji obsazene pole map_position. Rychlejsi, mene narocne na data
    fetch("http://rest.dogtrekking.cz/trips/1")
    .then(response => response.json())
    .then(data => {
      this.seznamVyletu = data;
      this.filtrovanySeznamVyletu = data;
    });
  }
}




</script>

<style scoped>
.mapa {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f4f3ee;
  margin-top: 30px;
  margin-bottom: 30px;
}



.listOfTrips {
  background-color: peru;
  color: darkslategray;
}

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