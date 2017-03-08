var friendData = require("/../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res){
		let friendScore = friendData.score[i]
		for (let i in friendscore){
			console.log(friendscore);
		};

	});

