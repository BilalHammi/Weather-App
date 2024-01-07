<template>
  <script src="https://cdn.tailwindcss.com"></script>
  <div id="app" class="h-screen overflow-hidden">
    <div class="absolute bottom-0 z-10">
      <div>
        <div>
          <img src="./img/cloud.png" class="absolute z-50 mt-28">
          <img src="./img/cloud.png" class="absolute z-50 mt-28 left-[30rem]">
        </div>
        <div>
          <img src="./img/cloud.png" class="absolute z-50 mt-28 right-10">
          <img src="./img/cloud.png" class="absolute z-50 mt-28 right-[30rem]">
        </div>
      </div>
      <weather-styling :id-icon="weatherId"></weather-styling>
      <div class="flex justify-center">
        <form @submit.prevent="onSubmit" class="absolute z-50 ">
          <div class="mt-96">
            <input type="text" id="City" v-model="City"
              class="border-2 border-black w-56 rounded-lg py-2 text-center font-bold" required>
            <input
              class="border-2 border-black ml-3 px-3 py-2 hover:bg-black hover:text-white bg-gray-300 font-bold rounded-lg"
              type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <section class="h-screen w-screen bg-blue-400"></section>
      <section class="w-screen bg-green-600 h-40"></section>


    </div>
    <div class="relative z-50 flex justify-center mt-96">
      <div v-if="counter"
        class="flex justify-center rounded-lg bg-linear h-72 w-80 bg-gradient-to-tl from-cyan-500 via-green-400 to-blue-500 items-center">
        <div class="pt-3">
          <h1 class="font-bold text-2xl"> {{ current_day }}</h1>
          <img v-bind:src="'https://openweathermap.org/img/wn/' + midImg + '@2x.png'">
          <h1 class="font-bold text-4xl">{{ Average_temp }}</h1>
          <div class="flex flex-row font-bold text-xl">
            <h6>{{ Country_name }}</h6>
            <h6>{{ City }}</h6>
          </div>
          <h6 class="font-bold">Wind speed: {{ cloud_speed }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import weatherStyling from './components/weatherHtml.vue';

let apiLink = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
export default {
  components: {
    weatherStyling
  },
  data() {

    return {
      counter: null,
      City: null,
      Country_name: null,
      current_day: null,
      Average_temp: null,
      cloud_speed: null,
      midImg: null,
      weatherId: null
    }
  },
  methods: {
    DateFunction() {
      let newDate = new Date();
      let dayToday = newDate.getDay();
      switch (dayToday) {
        case 1:
          this.current_day = "Monday";
          break;
        case 2:
          this.current_day = "Tuesday";
          break;
        case 3:
          this.current_day = "Wensday";
          break;
        case 4:
          this.current_day = "Thursday";
          break;
        case 5:
          this.current_day = "Friday";
          break;
        case 6:
          this.current_day = "Saturday";
          break;
        case 7:
          this.current_day = "Sunday";
          break;
        default:
          break;
      }
      console.log(dayToday);
    }
  },
  onSubmit() {
    City = this.City;

    if (City.length > 0) {
      console.log(this.counter += 1);
    } else {
      console.log(this.counter = null);
    }
    // API call when the component is mounted
    fetch(apiLink + `${City}&appid=ef63fae71b11f8ef4dd1fd8a5b7a5c87`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(this.Country_name = data.sys.country + ",");
        console.log(this.midImg = data.weather[0].icon);
        console.log(`https://openweathermap.org/img/wn/${this.midImg}@2x.png`);
        console.log(this.Average_temp = data.main.temp + "°C");
        console.log(this.cloud_speed = data.wind.speed);
        console.log(this.weatherId = data.weather[0].id);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    this.DateFunction();

    console.log(City);
  }
}
</script>
