<template>
  <div class="h-screen overflow-hidden flex justify-center">
    <div class="flex flex-col">
      <div>
        <div class="">
          <form @submit.prevent="onSubmit" class="relative z-50 bottom-52">
            <div class="mt-96">
              <input type="text" id="City" v-model="City"
                class="border-2 border-black rounded-lg py-2 text-center font-bold max-[]:flex-1" required>
              <input
                class="border-2 border-black ml-3 px-3 py-2 hover:bg-black hover:text-white bg-gray-300 font-bold rounded-lg"
                type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      <div v-if="counter" class="flex justify-center z-50 absolute mt-96 ml-5">
        <div class="flex justify-center rounded-lg bg-gray-500 h-72 w-80 max-2xl:h-56 max-2xl:w-60 max-2xl:justify-start">
          <div class="pt-3">
            <h1 class="font-bold text-2xl fixed xl:text-xl"> {{ current_day }}</h1>
            <img v-bind:src="'https://openweathermap.org/img/wn/' + midImg + '@2x.png'"
              class="max-2xl:ml-14 h-40 max-2xl:h-28">
            <div class="">
              <h1 class="font-bold text-4xl xl:text-2xl max-2xl:flex max-2xl:justify-center">{{ Average_temp }}</h1>
              <div class="max-2xl:flex max-2xl:justify-center font-bold text-xl xl-max:text-lg">
                <div class="flex flex-row">
                  <h6>{{ Country_name }}, </h6>
                  <h6> {{ City }}</h6>
                </div>
              </div>
              <h6 class="font-bold max-2xl:pl-4">Wind speed: {{ cloud_speed }} km/hour</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <weather-styling :weatherId="weatherId" :midImg="midImg"></weather-styling>
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
      weatherId: null,
    }
  },
  methods: {
    DateFunction() {
      let dayToday = new Date
      switch (dayToday.getDay()) {
        case 1:
          console.log("Day 1");
          this.current_day = "Monday";
          break;
        case 2:
          console.log("Day 2");
          this.current_day = "Tuesday";
          break;
        case 3:
          console.log("Day 3");
          this.current_day = "Wensday";
          break;
        case 4:
          console.log("Day 4");
          this.current_day = "Thursday";
          break;
        case 5:
          console.log("Day 5");
          this.current_day = "Friday";
          break;
        case 6:
          console.log("Day 6");
          this.current_day = "Saturday";
          break;
        case 7:
          console.log("Day 7");
          this.current_day = "Sunday";
          break;
        default:
          break;
      }
    },
    onSubmit() {
      this.City = this.City.trim();
      if (this.City.length > 0) {
        this.counter += 1;
        console.log(this.City);
        fetch(apiLink + `${this.City}&appid=ef63fae71b11f8ef4dd1fd8a5b7a5c87`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.Country_name = data.sys.country;
            this.midImg = data.weather[0].icon;
            this.Average_temp = data.main.temp + "°C";
            this.cloud_speed = Math.floor(data.wind.speed) * 3.6;
            this.weatherId = data.weather[0].id;
            console.log(data);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
        console.log(this.DateFunction());
      } else {
        this.counter -= 1;
      }
    }
  }
}
</script>