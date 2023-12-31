app.component('api-call', {
    data() {
        return {
            apiData: null
        };
    },
    mounted() {
        // API call when the component is mounted
        fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&q=amsterdam&appid=ef63fae71b11f8ef4dd1fd8a5b7a5c87')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle the fetched data here
                this.apiData = data;
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            });
    },
    template:
    /*html*/
        `<div>
    <h1> {{ apiData }}</h1>
    </div>`
})