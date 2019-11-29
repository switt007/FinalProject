<template>

    <section class="menu">
        <ul>
            <li v-on:click="changePage('searchTrip')">Vyhledej vylet</li>
            <li v-on:click="changePage('addTrip')">Pridej vylet</li>
            <li>Seznam vyletu</li>
        </ul>
    </section>  
    
</template>

<script>
export default {
  methods: {
    changePage(activePage) {
      this.$emit('change-page', activePage);
    }
  }    
}
</script>

<style scoped>

</style>


