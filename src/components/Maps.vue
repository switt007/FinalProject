<template>
    <div class="maps" id="myMap">
    </div>
</template>



<script>
export default {
    mounted: function() {
        console.log('Maps.vue mounted');

        var center = SMap.Coords.fromWGS84(14.400307, 50.071853);
        var m = new SMap(JAK.gel("myMap"), center, 5);
        m.addDefaultLayer(SMap.DEF_TURIST).enable();
        m.addDefaultControls();

        var xmlDoc = JAK.XML.createDocument(this.shortTrip.trasa_gpx); // insert GPX here

        var gpx = new SMap.Layer.GPX(xmlDoc, null, {maxPoints:500});
        m.addLayer(gpx); 
        gpx.enable(); 
        gpx.fit();
    },
    watch: {
        shortTrip: function() {
            console.log('Maps.vue watch');

            var center = SMap.Coords.fromWGS84(14.400307, 50.071853);
            var m = new SMap(JAK.gel("myMap"), center, 5);
            m.addDefaultLayer(SMap.DEF_TURIST).enable();
            m.addDefaultControls();

            var xmlDoc = JAK.XML.createDocument(this.shortTrip.trasa_gpx); // insert GPX here

            var gpx = new SMap.Layer.GPX(xmlDoc, null, {maxPoints:500});
            m.addLayer(gpx); 
            gpx.enable(); 
            gpx.fit();
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
    }
}

</style>