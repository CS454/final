var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {
	app.get('/api/search/shows', function(req, res){
		superagent
		.get(config.tvmaze.url + '/search/shows')
		.query(req.query)
		.end(function(err, result){
			if (err) {
				return res.send(err);
			}
			else {
				res.json(JSON.parse(result.text));
			}	
		})
	});
	app.get('/api/show/:id', function(req,res){
		superagent
		.get(config.tvmaze.url + '/shows/'+req.params.id)
		.query({embed: "cast"})
		.end(function(err, result) {
			if (err) {
				return res.send(err);
			}
			else {
				res.json(JSON.parse(result.text));
			}
		});
	});
}
