<template>
    <div class="maps" id="myMap">
    </div>
</template>



<script>
import {gpx} from '@tmcw/togeojson';
import * as turf from '@turf/turf';


export default {
    computed: {
        tripTrasa: function() {
            return this.shortTrip ? this.shortTrip.trasa : null;
        }
    },
    /*mounted: function() {
        console.log('Maps.vue mounted');

        var center = SMap.Coords.fromWGS84(14.400307, 50.071853);
        var m = new SMap(JAK.gel("myMap"), center, 5);
        m.addDefaultLayer(SMap.DEF_TURIST).enable();
        m.addDefaultControls();

        var xmlDoc = JAK.XML.createDocument(this.tripTrasa); // insert GPX here

        var geoJson = gpx(xmlDoc);
        console.log(geoJson);

        var lengthTrip = length(geoJson);
        console.log(lengthTrip);

        var gpx2 = new SMap.Layer.GPX(xmlDoc, null, {maxPoints:500});
        m.addLayer(gpx2); 
        gpx2.enable(); 
        gpx2.fit();
    },*/
    watch: {
        shortTrip: function() {
            console.log('Maps.vue watch');

            var center = SMap.Coords.fromWGS84(14.400307, 50.071853);
            var m = new SMap(JAK.gel("myMap"), center, 5);
            m.addDefaultLayer(SMap.DEF_TURIST).enable();
            m.addDefaultControls();

            var xmlDoc = JAK.XML.createDocument(this.tripTrasa); // insert GPX here

            var gpx2 = new SMap.Layer.GPX(xmlDoc, null, {maxPoints:500});
            m.addLayer(gpx2); 
            gpx2.enable(); 
            gpx2.fit();
        }
    },
    props: ['shortTrip']
}

</script>

<style>

.maps {
    border: 3px solid #8A817C;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    height: 250px;
    margin-bottom: 0;
}

@media (min-width: 500px) {
    .maps {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        height: 300px;
    }
}

</style>