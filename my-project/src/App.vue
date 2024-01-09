<template>
  <div class="h-screen overflow-hidden">
    <div class="">
      <div>
        <div class="flex justify-center ">
          <form @submit.prevent="onSubmit" class="relative z-50 bottom-52">
            <div class="mt-96">
              <input type="text" id="City" v-model="City"
                class="border-2 border-black w-56 rounded-lg py-2 text-center font-bold" required>
              <input
                class="border-2 border-black ml-3 px-3 py-2 hover:bg-black hover:text-white bg-gray-300 font-bold rounded-lg"
                type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      <div class="absolute left-[49.5rem] z-50 flex justify-center mt-10 bottom-96">
        <div
          class="flex justify-center rounded-lg bg-linear h-72 w-80 bg-gradient-to-tl from-cyan-500 via-green-400 to-blue-500 items-center">
          <div class="pt-3">
            <h1 class="font-bold text-2xl"> {{ current_day }}</h1>
            <img v-bind:src="'https://openweathermap.org/img/wn/' + midImg + '@2x.png'">
            <h1 class="font-bold text-4xl">{{ Average_temp }}</h1>
            <div class="flex flex-row font-bold text-xl">
              <h6>{{ Country_name }}, </h6>
              <h6> {{ City }}</h6>
            </div>
            <h6 class="font-bold">Wind speed: {{ cloud_speed }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <weather-styling :weatherId="weatherId"></weather-styling>
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
      let dayToday = newDate.getDay();
      switch (dayToday) {
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
            this.cloud_speed = data.wind.speed;
            this.weatherId = data.weather[0].id;
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
        this.DateFunction();
      } else {
        this.counter = null;
        // Handle if the City field is empty
      }
    }
  }
}
</script>