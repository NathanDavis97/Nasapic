<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <h1>Nasa Picture Place</h1>
  <date-component />
  <apod />
  <results-component />
</template>

<script>
import apod from './components/apod.vue'
import DateComponent from './components/dateComponent.vue'
import ResultsComponent from './components/resultsComponent.vue'

export default {
  name: 'App',
  components: {
    apod,
    DateComponent,
    ResultsComponent
  }
}
</script>

<style
    Da,
    ResultsComponentteComponentlang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
