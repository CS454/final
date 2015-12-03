module.exports = function(app) {
	app.post('/userinfo', function(req, res){
		console.log(req.body);
		res.redirect('/register');
	});
	app.post('/register', function(req,res){
		


	});
	app.post('/contact', function(req,res){
		


	});
	app.post('/payment', function(req,res){
		


	});
}
