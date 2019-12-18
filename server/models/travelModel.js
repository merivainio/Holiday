const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model for database
const travelSchema = new Schema({
    kohde: {type: String, required: true},
    lähtö: Date,
    paluu: Date,
    arvio: Number,
    kommentti: String

});

module.exports = mongoose.model('travel', travelSchema);