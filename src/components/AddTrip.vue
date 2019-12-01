<template>

  <div class="addTrip">

    Autor výletu: <input type="text" id="pridejVylet_autor" v-model="autor" placeholder="Zadej autora výletu"/>
    Název výletu: <input type="text" id="pridejVylet_nazev" v-model="nazevVyletu" placeholder="Napiš název výletu"/>
    Typ:
    <select name="vybranyTyp" v-model="vybranyTyp">
      <option v-bind:key="typ.id" v-for="typ in typy" v-bind:value="typ.id">{{typ.nazev}}</option>
    </select>
    Kraj:
    <select name="vybranyKraj" v-model="vybranyKraj">
      <option v-bind:key="kraj.id" v-for="kraj in kraje" v-bind:value="kraj.id">{{kraj.nazev}}</option>
    </select>
    Okruh:
    <div class="filterLap">
      <form>
        <label class="radios">
          ANO
          <input type="radio" name="tripType" value="yes" v-model="okruh" />
          <span class="checkmark"></span>
        </label>
        <label class="radios">
          NE
          <input type="radio" name="tripType" value="no" v-model="okruh" />
          <span class="checkmark"></span>
        </label>
      </form>
    </div>Délka výletu (km):
    <input
      type="text"
      id="pridejVylet_nadpis"
      v-model="delka"
      placeholder="Zadej délku"
    />
    Popis: <textarea v-model="popisVyletu" placeholder="krátký popis výletu"></textarea>
    Zajímavosti: <textarea v-model="zajimavosti" placeholder="krátký popis výletu"></textarea>
    Trasa: <input type="text" id="pridejVylet_nadpis" v-model="trasa" placeholder="Sem zadej odkaz z mapy.cz"/>

    <hr />
    <div class="button_center">
    <button v-on:click="pridatVylet" class="button_addTrip">PŘIDAT VÝLET</button>
    </div>
  </div>

</template>

<script>
export default {
  data: function() {
    return {
      vybranyKraj: 1,
      kraje: [
        { id: 1, nazev: "Hlavní město Praha" },
        { id: 2, nazev: "Středočeský kraj" },
        { id: 3, nazev: "Jihočeský kraj" },
        { id: 4, nazev: "Plzeňský kraj" },
        { id: 5, nazev: "Karlovarský kraj" },
        { id: 6, nazev: "Ústecký kraj" },
        { id: 7, nazev: "Liberecký kraj" },
        { id: 8, nazev: "Královéhradecký kraj" },
        { id: 9, nazev: "Pardubický kraj" },
        { id: 10, nazev: "Kraj Vysočina" },
        { id: 11, nazev: "Jihomoravský kraj" },
        { id: 12, nazev: "Olomoucký kraj" },
        { id: 13, nazev: "Moravskoslezský kraj" },
        { id: 14, nazev: "Zlínský kraj" },
        { id: 15, nazev: "Zahraničí" }
      ],

      vybranyTyp: 1,
      typy: [
        { id: 1, nazev: "Turistika" },
        { id: 2, nazev: "Cyklistika" },
        { id: 3, nazev: "Ostatní" }
      ],

      autor: "",

      nazevVyletu: "",

      okruh: 1,

      delka: "",

      popisVyletu: "",

      zajimavosti: "",

      trasa: "",

      fotky: ""
    };
  },

  methods: {
    pridatVylet() {
      let newTrip = {
        autor: this.autor,
        nazev: this.nazevVyletu,
        typ: this.vybranyTyp,
        kraj: this.vybranyKraj,
        okruh: this.okruh === 'yes' ? 1 : 0,
        odstavce: [
          { text: this.popisVyletu },
        ],
        fotky: [
          {
            alt: "Krplov",
            url: "FotkaKrplova.jpeg",
            popisek: "asdfasdf asdfasfd"
          },
          {
            alt: "Oznice",
            url: "FotkaOznice.jpeg",
            popisek: "p98w4tuoskhgdsalkjhewpt "
          }
        ],
        trasa: 0,
        trasa_link: this.trasa
      };

      var obj = {};

      obj.body = JSON.stringify(newTrip);
      obj.method = "POST";
      obj.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      fetch("http://rest.dogtrekking.cz/trips/add", obj)
        .then(function(res) {
          return res.json();
        })
        .then(function(response) {
          alert("ok");
        });
    }
  }
};
</script>


<style scoped>

.addTrip {
  display: flex;
  flex-flow: column;
  background-color: white;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 3%;
  color: #463f3a;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 1%;
}

.button_addTrip {
  background-image: linear-gradient(to top left,#9dff00,#007510);
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  border: 0;
  font-size: 20px;

}

.button_center {
  display: flex;
  justify-content: center;
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