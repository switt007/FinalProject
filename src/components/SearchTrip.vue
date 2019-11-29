<template>
   <section class="searchTrip"> 

        <div class="filterRegion">   
            <h3>Vyber kraj</h3>
            <select class="region">
                <option>Hlavni mesto Praha</option>
                <option>Stredocesky kraj</option>
                <option>Jihocesky kraj</option>
                <option>Plzensky kraj</option>
                <option>Karlovarsky kraj</option>
                <option>Ustecky kraj</option>
                <option>Liberecky kraj</option>
                <option>Kralovehradecky kraj</option>
                <option>Pardubicky kraj</option>
                <option>Kraj Vysocina</option>
                <option>Jihomoravsky kraj</option>
                <option>Olomoucky kraj</option>
                <option>Zlinsky kraj</option>
                <option>Moravskoslezsky kraj</option>
            </select>
        </div>

        <div class="filterType">
            <h3>Vyber typ</h3>
            <form>
                <input type="radio" name="tripType" value="turistika"> Turistika </br>
                <input type="radio" name="tripType" value="cyklo"> Cyklistika </br>
                <input type="radio" name="tripType" value="inline"> In-line brusle </br>
            </form>
        </div>

    </section>

</template>

<script>
export default {

}
</script>

<style>

</style>