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
          <li>{{ shortTrip.delka }} km</li>
        </ul>
      </section>

      <!-- MAPA -->
      <section class="map"></section>
    </div>

    <!-- TEXT 

    <section class="tripText" v-for="(text, index) in shortTrip.odstavce" v-bind:key="index">
      <p>{{ text.text }}</p>
      <p>Severně od Brna se rozkládá Chráněná krajinná oblast Moravský kras. Na ploše 92 km2 se vyskytují četné unikáty živé i neživé přírody. Lze se např. podívat do Macochy, téměř 140 metrů hluboké propasti, tzv. light hole, jež je největší svého druhu ve střední Evropě. Horní část propasti je dlouhá 174 a široká 76 metrů.</p>
      <p>Z více než tisícovky jeskyní je jich přístupných pět. Punkevní jeskyně nabízejí možnost plavby po podzemní říčce spojenou s prohlídkou dna Machochy. Kateřinská jeskyně je známá svými výjimečnými hůlkovými stalagmity. Balcarka vyniká bohatou barevnou krápníkovou výzdobou. Sloupsko-šošůvské jeskyně tvoří mohutné chodby a podzemní propasti. Výpustek má zase za sebou bohatou vojenskou historii.</p>
      <p>Pozoruhodné jsou třeba také krasové kaňony Pustý a Suchý žleb a Rudické propadání, kde pod zemí mizí Jedovnický potok a zpět na povrch vyvěrá až po dvanácti kilometrech u Býčí skály.</p>
      <p>Moravský kras je protkán hustou sítí pěších i cyklistických tras, na kterých lze narazit na další zajímavosti, např. zříceniny hradů, poutní kostely nebo rozhledny. V oblasti je také několik často navštěvovaných horolezeckých terénů.</p>
    </section> -->

    <!-- TEXT -->

    <section class="tripText" v-for="(paragraph, index) in text" v-bind:key="index">
      <p>{{ paragraph }}</p>
    </section>

    <!-- FOTKY -->
    <section class="photos" v-for="(fotka, index2) in shortTrip.fotky" v-bind:key="index2">
      <img class="shortTripImg" v-bind:src="'/Images/img1.jpg'" v-bind:alt="fotka.alt" />
      <img class="shortTripImg" v-bind:src="'/Images/img3.jpg'" alt="picOfCountryside" />
      <img class="shortTripImg" v-bind:src="'/Images/img4.jpg'" alt="picOfCountryside" />
      <img class="shortTripImg" v-bind:src="'/Images/img1.jpg'" alt="picOfCountryside" />
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      trips: [],
      shortTrip: {},
      regions: ["Celá Česká republika", "Hlavní město Praha", "Středočeský kraj", "Jihočeský kraj", "Plzeňský kraj", "Karlovarský kraj", "Ústecký kraj", "Libereceký kraj", "Královéhradecký kraj", "Pardubický kraj", "Kraj Vysočina", "Jihomoravský kraj", "Olomoucký kraj", "Moravskoslezský kraj", "Zlínský kraj", "Zahraničí"],
      region: '',
      types: ["Turistika", "Cyklistika", "Ostatní"],
      type: '',
      text: []
    };
  },
  props: ["tripID"],
  /*
  created: function getAllTrips_IncludesUnauthorized() {
    fetch("http://rest.dogtrekking.cz/trips/1")
      .then(response => response.json())
      .then(response => {
        this.trips = response;
        console.log(this.trips);
        this.shortTrip = this.trips.filter(
          shortTrip2 => shortTrip2.id == this.tripID
        )[0];
        this.region = this.regions[this.shortTrip.kraj];
        this.type = this.types[this.shortTrip.typ];
        //this.text = this.shortTrip.odstavce.split(/\r?\n/);
    });
  },*/
  created: function() {
    this.trips = require('../routes.json');
    console.log('trips loaded...');
    this.shortTrip = this.trips.filter(
          shortTrip2 => shortTrip2.id == this.tripID
        )[0];
        this.region = this.regions[this.shortTrip.kraj];
        this.type = this.types[this.shortTrip.typ];
        this.text = this.shortTrip.odstavce[0].text.split(/\r?\n/);
  },
  watch: {
    tripID: function() {
      this.shortTrip = this.trips.filter(
        shortTrip2 => shortTrip2.id == this.tripID
      )[0];
      this.region = this.regions[this.shortTrip.kraj];
      this.type = this.types[this.shortTrip.typ];
    }
  }
}
</script>

<style scoped>
.detail {
  color: #463f3a;
  background-color: white;
}

.tripHeader {
  text-align: center;
  padding-top: 20px;
}

.tripTitle {
  margin-bottom: 0;
  font-size: 28px;
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
  margin-bottom: 10%;
  margin-top: 5%;
}

/* TABLET */

@media (min-width: 500px) {
  .tripTitle {
    font-size: 38px;
  }

  .flexContainer {
    display: flex;
  }

  .map,
  .listOfParameters {
    flex: 1 1 auto;
  }

  .listOfParameters {
    font-size: 24px;
    margin-top: 5%;
    margin-bottom: 3%;
  }

  .tripHeader {
    padding-top: 8%;
  }

  .photos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .shortTripImg {
    display: block;
  }
}

/* DESKTOP */

@media (min-width: 1000px) {
  .tripTitle {
    font-size: 42px;
  }

  .photos {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>