var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
var animals = require('../controllers/indexes.js');

module.exports = function(app){

	app.get('/', function(req, res){
		animals.show(req,res);
	})

	app.get('/mongooses/new', function(req, res){
		res.render('form');
	}) 

	app.post('/mongooses', function(req, res){
		animals.create(req, res); 
	})

	app.get('/mongooses/:id', function(req, res){
		animals.user(req, res);
	})

	app.get('/mongooses/:id/edit', function(req, res){
		animals.edit(req, res);
	})

	app.post('/mongooses/:id/update', function(req, res){
		animals.update(req, res);
	})

	app.post('/mongooses/:id/delete', function(req, res){
  		animals.delete(req, res);
	})
}

