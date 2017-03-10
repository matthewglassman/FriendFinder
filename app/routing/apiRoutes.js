var friendData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req,res){
		var surveyTakerInfo = req.body;
		var friendMatch;
		var friendsValue;
		var bestMatch = 40;

		for (var i = 0; i < friendData.length; i++){
			currentValue = 0;
			for (var j = 0; j < friendData[i].scores.length; j++){
				currentValue+=Math.abs(friendData[i].scores[j] - surveyTakerInfo.scores[j]);
				console.log(friendData[i].name +" "+currentValue);
				if (currentValue < bestMatch){
					bestMatch = currentValue;
					console.log(bestMatch);
				}
			};
		};
	});
};






// var friendData = require("../data/friends");

// module.exports = function(app){
// 	app.get("/api/friends", function(req, res){
// 		res.json(friendData);
// 	});

// 	app.post("/api/friends", function(req, res){
// 		//variable to capture the survey takers data on submit.
// 		var surveyTakerInfo = req.body;
// 		//console.log(surveyTakerInfo);
// 		var friendMatch;
// 		var friendsValue;
// 		var bestMatch = 40;

// 		for (var i = 0; i < friendData.length; i++){
// 			currentValue = 0;
// 			for(var j = 0; j < friendData[i].scores.length; j++){
// 				currentValue+=Math.abs(friendData[i].scores[j] - surveyTakerInfo.scores[j]);
// 				console.log(friendData[i].name + " "+currentValue)
// 				if (currentValue < bestMatch){
// 					bestMatch = currentValue;
// 					console.log(bestMatch);

// 				};
// 			};
// 		};


// 	// 	for(var i=0; i<friendData.length; i++){
// 	// 		currentValue=0;
// 	// 		console.log(currentValue);
// 	// 		for(var j=0; j<friendData[i].scores.length; j++){
// 	// 			currentValue+=Math.abs(friendData[i].scores[j]-surveyTakerInfo.scores[j]);
// 	// 			console.log(friendData[i].name +" "+currentValue);
// 	// 			//console.log("Friends Value: " +friendsValue);
// 	// 		}
// 	// 		if(currentValue < friendsValue || friendsValue === null){
// 	// 			friendsValue=currentValue;
// 	// 			friendMatch = friendData[i];
// 	// 		}
// 	// 		console.log(JSON.stringify(friendMatch));
// 	// 	}
// 	// });
// });
// };