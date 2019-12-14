<template>

  <div class="addTrip" id="addTripID">

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
  
    <div class="filterLap">

    </div>Délka výletu (km):
    <input
      type="text"
      id="pridejVylet_nadpis"
      v-model="delka"
      placeholder="Zadej délku"
    />
   

Popis výletu a zajímavosti na trase: <textarea v-model="odstavce[0].text"></textarea>  

<hr/>




    <div>    
      <input type="file" name='fotky' id="fotky" accept=".jpeg,.jpg" class="inputfile" multiple ref="Fotky" v-on:change="handleFiles" />
      <label for='fotky'>Vyber fotky:</label>
      <div v-if="photouploading">Nahrávám fotku/y na server, moment ...</div>

      <div v-for="(fotka, index) in fotky" v-bind:key="index" class='fotka'>
        <div class='fotkaimg'>
          <img v-bind:src="'http://img.dogtrekking.cz/thumb/' + fotka.url" class='thumb' />
        </div>
        <div class='fotkainfo'>
          <input type='text' v-model="fotka.popisek" placeholder="Popisek fotky" />
          <input type='text' v-model="fotka.alt" placeholder="Alternativní text namísto fotky" /> 
        </div>
      </div>
    </div>

    <br />

    <div>
      <input class="inputfile" type="file" name='vyber_gpx' id="vyber_gpx" accept=".gpx" ref="gpx" v-on:change="handleGpxFile" value="Vyber GPX soubor" />
      <label for='vyber_gpx'>Vyber GPX soubor:</label>
      <div v-if='trasa_nahrana' class="gpxOk">GPX nahráno</div>
    </div>


    <hr />
    <div class="button_center">
    <div v-on:click="pridatVylet" ref="myFiles" class="button_addTrip">PŘIDAT VÝLET</div>
    </div>

<div class="alert" v-bind:class="savingOK ? 'visible' : 'hidden'">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  This is an alert box.
</div>
  </div>

</template>

<script>
export default {
  data: function() {
    return {
      photouploading: false,
      trasa_nahrana: false,
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

      delka: "",

      odstavce: [{
        text: ''
      }],

      trasa_gpx: "",

      fotky: [],

      map_position: { lat: 0.0, lon: 0.0 },

      savingOK: false,
    };
  },

  mounted () {
    let utils = document.createElement('script');
    utils.setAttribute('src', '/utils.js');
    document.head.appendChild(utils);
  },

  methods: {
    handleFiles() {
      this.photouploading = true; 

      let promises = []; 

      this.$refs.Fotky.files.forEach(ele => { 
        const formData = new FormData();
        
        formData.append('file', ele)
        
        var obj = {
          method: 'POST',
          body: formData,
          credentials: 'same-origin',
        };

        promises.push(fetch('http://img.dogtrekking.cz/add', obj)); 
      });

      Promise.all(promises)
      .then(response => {
        Promise.all(response.map(r => r.json())) 
        .then(jsonArray => { 
          jsonArray.forEach(json => {

            if (typeof(json.id) !== 'undefined' && json.id !== null && json.id !== '') {
              this.fotky.push({
                alt: '',
                url: json.id,
                popisek: ""
              });
            }
          });
        
          this.photouploading = false;
        });
      });
    },
    
 
    handleGpxFile() {
      const formData = new FormData();
      
      this.$refs.gpx.files.forEach(ele => {
        formData.append('file', ele)
      });

      var obj = {
        method: 'POST',
        body: formData,
        credentials: 'same-origin',
      };

      fetch('http://rest.dogtrekking.cz/gpx/add', obj)
      .then(response => response.json())
      .then(json => {
        if (typeof(json.Id) !== 'undefined' && json.Id !== null && json.Id !== '')
          this.trasa_gpx = json.Id; 
          this.map_position = getFirstPointFromGpx(json.GpxContent);
          this.trasa_nahrana = true;
      });
    },

    pridatVylet() {
      let newTrip = {
        autor: this.autor,
        nazev: this.nazevVyletu,
        typ: this.vybranyTyp,
        kraj: this.vybranyKraj,
        delka: this.delka,
        zajimavosti: this.zajimavosti,
        odstavce: this.odstavce,
        fotky: this.fotky,
        trasa: this.trasa_gpx,
        trasa_link: this.trasa,
        map_position: this.map_position
      };

      var obj = {};

      obj.body = JSON.stringify(newTrip);
      obj.method = "POST";
      obj.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      fetch("http://rest.dogtrekking.cz/trips/add", obj)
      .then(response => response.json())
      .then(json => {
        this.savingOK = true; 

        // vymazani formulare
        this.vybranyKraj = 1;
        this.vybranyTyp
        this.autor = '';
        this.nazevVyletu = '';
        this.delka = 0;
        this.odstavce = [{text: ''}];
        this.zajimavosti = "";
        this.trasa_gpx = "";
        this.fotky = [];
        this.trasa_nahrana = "";
        this.map_position = { lat: 0.0, lon: 0.0 };

        const inputFotky = this.$refs.Fotky;
        inputFotky.type = 'text';
        inputFotky.type = 'file';

        const inputGpx = this.$refs.gpx;
        inputGpx.type = 'text';
        inputGpx.type = 'file';

        this.savingOK = false;
      });
    }
  }
};
</script>


<style scoped>

.fotka {
  display: flex;
  flex-flow: row;
  border: 1px solid rgb(53, 50, 50);
  margin: 5px;
}

.fotkaimg {
  display: flex;
  width: 100px;
  margin: 5px;
}

.fotkainfo {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 5px;
}

.addTrip {
  display: flex;
  flex-flow: column;
  background-color: white;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  margin-bottom: 5%;
  color: #463f3a;
  box-shadow: 3px 3px 5px rgba(0.4, 0.4, 0.4, 0.4);
  padding: 20px;

}

.button_addTrip {
  background-color: rgb(111, 180, 65);
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  border: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  box-shadow: 3px 3px 5px rgba(0.4, 0.4, 0.4, 0.4);

}

input {
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 10px;

}

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.gpxOk {
  color: red;
  display: flex;
  justify-content: center;
}

.inputfile + label {
    font-size: 0,5 em;
    font-weight: 500;
    color: white;
    background-color: rgb(255, 0, 157);
    padding: 20px;
    cursor: pointer; /* "hand" cursor */
  display: flex;
  justify-content: center;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0.4, 0.4, 0.4, 0.4);
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: greenyellow
}

select {
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 10px;

}

li {

  border-radius: 5px;
  padding: 10px;
  list-style-type: none;

}

textarea {
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 10px;
  list-style-type: none;

}

.button_addTrip:hover {
  background-image: linear-gradient(to top left,#b700ff,#250075);

}

.button_center {
  display: flex;
  justify-content: center;
}

/* The alert message box */
.alert {
  padding: 20px;
  background-image: linear-gradient(to top left,#749146,#007510);
  color: white;
  margin-bottom: 15px;
}

/* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: black;
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

img.thumb {
  width: 100px;
}
</style>
