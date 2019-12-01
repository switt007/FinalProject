<template>
  <div>
    <!-- HEADER -->

    <header>
        <h1 class="title">Outdoor nadšenci</h1>
        <p class="saying">"Alespoň jednou za rok navštiv místo, kde jsi nikdy předtím nebyl"</p>
        <p class="saying2">Dalajláma</p>
    </header>  

    <!-- MENU -->

    <mojeMenu />  

    <!-- VYHLEDAVANI A PRIDAVANI VYLETU -->
   
   <router-view></router-view>

  

    <!-- Divy s upoutavkou na vylety - namnozit pomoci vue! info natahat pres json -->
    <section class="shortTripSection">
        <div class="shortTripDiv">
            <img class="shortTripImg" src="./assets/images/img1.jpg" alt="picOfCountryside">
            <h3>Výlet do Moravského krasu</h3>
            <div class="elipsis">
                <p class="text">Severně od Brna se rozkládá Chráněná krajinná oblast Moravský kras. Na ploše 92 km2 se vyskytují četné unikáty živé i neživé přírody. Lze se např. podívat do Macochy, téměř 140 metrů hluboké propasti, tzv. light hole, jež je největší svého druhu ve střední Evropě. Horní část propasti je dlouhá 174 a široká 76 metrů.
                    Z více než tisícovky jeskyní je jich přístupných pět. Punkevní jeskyně nabízejí možnost plavby po podzemní říčce spojenou s prohlídkou dna Machochy. Kateřinská jeskyně je známá svými výjimečnými hůlkovými stalagmity. Balcarka vyniká bohatou barevnou krápníkovou výzdobou. Sloupsko-šošůvské jeskyně tvoří mohutné chodby a podzemní propasti. Výpustek má zase za sebou bohatou vojenskou historii.
                    Pozoruhodné jsou třeba také krasové kaňony Pustý a Suchý žleb a Rudické propadání, kde pod zemí mizí Jedovnický potok a zpět na povrch vyvěrá až po dvanácti kilometrech u Býčí skály.
                    Moravský kras je protkán hustou sítí pěších i cyklistických tras, na kterých lze narazit na další zajímavosti, např. zříceniny hradů, poutní kostely nebo rozhledny. V oblasti je také několik často navštěvovaných horolezeckých terénů.
                </p>
            </div>
        </div>

        <div class="shortTripDiv">
            <img class="shortTripImg" src="./assets/images/img4.jpg" alt="picOfCountryside">
            <h3>Vylet do přírody 2</h3>
        </div>

        <div class="shortTripDiv">
            <img class="shortTripImg" src="./assets/images/img3.jpg" alt="picOfCountryside">
            <h3>Vylet do prirody 3</h3>
        </div>

        <div class="shortTripDiv">
            <img class="shortTripImg" src="./assets/images/img2.jpg" alt="picOfCountryside">
            <h3>Vylet do prirody 4</h3>
        </div>
    </section>

    <!-- FOOTER -->
    
    <footer>
    <p>Zdroje textu: <a href="https://www.gotobrno.cz/misto/moravsky-kras/">Jedna z nejvýznamnějších krasových oblastí ve střední Evropě.</a></p>
    <p>&copy; Jana Raczová & Alexandra Šimková</p>    
    </footer>



    <!--<HeaderCarousel></HeaderCarousel>
    <mojeMenu />
    <mujVylet />-->
  </div>
</template>

<script>
import HeaderCarousel from './components/HeaderCarousel.vue';
import Menu from './components/Menu.vue';
import Vylet from './components/Vylet.vue';
import SearchTrip from './components/SearchTrip.vue'; 
import AddTrip from './components/AddTrip.vue'; 


export default {
  data: function() {
    return {
      activePage: '',
      trips: null
    }
  },

  components: {
    'mojeMenu': Menu,
    'mujVylet': Vylet,
    'HeaderCarousel': HeaderCarousel,
    'searchTrip': SearchTrip,
    'addTrip': AddTrip

  },

  methods: {
  }

 
}

</script>











<style>
/* Paleta barev v1:
text: #463F3A
kontrast: #E0AFA0
#8A817C
#BCB8B1
background: #F4F3EE
*/

body {
    margin: 0;
    padding: 0;
    font-family: 'Merriweather', serif;
    font-size: 20px;
    line-height: 1.6;
    min-width: 200px;
    font-size: 16px;
    background-color: #F4F3EE;
    color: white;
}

header {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(assets/images/uvodniObrazek2.jpg) center center;
    background-size: cover;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 15% 0;
}

.title {
    font-size: 42px;
    padding-bottom: 2%;
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

li {
    background-color: #8A817C; 
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

li:hover,
li:active {
    background-color: #BCB8B1;
    color: #463F3A;
}

.aktivni {
  background-color: #BCB8B1;
  color: #463F3A;
}

ul {
    padding: 0;
}

.shortTripDiv {
    background-color: #8A817C;
    padding: 5% 5% 3% 5%;
    margin: 10%;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
}

.shortTripImg {
    width: 100%;
}

.text {
    display: none;
}

footer {
    background-color: #8A817C;
    padding: 5%;
    font-size: 14px;
}

a {
    color: white;
}

.searchTrip {
    margin: 10%;
    color: #463F3A;
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

    ul {
        display: flex;
        justify-content: center;
        margin: 0;
        background-color: #8A817C; 
    }

    li {
        margin: 0 2%;
        font-size: 24px;
        border-radius: 0;
    }  
    
    .shortTripSection {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 7% 10% 7% 10%;
    }

    .shortTripDiv {
        margin: 7%;
        border-radius: 0;
    }

    footer {
        font-size: 16px;
        padding: 1%;
        text-align: center;
    }

    .searchTrip {
        display: flex;
        justify-content: space-evenly;
    
    }

    .filterRegion,
    .filterType {
        flex: 1 1 auto;
    }

    .custom-select {
        margin-left: 5%;
        width: 80%;
    }

    .searchTrip {
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .shortTripSection {
        margin-top: 0;
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
    }

    .shortTripSection {
        max-width: 960px;
        display: grid;
        justify-content: center;
        margin: auto;
        background-color: white;
        box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2), 0 3px 5px -5px rgba(0, 0, 0, 0.2);
        margin-top: 5%;
        margin-bottom: 5%;
    }

    body {
        background-color: #F4F3EE;
    }  

    .searchTrip {
        background-color: white;
        box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2), 0 3px 5px -5px rgba(0, 0, 0, 0.2);
        max-width: 960px;
        margin: auto;
        margin-top: 5%;
        padding-top: 5%;
    } 

    .filterRegion,
    .filterType {
        padding-left: 5%;
    }

    .checkmark {
        background-color: #BCB8B1;
    }

    .radios:hover input ~ .checkmark {
        background-color: #8A817C;
    }

    .custom-select {
        width: 80%;
    }

    .filterType {
        margin-bottom: 10%;
    }
}

</style>
