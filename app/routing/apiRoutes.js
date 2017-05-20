var path = require('path');

// Load Data

var friendData = require("../data/friends");

// Routing

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res){

	// Capture the friend input 
	var friendInput = req.body;

	var friendResponses = friendInput.scores;

		// Compute best friend match
		var friendName = '';
		var friendPhoto = '';
		var totalDifference = 10000; 

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < friendResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - friendResponses[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {

				totalDifference = diff;
				friendName = friends[i].name;
				friendPhoto = friends[i].photo;
			}
		}
		

		// Add new friend
		friendData.push(friendInput);

		

		// Send appropriate response
		res.json({status: 'OK', friendName: friendName, friendPhoto: friendPhoto});
	});	
};
