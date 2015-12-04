var validate = require('validator');
module.exports = function(app) {

	app.post('/userinfo', function(req, res){
		console.log(req.body);
		res.redirect('/register');
	});

	app.post('/register', function(req,res){



	});
	app.post('/contact', function(req,res){
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
	app.post('/payment', function(req,res){



	});
}
