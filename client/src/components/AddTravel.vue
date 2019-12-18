<!-- Form component for adding new travel-->
<template>
  <div class="travel">
    <h3> Lisää arvostelu </h3>
      <form @submit.prevent="addTravel">
      <div class="create-travel">
        <label for="kohde">Kohde</label>
        <input
          v-model="travel.kohde"
          type="text"
          class="form-control"
          id="kohde" required>
        <label for="lähtö">Lähtö</label>
        <input
          v-model="travel.lähtö"
          type="date"
          class="form-control"
          id="lähtö"
          placeholder="Enter a subject" required>
        <label for="paluu">Paluu</label>
        <input
          v-model="travel.paluu"
          type="date"
          class="form-control"
          id="paluu">
        <label for="arvio">Arvio</label>
        <input
          v-model="travel.arvio"
          type="number" name="quantity" min="1" max="5"
          class="form-control"
          id="arvio">
        <label for="kommentti">Kommentti</label>
        <textarea
          v-model="travel.kommentti"
          class="form-control"
          id="kommentti"
          rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" @click="addToAPI">Lisää</button>
    </form>
    </div>
</template>

<script>
import Travel from './Travel';
export default {
  name: 'Addtravel',
  data() {
    return {
      travel: {kohde: '', lähtö: '', paluu: '', arvio: '', kommentti:''},
    }
  },
  
  methods: {
    //create new travel and call post method
    addToAPI() {
      let newTravel = {
        kohde: this.travel.kohde,
        lähtö: this.travel.lähtö,
        paluu: this.travel.paluu,
        arvio: this.travel.arvio,
        kommentti: this.travel.kommentti
      }
      console.log(newTravel)
      Travel.postTravel(newTravel);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>