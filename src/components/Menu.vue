<template>

    <section class="menu">
        <ul>
            <li v-on:click="changePage('/searchTrip')">Vyhledej vylet</li>
            <li v-on:click="changePage('/addTrip')">Pridej vylet</li>
            <li v-on:click="changePage('/listOfTrips')">Seznam vyletu</li>
        </ul>
    </section>  
    
</template>

<script>
export default {
  methods: {
    changePage(path) {
      this.$router.push({path: path});
    }
  }   
}
</script>

<style scoped>

</style>


