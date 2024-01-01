let apiLink = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let arrayStad = [];
const app = Vue.createApp({
    data() {

        return {
            City: null,
            apiData: null,
        }
    },
    methods: {
        onSubmit() {
            City = this.City;
            let APIid = '&appid=ef63fae71b11f8ef4dd1fd8a5b7a5c87';
            console.log(apiLink + `${City}&appid=ef63fae71b11f8ef4dd1fd8a5b7a5c87`);
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
                    console.log(data);
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                });

            console.log(City);
        }
    },
})