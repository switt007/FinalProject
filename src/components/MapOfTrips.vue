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

        let centerOfThisTrip = SMap.Coords.fromWGS84(startLon, startLat);  
        
        let card = new SMap.Card();                                       
        card.getHeader().innerHTML = "<strong>" + ele.nazev + "</strong>";
        card.getBody().innerHTML = ele.zajimavosti;
        
        let options = {
          title: ele.nazev            
        };

        let marker = new SMap.Marker(centerOfThisTrip, "myMarker", options);  
        marker.decorate(SMap.Marker.Feature.Card, card);

        this.markerLayer.addMarker(marker);
      });
    }
  },
}
</script>

<style scoped>
  div.mapa {
      height: 300px;
      width: 500px;
      border: 3px solid black;
  }
</style>