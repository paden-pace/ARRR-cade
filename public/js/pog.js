var pointvals = [];
var totalscore = 0;
var wins = 0;
var losses = 0;
var goal = Math.floor(Math.random() * 100 + 19);
var currentName = localStorage.getItem('currentName');
var currentScore = localStorage.getItem('currentPog');
$("#current-name").html("Logged in as: " + currentName);
$("#current-score").html("Current High Score: " + currentScore);

function init() {
	pointvals = [];
	$('.pogpics').empty();
	while (pointvals.length < 4) {
		var randomnum = Math.floor(Math.random() * 12 + 1);
		if (pointvals.indexOf(randomnum) == -1) {
			pointvals.push(randomnum);
		}
	}
	for (var i = 0; i < 4; i++) {
		var img = $('<img class="col-sm-3">');
		img.attr('src', "../assets/img/pirate" + (i + 1) + ".png")
			.attr('id', i + 1)
			.val(pointvals[i]);
		$('.pogpics').append(img);
	}

}
$(document).ready(function () {
	init();
	$(document).on('click', 'img', function () {
		console.log(this.value);
		totalscore += parseInt(this.value);
		$('.currentscore').html('Current POG Total:<br>' + totalscore);
		console.log(totalscore);
		console.log(goal);
		if (totalscore == goal) {
			win();
		} else if (totalscore > goal) {
			console.log('loser');
			losses++;
			console.log(losses);
			$('.lossnum').html('LOSSES: <br>' + losses);
			alert("Total Score is: " + totalscore + ". You've Lost!");
			totalscore = 0;
			$('.currentscore').html('Current POG Total:<br>' + 0);
			goal = Math.floor(Math.random() * 100 + 19);
			$('.randonum').html('TARGET POG-SCORE: <br>' + goal);
			init();
		}
	})
	$('.reset').on('click', function () {
		location.reload();
	})
})
$('.randonum').append(goal);
$('.currentscore').append(totalscore);
$('.winsnum').html('WINS: <br>' + wins)
$('.lossnum').html('LOSSES: <br>' + losses)
// *** 1) Reset Target Score on a Win or a Loss;
// *** 2) Get Reset Button to Work;
// *** 3) Styling

function win() {
	console.log('winner');
	wins++;
	// logWinToDb();
	console.log(wins);
	$('.winsnum').html('WINS: <br>' + wins);
	alert("Perfect Score. You've Won!");
	totalscore = 0;
	$('.currentscore').html('Current POG Total:<br>' + 0);
	goal = Math.floor(Math.random() * 100 + 19);
	$('.randonum').html('TARGET POG-SCORE: <br>' + goal);
	init();
	$.post('/api/pogwins', {
		currentName: localStorage.getItem('currentName')
	});
}