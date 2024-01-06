let apiLink = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const app = Vue.createApp({
    data() {

        return {
            counter: null,
            City: null,
            Country_name: null,
            current_day: null,
            Average_temp: null,
            cloud_speed: null,
            midImg: null,
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
        },

        weatherFunction(weatherId) {
            console.log(weatherId);
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
                    // Handle the fetched data here
                    console.log(this.Country_name = data.sys.country + ",");
                    console.log(this.midImg = data.weather[0].icon);
                    console.log(`https://openweathermap.org/img/wn/${this.midImg}@2x.png`);
                    console.log(this.Average_temp = data.main.temp + "°C");
                    console.log(this.cloud_speed = data.wind.speed);
                    this.weatherFunction(data.weather[0].id);
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                });
            this.DateFunction();

            console.log(City);
        }

    },
})