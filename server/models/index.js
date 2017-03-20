
var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
 name: String,
 age: Number,
 attitude: String,
 color: String
});

var Animal = mongoose.model('Animal', AnimalSchema); 

