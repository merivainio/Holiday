<!-- Table for showing travels -->
<template>
  <div class="travel">
    <div align="center">
      <thead>
          <tr>
            <th>Kohde</th>
            <th>Lähtö</th>
            <th>Paluu</th>
            <th>Arvio (1-5)</th>
            <th>Kommentti</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table" v-for="Travel in travels" :key="Travel._id">
            <td> {{ Travel.kohde }}</td>
            <td>{{ Travel.lähtö }}</td>
            <td>{{ Travel.paluu }}</td>
            <td>{{ Travel.arvio }}</td>
            <td>{{ Travel.kommentti }}</td>
            <button type="submit" class="btn btn-primary" @click="deleteTravel(Travel._id)">Poista</button>
          </tr>
        </tbody>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'travel',
  data() {
    return {
      travels: [],
      Travel: ''
    }
  },
  //get travels from API
  created() {
    axios.get('http://localhost:3000/api/travel/retrieve')
        .then(response => {
            this.travels = response.data; 
        
        });
  },
  
  methods: {
    //delete travel from API
    deleteTravel(id) {
      console.log(id);
      axios.delete('http://localhost:3000/api/travel/delete', { data: { _id: id }})
        .then((response) => {
          console.log(response)
        axios.get('http://localhost:3000/api/travel/retrieve')
        .then(response => {
            this.travels = response.data; 
        });
        })
        .catch((error) => {
          console.log(error);
        });
    }

  },
  //post new travel to API
  postTravel(newTravel) {
      axios.post('http://localhost:3000/api/travel/create', newTravel)
        .then((response) => {
          console.log(response)
      axios.get('http://localhost:3000/api/travel/retrieve')
        .then(response => {
            this.travels = response.data; 
        });
        })
        .catch((error) => {
          console.log(error);
        });
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