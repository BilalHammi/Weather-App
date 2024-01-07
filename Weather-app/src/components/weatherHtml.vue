<template>
    <div>
        <h1>Weather ID: {{ idIcon }}</h1>
        <!-- Any other content related to WeatherStyling -->
    </div>
</template>
  
<script>
export default {
    props: {
        idIcon: Number // Adjust the prop type as per your data
    }
};
</script>
  