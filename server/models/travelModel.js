const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    kohde: {type: String, required: true},
    lähtö: Date,
    paluu: Date,
    arvio: Number

});

module.exports = mongoose.model('travel', travelSchema);