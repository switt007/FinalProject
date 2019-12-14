<template>
  <div>
    <!-- HEADER -->
    <header>
      <h1 class="title">Kudy tudy do přírody?</h1>
      <p class="saying">"Alespoň jednou za rok navštiv místo, kde jsi nikdy předtím nebyl"</p>
      <p class="saying2">Dalajláma</p>
    </header>

    <!-- MENU -->
    <mojeMenu />

    <!-- VYHLEDAVANI A PRIDAVANI VYLETU NEBO KARTY S UPOUTAVKAMI NA UVODNI STRANCE -->
    <router-view></router-view>

    <!-- FOOTER -->
    <footer>
      <p>
        Zdroje textu:
        <a href="https://www.gotobrno.cz/misto/moravsky-kras/">Moravský kras, </a>
        <a href="https://www.gotobrno.cz/misto/palava/">Pálava, </a>
        <a href="https://www.gotobrno.cz/misto/slavkovske-bojiste-a-zamek/"> Slavkov, </a>
        <a href="https://www.vitalia.cz/clanky/tip-na-vylet-z-pardubic-na-kole-do-zeleznych-hor/">Železné hory </a>
      </p>
      <p>&copy; Jana Raczová & Alexandra Šimková</p>
    </footer>
  </div>
</template>




<script>
import Carousel from "./components/Carousel.vue";
import Menu from "./components/Menu.vue";
import SearchTrip from "./components/SearchTrip.vue";
import AddTrip from "./components/AddTrip.vue";
import ListOfTrips from "./components/ListOfTrips.vue";
import ShortTrip from "./components/ShortTrip.vue";
import Detail from "./components/Detail.vue";

export default {
  data: function() {
    return {
      activePage: "",
      trips: []
    };
  },

  components: {
    'mojeMenu': Menu,
    'Carousel': Carousel,
    'searchTrip': SearchTrip,
    'addTrip': AddTrip,
    'listOfTrips': ListOfTrips,
    'shortTrip': ShortTrip
  },

  /*created: function() {
    this.trips = require('./routes.json');
    console.log('trips loaded...');
  }*/

  created: function getAllTrips_IncludesUnauthorized() {
    fetch("http://rest.dogtrekking.cz/trips/1")
      .then(response => response.json())
      .then(response => {
        this.trips = response;
        console.log(this.trips);
      });
  }
};
</script>











<style lang="scss">


body {
  margin: 0;
  padding: 0;
  font-family: "Merriweather", serif;
  font-size: 20px;
  line-height: 1.6;
  min-width: 200px;
  font-size: 16px;
  background-color: #f4f3ee;
  color: white;
}
header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(assets/images/uvodniObrazek3.jpg) center center;
  background-size: cover;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 15% 0;
}
.title {
  font-size: 42px;
  padding-bottom: 2%;
  padding-left: 2%;
  padding-right: 2%;
}
.saying {
  padding: 0 10%;
  font-style: italic;
  opacity: 0.7;
}
.saying2 {
  opacity: 0.7;
}
.menu {
  padding: 10%;
}
.liMenu {
  background-color: $menuColor;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  margin: 5% 0;
  border-radius: 8px;
  list-style-type: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.liMenu:hover,
.liMenu:active {
  background-color: #bcb8b1;
  color: #463f3a;
}
.aktivni {
  background-color: #bcb8b1;
  color: #463f3a;
}
.ulMenu {
  padding: 0;
}
.shortTripDiv {
  background-color: #8a817c;
  padding: 5% 5% 3% 5%;
  margin: 10%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.shortTripImg {
  width: 100%;
}
.text {
  display: none;
}
footer {
  background-color: #8a817c;
  padding: 5%;
  font-size: 14px;
}
a:not(.map) {
  color: white;
}
.searchTrip {
  margin: 10%;
  color: #463f3a;
}
p {
  margin-bottom: 0;
  margin-top: 0;
}
/* TABLET */
@media (min-width: 500px) {
  body {
    font-size: 24px;
  }
  header {
    padding: 10% 0;
  }
  .title {
    font-size: 55px;
  }
  .menu {
    margin: 0;
    padding: 0;
  }
  .ulMenu {
    display: flex;
    justify-content: center;
    margin: 0;
    background-color: #8a817c;
  }
  .liMenu {
    margin: 0 0%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 24px;
    border-radius: 0;
  }
  .shortTripSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10% 10% 7% 10%;
  }
  .shortTripDiv {
    margin: 7%;
    border-radius: 0;
  }
  footer {
    font-size: 20px;
    padding: 5%;
    text-align: center;
  }
  .searchTrip {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 0;
    padding-bottom: 0;
    max-width: 960px;
  }
  .filterRegion,
  .filterType {
    flex: 1 1 auto;
  }
  .filterType {
    margin-bottom: 10%;
  }
  .custom-select {
    margin-left: 5%;
    width: 80%;
  }
}
/* DESKTOP */
@media (min-width: 1000px) {
  .text {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
  }
  .shortTripSection {
    max-width: 960px;
    justify-content: center;
    margin: auto;
    background-color: white;
    box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2),
      0 3px 5px -5px rgba(0, 0, 0, 0.2);
    margin-top: 5%;
    margin-bottom: 5%;
  }
  body {
    background-color: #f4f3ee;
  }
  .searchTrip {
    background-color: white;
    box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2),
      0 3px 5px -5px rgba(0, 0, 0, 0.2);
    max-width: 960px;
    margin: auto;
    margin-top: 5%;
    padding-top: 5%;
    /*border: 3px solid #8A817C;*/
  }
  .filterRegion,
  .filterType {
    padding-left: 5%;
  }
  .checkmark {
    background-color: #bcb8b1;
  }
  .radios:hover input ~ .checkmark {
    background-color: #8a817c;
  }
  .custom-select {
    width: 80%;
  }
  .filterType {
    margin-bottom: 10%;
  }
}
</style>
