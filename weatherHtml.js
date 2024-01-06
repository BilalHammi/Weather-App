app.component('weather-styling', {
    data() {
        return {
            apiData: null,
            weatherId: null // Assuming you have a weatherId property
        };
    },
    template: /*html*/ `
        <div>
            <template v-if="weatherId >= 801">
                <h1>{{ apiData }}</h1>
                <!-- Other content for weatherId >= 801 -->
            </template>
            <template v-else-if="weatherId >= 701">
                <h1>{{ apiData }}</h1>
                <!-- Other content for weatherId >= 701 -->
            </template>
            <template v-else>
                <h1>{{ apiData }}</h1>
                <!-- Default content -->
            </template>
        </div>
    `,
    methods: {
        weatherFunction(weatherId) {
            console.log(weatherId);
        }
    }
});