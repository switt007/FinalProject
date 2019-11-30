<template>
   <section class="searchTrip"> 

    <h3 class="searchTripH3">Vyber kraj</h3>
    <customSelect :options="['Hlavni mesto Praha', 'Stredocesky kraj', 'Jihocesky kraj', 'Plzensky kraj', 'Karlovarsky kraj', 'Ustecky kraj', 'Liberecky kraj', 'Kralovehradecky kraj', 'Pardubicky kraj', 'Kraj Vysocina', 'Jihomoravsky kraj', 'Olomoucky kraj', 'Zlinsky kraj', 'Moravskoslezsky kraj']"/>

        <div class="filterType">
            <h3 class="searchTripH3">Vyber typ</h3>
            <form>
                <label class="radios">Turistika
                    <input type="radio" name="tripType" value="turistika" checked="checked"> 
                    <span class="checkmark"></span>
                </label>
                <label class="radios">Cyklo
                    <input type="radio" name="tripType" value="cyklo"> 
                    <span class="checkmark"></span>
                </label>
                <label class="radios">In-line
                    <input type="radio" name="tripType" value="inline"> 
                    <span class="checkmark"></span>
                </label>
            </form>
        </div>

    </section>

</template>

<script>
import CustomSelect from "./CustomSelect.vue";

export default {
    components: {
    'customSelect': CustomSelect
  }
}
</script>

<style scoped>

.searchTripH3 {
    margin-left: 5%;
    font-size: 20px;
    color: #463F3A;
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
  color: #463F3A;
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
  background-color: #BCB8B1;
}

/* When the radio button is checked, add a dark background */
.radios input:checked ~ .checkmark {
  background-color: #8A817C;
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