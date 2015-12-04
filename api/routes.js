var validate = require('validator');

module.exports = function(app) {

	app.post('/userinfoPost', function(req, res){
		var date = new Date();
		var year = date.getFullYear();
		var refDate = new Date((date.getFullYear()-18), date.getMonth(), date.getDate());

			if(!validate.isAlpha(req.body.fname)) {
				res.send('Not correct first name');
			}
			if(!validate.isAlpha(req.body.lname)) {
				res.send('Not correct last name');
			}
			if(!validate.isURL(req.body.url)) {
				res.send("not correct url");
			}
			if(validate.isAfter(req.body.bday, refDate)) {
				res.send("you should be above 18 to proceed");
			}
			if(!validate.contains(req.body.fb,'facebook')) {
				res.send("please enter your facebook url");
			}
			else {
				res.redirect('/register');
			}
		//res.redirect('/register');
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
		var sanitizeEmail = validate.normalizeEmail(req.body.email);

		console.log("Sanitized Email: "+sanitizeEmail);
		if(!validate.isEmail(sanitizeEmail)){
			res.send("Invalid email");
		}
		if(!validate.isMobilePhone(req.body.mobile,'en-US')){
			res.send("Invalid mobile");
		}
		if(!validate.isAlpha(req.body.state)){
			res.send("Invalid state");
		}
		if(!validate.isNumeric(req.body.zipcode)){
			res.send("Invalid zipcode");
		}
		if(!validate.isLength(req.body.zipcode,5,5)){
			res.send("Invalid zipcode length");
		}

		res.redirect('/payment');




	});

	app.post('/paymentPost', function(req,res){


	});
}
