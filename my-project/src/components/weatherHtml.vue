<template>
  <!-- Thunderstorm -->
  <div v-if="weatherId >= 200 && 233 > weatherId" class="overflow-hidden">
    <section class="h-screen w-screen bg-blue-950 absolute top-0 z-10 overflow-hidden">
      <div class="flex flex-row">
        <div class="flex flex-col-reverse">
          <img src="../assets/clouds.png" class="fixed z-40">
          <div class="flex flex-row ml-12 mt-48">
            <img v-for="index in 3" :key="index" src="../assets/Lightning Bolt.png" alt="">
          </div>
        </div>
        <div class="flex flex-col-reverse ml-10">
          <img src="../assets/clouds.png" class="fixed z-40">
          <div class="flex flex-row ml-12 mt-48">
            <img v-for="index in 3" :key="index" src="../assets/Lightning Bolt.png" alt="">
          </div>
        </div>
      </div>
      <div class="flex flex-row absolute right-16 top-0">
        <div class="flex flex-col-reverse">
          <img src="../assets/clouds.png" class="fixed z-40">
          <div class="flex flex-row ml-12 mt-48">
            <img v-for="index in 3" :key="index" src="../assets/Lightning Bolt.png" alt="">
          </div>
        </div>
        <div class="flex flex-col-reverse ml-10">
          <img src="../assets/clouds.png" class="fixed z-40">
          <div class="flex flex-row ml-12 mt-48">
            <img v-for="index in 3" :key="index" src="../assets/Lightning Bolt.png" alt="">
          </div>
        </div>
      </div>
      <section class="w-screen bg-green-600 h-40 absolute bottom-0 z-10"></section>
    </section>
  </div>
  <!-- Thunderstorm -->
  <!-- drizzle  -->
  <!-- <div v-else-if="weatherId >= 300 && 322 > weatherId" class="overflow-hidden"> -->
  <div v-else-if="weatherId >= 801 && 805 > weatherId" class="overflow-hidden">
    <section class="h-screen w-screen bg-blue-800 absolute top-0 z-10 overflow-hidden">
      <div class="flex flex-row">
        <div class="flex flex-col-reverse mt-5 mr-24">
          <img src="../assets/clouds.png" class="absolute z-40">
          <div class="flex flex-row ml-12 mt-48">
            <img v-for="index in 3" :key="index" src="../assets/water_drop.png" alt="" class="ml-7 mb-11">
          </div>
        </div>
        <div class="flex flex-col-reverse mt-5">
          <img src="../assets/clouds.png" class="absolute z-40">
          <div class="flex flex-row ml-12 mt-48">
            <img v-for="index in 3" :key="index" src="../assets/water_drop.png" alt="" class="ml-7 mb-11">
          </div>
        </div>
      </div>
      <section class="w-screen bg-green-600 h-40 absolute bottom-0"></section>
    </section>

    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- drizzle  -->
  <!-- clear  -->
  <div v-else-if="weatherId >= 801 && 805 > weatherId" class="overflow-hidden">
    <section class="h-screen w-screen bg-blue-400 absolute top-0 z-10 overflow-hidden">
      <div class="flex flex-row">
        <div class="flex flex-col-reverse">
          <img src="../assets/clouds.png" class="z-40">
        </div>
        <div class="flex flex-col-reverse ml-10">
          <img src="../assets/clouds.png" class="z-40">
        </div>
      </div>
      <div class="flex flex-row absolute right-0 top-0">
        <div class="flex flex-col-reverse">
          <img src="../assets/clouds.png" class="z-40">

        </div>
        <div class="flex flex-col-reverse ml-10">
          <img src="../assets/clouds.png" class="z-40">
        </div>
      </div>
      <section class="w-screen bg-green-600 h-40 absolute bottom-0 z-10"></section>
    </section>
  </div>
  <!-- clear  -->
  <!-- clouds  -->

  <!-- clouds  -->
  <!-- snow  -->
  <div v-else-if="weatherId > 600 && 623 > weatherId" class="z-50 absolute bg-purple-500 w-96 h-96">
    <h1>Weather ID: {{ weatherId }}</h1>
    <section class="h-screen w-screen bg-blue-400"></section>
    <section class="w-screen bg-green-600 h-40"></section>
    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- snow  -->
  <!-- Regen  -->
  <div v-else-if="weatherId > 500 && 533 > weatherId" class="z-50 absolute bg-red-500 w-96 h-96">
    <h1>Weather ID: {{ weatherId }}</h1>
    <section class="h-screen w-screen bg-red-400">
      <img v-for="index in 3" :key="index" src="../assets/water_drop.png" alt="">
    </section>
    <section class="w-screen bg-green-600 h-40"></section>
    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- Regen  -->
  <div v-else-if="weatherId == 800" class="overflow-hidden">
    <section class="h-screen w-screen bg-blue-400 absolute top-0 z-10 overflow-hidden">
      <div class="w-full flex justify-center">
        <img :src="'https://openweathermap.org/img/wn/' + midImg + '@4x.png'" alt="" class="mt-2">
      </div>
      <section class="w-screen bg-green-600 h-40 absolute bottom-0 z-10"></section>
    </section>
  </div>
</template>
  
<script>
export default {
  props: {
    weatherId: Number,
    midImg: String
  }
};
</script>
