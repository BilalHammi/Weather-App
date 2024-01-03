let apiLink = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const app = Vue.createApp({
    data() {

        return {
            counter: null,
            City: null,
            Country_name: null,
            Average_temp: null,
            midImg: null,
        }
    },
    methods: {
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
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                });

            console.log(City);
        }
    },
})