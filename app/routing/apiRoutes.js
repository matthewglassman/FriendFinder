var friendData = require("/../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res){

		//logic for processing survey results into the friends JSON and also to handle compatibility logic.
	});

