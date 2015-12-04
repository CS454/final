var validate = require('validator');
module.exports = function(app) {
	app.post('/userinfoPost', function(req, res){
		console.log(req.body);
		res.redirect('/register');
	});
	app.post('/registerPost', function(req,res){
		var errs = {};
		var pass = true;
		if(!validate.isAlphanumeric(req.body.username)||
			!validate.isLength(req.body.username, 5, 12)){
			errs['username'] = false;
			pass = false; 
		}
		if(!validate.isLength(req.body.password, 8)||
			!(validate.matches(req.body.password, /[a-z]/)
				&&(validate.matches(req.body.password, /[A-Z]/))
				&&(validate.matches(req.body.password, /\d/))
				&&(validate.matches(req.body.password, /[!@#$%^&*-?]/)))){
			errs['password'] = false;
			pass = false;
		}
		if(!validate.equals(req.body.password, req.body.repassword)){
			errs['repassword'] = false;
			pass = false;	
		}
		if(pass){
			res.redirect('/contact');
		}else{
			res.json(errs);
		}
		
	});
	app.post('/contactPost', function(req,res){
		


	});
	app.post('/paymentPost', function(req,res){
		


	});
}
