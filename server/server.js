const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const travelControl = require('./controllers/travelControl');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/holiday', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('database connected'))
    .catch(err => console.error(err));

app.post('/api/travel/create', travelControl.create);
app.post('/api/travel/update', travelControl.update);
app.get('/api/travel/retrieve', travelControl.retrieve);
app.delete('/api/travel/delete', travelControl.delete);



app.listen(3000, () => 
console.log(`Server listening on ${port}!`))