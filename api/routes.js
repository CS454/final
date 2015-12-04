var validate = require('validator');
module.exports = function(app) {
	app.post('/userinfoPost', function(req, res){
			if(!validate.isAlpha(req.body.fname)) {
				res.send('Not correct');
			}
			if(!validate.isURL(req.body.url)) {
				res.send("not correct url");
			}
			if(validate.isBefore('01/01/1997',req.body.bday)) {
				res.send("you should be above 18 to proceed");
			}
			if(!validate.contains('facebook',req.body.facebook)) {
				res.send("do you think we're stupid?");
			}
			else {
				res.redirect('/register');
			}
		//res.redirect('/register');
	});
	app.post('/registerPost', function(req,res){
		


	});
	app.post('/contactPost', function(req,res){
		


	});
	app.post('/paymentPost', function(req,res){
		


	});
}
