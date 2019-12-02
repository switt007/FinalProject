<template>
  <div>
    <!-- HLAVICKA S FOTKOU, ZAJIMAVOSTI A AUTOREM -->
    <header>
      <h1 class="tripTitle">Výlet do Moravského krasu</h1>
      <!-- zajimavosti -->
      <p class="pointOfInterest">"Alespoň jednou za rok navštiv místo, kde jsi nikdy předtím nebyl"</p>
      <p class="author">Dalajláma</p>
    </header>

    <!-- SEZNAM S PARAMETRY VYLETU -->

    <ul>
      <!-- kraj -->
      <li>Jihomoravský kraj</li>
      <!-- typ -->
      <li>Cyklo</li>
      <!-- delka -->
      <li>19 km</li>
    </ul>

    <!-- MAPA -->

    <iframe
      src="https://api.mapy.cz/frame?params=%7B%22x%22%3A16.73158897666019%2C%22y%22%3A49.305472201146905%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A11%2C%22url%22%3A%22https%3A%2F%2Fen.mapy.cz%2Fs%2Flefehenogo%22%2C%22mark%22%3Anull%2C%22overview%22%3Atrue%7D&amp;width=400&amp;height=280&amp;lang=en"
      max-width="400"
      max-height="280"
      style="border:none"
      frameborder="0"
    ></iframe>

    <!-- TEXT -->

    <p>
      "Severně od Brna se rozkládá Chráněná krajinná oblast Moravský kras. Na ploše 92 km2 se vyskytují četné unikáty živé i neživé přírody. Lze se např. podívat do Macochy, téměř 140 metrů hluboké propasti, tzv. light hole, jež je největší svého druhu ve střední Evropě. Horní část propasti je dlouhá 174 a široká 76 metrů.
      Z více než tisícovky jeskyní je jich přístupných pět. Punkevní jeskyně nabízejí možnost plavby po podzemní říčce spojenou s prohlídkou dna Machochy. Kateřinská jeskyně je známá svými výjimečnými hůlkovými stalagmity. Balcarka vyniká bohatou barevnou krápníkovou výzdobou. Sloupsko-šošůvské jeskyně tvoří mohutné chodby a podzemní propasti. Výpustek má zase za sebou bohatou vojenskou historii.
      Pozoruhodné jsou třeba také krasové kaňony Pustý a Suchý žleb a Rudické propadání, kde pod zemí mizí Jedovnický potok a zpět na povrch vyvěrá až po dvanácti kilometrech u Býčí skály.
      Moravský kras je protkán hustou sítí pěších i cyklistických tras, na kterých lze narazit na další zajímavosti, např. zříceniny hradů, poutní kostely nebo rozhledny. V oblasti je také několik často navštěvovaných horolezeckých terénů."
    </p>


    <!-- FOTKY -->

    <div class="photos">
            <img class="shortTripImg" v-bind:src="'/Images/blanik1.jpg'" alt="picOfCountryside">
            <img class="shortTripImg" v-bind:src="'/Images/blanik2.jpg'" alt="picOfCountryside">
            <img class="shortTripImg" v-bind:src="'/Images/boubin1.jpg'" alt="picOfCountryside">
            <img class="shortTripImg" v-bind:src="'/Images/boubin2.jpg'" alt="picOfCountryside">

    
    
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(assets/images/uvodniObrazek2.jpg) center center;
  background-size: cover;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 15% 0;
}
</style>