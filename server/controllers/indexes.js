var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
	show: function(req, res){
		Animal.find({}, function(err, results){
			if(err){
				console.log("results error");
			} 
			else {
				res.render('index', {animals: results});
			};
		});
	},
	create: function(req, res){
		Animal.create(req.body, function(err) {
			if (err){
				console.log("something went wrong!");
			} 
			else {
				console.log("successfully added new mongoose");
				res.redirect('/');
			}
		});
	},
	user: function(req, res){
		console.log("in the mongooses/id")
		Animal.find({_id: req.params.id}, function(err, mongooses){
			if (err){
				console.log("uh oh something's wrong")
			}
			else{
				res.render('user_page', { animal: mongooses[0] });
			}
		});
	},
	edit: function(req, res){
		Animal.find({ _id: req.params.id }, function(err, mongooses){
    		if (err){ 
    			console.log("something is wrong with edit"); 
    		}
    		else {
    			console.log("at edit");
    			res.render('edit', { animal: mongooses[0] });
    		}
  		});
	},
	update: function(req, res){
		console.log("in the update", req.params);
  		Animal.update({ _id: req.params.id }, req.body, function(err, result){
    		if (err){ 
    			console.log("error in update"); 
    		} 
    		else {
    			console.log("updated", result);
    			res.redirect('/');
    		}
  		});
	},
	delete: function(req, res){
		Animal.remove({ _id: req.params.id }, function(err, result){
    		if (err){ 
    			console.log("doesn't want to delete"); 
    		}
    		res.redirect('/');
 		});
	}

} 