<template>
  <!-- Thunderstorm -->
  <div v-if="weatherId >= 801 && 805 > weatherId" class="overflow-hidden">
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

    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- Thunderstorm -->
  <!-- drizzle  -->
  <div v-else-if="weatherId = 300 && 322 > weatherId" class="z-50 absolute bg-black w-96 h-96">
    <h1>Weather ID: {{ weatherId }}</h1>
    <div>
      <div>
        <img src="./assets/clouds.png" class="absolute z-50 mt-28">
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 left-[30rem]">
      </div>
      <div>
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 right-10">
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 right-[30rem]">
      </div>
    </div>
    <section class="h-screen w-screen bg-blue-400"></section>
    <section class="w-screen bg-green-600 h-40"></section>
    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- drizzle  -->
  <!-- clear  -->
  <div v-else-if="weatherId = 800" class="z-50 absolute bg-black w-96 h-96">
    <h1>Weather ID: {{ weatherId }}</h1>
    <div>
      <div>
        <img src="./assets/clouds.png" class="absolute z-50 mt-28">
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 left-[30rem]">
      </div>
      <div>
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 right-10">
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 right-[30rem]">
      </div>
    </div>
    <section class="h-screen w-screen bg-blue-400"></section>
    <section class="w-screen bg-green-600 h-40"></section>
    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- clear  -->
  <!-- clouds  -->
  <div v-else-if="weatherId >= 801 && 805 > weatherId" class="z-50 absolute bg-black w-96 h-96">
    <h1>Weather ID: {{ weatherId }}</h1>
    <div>
      <div>
        <img src="./assets/clouds.png" class="absolute z-50 mt-28">
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 left-[30rem]">
      </div>
      <div>
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 right-10">
        <img src="./assets/clouds.png" class="absolute z-50 mt-28 right-[30rem]">
      </div>
    </div>
    <section class="h-screen w-screen bg-blue-400"></section>
    <section class="w-screen bg-green-600 h-40"></section>
    <!-- Any other content related to WeatherStyling -->
  </div>
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
  <div v-else="weatherId > 500 && 533 > weatherId" class="z-50 absolute bg-red-500 w-96 h-96">
    <h1>Weather ID: {{ weatherId }}</h1>
    <section class="h-screen w-screen bg-red-400"></section>
    <section class="w-screen bg-green-600 h-40"></section>
    <!-- Any other content related to WeatherStyling -->
  </div>
  <!-- Regen  -->
</template>
  
<script>
export default {
  props: {
    weatherId: Number // Adjust the prop type as per your data
  }
};
</script>
