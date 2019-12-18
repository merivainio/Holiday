<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/holiday.jpeg">
    <h2> Arvostele matkakohteesi </h2>
    <br>
    <Travel/>
    <br>
    <AddTravel/>
  </div>
</template>

<script>
import Travel from './components/Travel.vue'
import AddTravel from './components/AddTravel.vue'

export default {
  name: 'app',
  components: {
    Travel,
    AddTravel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
