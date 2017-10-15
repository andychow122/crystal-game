// variables
var wins = 0;
var losses = 0;
var goal;
var points;
var nRed = 0;
var nYellow = 0;
var nGreen = 0;
var nBlue = 0;

// make the game work

var getRandom = function(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var startGame = function() {
	// reset current points
	points = 0;
	// set new target score
	goal = getRandom(19,120);
	// set different values for crystals
	nRed = getRandom(1,12);
	nYellow = getRandom(1,12);
	nGreen = getRandom(1,12);
	nBlue = getRandom(1,12);
	// update html
	$("#points").html(points);
	$("#goal").html(goal);


	// make sure everything is good
	console.log("Goal : " + goal);
	console.log("Red : " + nRed);
	console.log("Yellow : " + nYellow);
	console.log("Green : " + nGreen);
	console.log("Blue : " + nBlue);
}

var checkWin = function() {
	if (points == goal) {
		wins++;
		alert("YOU WIN");
		$("#wins").text("WINS: " + wins);
		startGame();
	}
	else if (points > goal) {
		losses++;
		alert("YOU LOSE");
		$("#losses").text("LOSSES: " + losses);
		startGame();
	}
}

// start game

startGame();


// CRYSTAL CLICKS

$("#red").click(function() {
	points = nRed + points;
	$("#points").html(points);
	checkWin();
});

$("#yellow").click(function() {
	points = nYellow + points;
	$("#points").html(points);
	checkWin();
});

$("#green").click(function() {
	points = nGreen + points;
	$("#points").html(points);
	checkWin();
});

$("#blue").click(function() {
	points = nBlue + points;
	$("#points").html(points);
	checkWin();
});



