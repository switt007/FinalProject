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
        var center = SMap.Coords.fromWGS84(17.400307, 49.571853); 
        var m = new SMap(JAK.gel("mapa"), center, 6); 
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
        let startLat = 0;
        let startLon = 0;
        let xmlDoc = JAK.XML.createDocument(ele.trasa); 
        let tracks = xmlDoc.getElementsByTagName("trk");  


        for (let i = 0; i < tracks.length; i ++ ) {
          var segments = tracks[i].getElementsByTagName("trkseg");

          for (let j = 0; j < segments.length; j ++ ) {
            let pts = segments[j].getElementsByTagName("trkpt");
            startLat = pts[0].attributes['lat'].value;            
            startLon = pts[0].attributes['lon'].value;

            break;                                                
          }

          if (startLat !== 0 && startLon !== 0)                   
            break;
        }

        if (parseFloat(startLat) !== 0 && parseFloat(startLon) !== 0) {
          let centerOfThisTrip = SMap.Coords.fromWGS84(parseFloat(startLon), parseFloat(startLat));  
          console.log(ele.nazev);
          console.log(centerOfThisTrip);

          ele.card = new SMap.Card();                                       
          ele.card.getHeader().innerHTML = "<strong>" + ele.nazev + "</strong>";
          ele.card.getBody().innerHTML = ele.zajimavosti;
          
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
  div.mapa {
      height: 500px;
      width: 700px;
      border: 1px solid rgb(53, 50, 50);
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
</style>