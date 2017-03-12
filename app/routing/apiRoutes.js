var friendData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req,res){
		var surveyTakerInfo = req.body;
		console.log(req.body);
		//var friendMatch;
		//var friendsValue;
		//var bestMatch = 40;
		var currentValue = 0;
		var bestFriend = {
			name: "",
			photo: "",
//			bestMatch: 40
		};
		var bestMatch = 40;

		for (var i = 0; i < friendData.length; i++){
			currentValue = 0;
			for (var j = 0; j < friendData[i].scores.length; j++){
				currentValue+=Math.abs(parseInt(friendData[i].scores[j]) - parseInt(surveyTakerInfo.scores[j]));
				console.log(friendData[i].name +" "+currentValue);
				
			};
		if (currentValue < bestMatch){
					bestFriend.name = friendData[i].name;
					bestFriend.photo = friendData[i].photo;
					bestMatch = currentValue;
					
				}
		};
		console.log(bestFriend);
		res.json(bestFriend);
		friendData.push(surveyTakerInfo);
	});
};