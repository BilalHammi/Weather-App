const app = Vue.createApp({
    data() {
        return {
            City: ''
        }
    },
    methods: {
        onSubmit() {
            console.log(this.City);
        }
    },
})