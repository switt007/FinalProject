<template>
  <div class="mapa" id="mapa"></div>
</template>

<script>
export default {
  props: [ 'trips' ],
  data() {
    return {
      markerLayer: null
    }
  },
  mounted () {
    let utils = document.createElement('script');
    utils.setAttribute('src', '/utils.js');
    document.head.appendChild(utils);

    let center = SMap.Coords.fromWGS84(15.3127175, 49.9687053); 
    let m = new SMap(JAK.gel("mapa"), center, 7); 
    m.addControl(new SMap.Control.Sync());
    m.addDefaultLayer(SMap.DEF_TURIST).enable(); 
    m.addDefaultControls(); 

    this.markerLayer = new SMap.Layer.Marker(); 
                                                
    m.addLayer(this.markerLayer);
    this.markerLayer.enable();
  },
  watch: {

    trips: function() {
      this.trips.forEach(ele => {    
        let startPos = {};

        if (typeof(ele.map_position) !== 'undefined' && ele.map_position !== null && ele.map_position.lat !== 0.0 && ele.map_position.lon !== 0.0) {
          startPos = ele.map_position;
        }
        else {
          startPos = getFirstPointFromGpx(ele.trasa);
        }

        if (startPos.lat !== 0.0 && startPos.lon !== 0.0) {
            let centerOfThisTrip = SMap.Coords.fromWGS84(startPos.lon, startPos.lat);  

            ele.card = new SMap.Card();                                       
            ele.card.getHeader().innerHTML = "<a class='map' href='/detail/" + ele.id + "'><strong>" + ele.nazev + "</strong></a>";
            ele.card.getBody().innerHTML = " ";
            
            let options = {
              title: ele.nazev            
            };

            ele.marker = new SMap.Marker(centerOfThisTrip, ele.nazev + ele.id, options);  
            ele.marker.decorate(SMap.Marker.Feature.Card, ele.card);

            this.markerLayer.addMarker(ele.marker);
          }
      });
    }
  },
}
</script>




<style scoped>
  a.map, p.map {
    color: black;

  }

  a:link {
  color: darkolivegreen;
  text-decoration: none;
}


  div.mapa {
      height: 500px;
      width: 700px;
      border: 1px solid rgb(53, 50, 50);
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
</style>