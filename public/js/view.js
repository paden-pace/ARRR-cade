$('#switchToLogin').on('click', function () {
    console.log('clicked!');
    document.getElementById('id01').style.display = 'none';
    document.getElementById('id02').style.display = 'block';
})

$('#switchToCreate').on('click', function () {
    document.getElementById('id02').style.display = 'none';
    document.getElementById('id01').style.display = 'block';
})

// $('#createNewPlayer').on('click', function(){
//     $.post("/api/players", player, function())
// })

$('#sendPog').on('click', function(){
    document.location.replace('../../PogPage/index.html')
})
// })
var currentUser = '';
$("#logIn").on("submit",function(event) {
    event.preventDefault();
    var playerName = $("input.username");
    var password = $("input.pword");
    var player = {
        playerName: playerName
            .val()
            .trim(),
        password: password
            .val()
            .trim()
    };
    console.log(player);
    if(player.playerName.length > 0 && player.password.length > 0){
            document.getElementById('id01').style.display = 'none';
    }
    $.post("api/players", player).then(function(x) {
        console.log('x: ', x);
        currentUser = x[0].playerName;
        console.log('current user: ',currentUser);
        $('h5').text("Logged in as: "+ currentUser);
          localStorage.setItem('currentUser', currentUser);
    })
})


function pogClick () {
		$("#score-pog").addClass("active");
		$("#score-pog").addClass("in");
		$("#score-rps").removeClass("active");
		$("#score-rps").removeClass("in");
		$("#score-simon").removeClass("active");
		$("#score-simon").removeClass("in");
		$("#score-card").removeClass("active");
		$("#score-card").removeClass("in");
		$("#list-pog").addClass("active");
		$("#list-rps").removeClass("active");
		$("#list-simon").removeClass("active");
		$("#list-card").removeClass("active");
	};
	function rpsClick () {
		$("#score-pog").removeClass("active");
		$("#score-pog").removeClass("in");
		$("#score-rps").addClass("active");
		$("#score-rps").addClass("in");
		$("#score-simon").removeClass("active");
		$("#score-simon").removeClass("in");
		$("#score-card").removeClass("active");
		$("#score-card").removeClass("in");
		$("#list-pog").removeClass("active");
		$("#list-rps").addClass("active");
		$("#list-simon").removeClass("active");
		$("#list-card").removeClass("active");
	};
	function simonClick () {
		$("#score-pog").removeClass("active");
		$("#score-pog").removeClass("in");
		$("#score-rps").removeClass("active");
		$("#score-rps").removeClass("in");
		$("#score-simon").addClass("active");
		$("#score-simon").addClass("in");
		$("#score-card").removeClass("active");
		$("#score-card").removeClass("in");
		$("#list-pog").removeClass("active");
		$("#list-rps").removeClass("active");
		$("#list-simon").addClass("active");
		$("#list-card").removeClass("active");
	};
	function cardClick () {
		$("#score-pog").removeClass("active");
		$("#score-pog").removeClass("in");
		$("#score-rps").removeClass("active");
		$("#score-rps").removeClass("in");
		$("#score-simon").removeClass("active");
		$("#score-simon").removeClass("in");
		$("#score-card").addClass("active");
		$("#score-card").addClass("in");
		$("#list-pog").removeClass("active");
		$("#list-rps").removeClass("active");
		$("#list-simon").removeClass("active");
		$("#list-card").addClass("active");
	};
	$("#tab-pog").on('click', function(){
		 pogClick ();
         getPogScores();
	});
	$("#tab-rps").on('click', function(){
		rpsClick ();
	});
	$("#tab-simon").on('click', function(){
		simonClick ();
        getSimonScores();
	});
	$("#tab-card").on('click', function(){
		cardClick ();
	});


// =====================================================================
//                       Pog Score Functions
// =====================================================================

var pogContainer = $(".pog-score-container");
      // Our initial pog array
  var pogScores;

  // Getting pog scores from database when page loads
  getPogScores();

  // This function resets the scores displayed with new scores from the database
  function initializePogRows() {
    pogContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i <= 10; i++) {
        if (pogScores[i]){
            rowsToAdd.push(createNewPogRow(pogScores[i]));
        };
    };
    for (var i = 0; i <= 10; i++) {
        if (rowsToAdd[i]){
            pogContainer.prepend(rowsToAdd[i]);
        };
    };
  };

  // This function grabs scores from the database and updates the view
  function getPogScores() {
    $.get("/api/players", function(data) {
      console.log("Scores", data);
      data.sort(function(a, b) {
         return a.pogNumOfWins < b.pogNumOfWins ? -1 : 1;
         });
      pogScores = data;
      initializePogRows();
    });
  }

  function createNewPogRow(score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    newScoreSpan.text("Player: " + score.playerName + " - Score: " + score.pogNumOfWins);
    newInputRow.append(newScoreSpan);
    newInputRow.data("score", score);

    return newInputRow;
  }

// =====================================================================
//                       RPS Score Functions
// =====================================================================

var rpsContainer = $(".rps-score-container");
      // Our initial scores array
  var rpsScores;

  // Getting rps scores from database when page loads
  getRpsScores();

  // This function resets the scores displayed with new scores from the database
  function initializeRpsRows() {
    rpsContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i <= 10; i++) {
        if (rpsScores[i]){
            rowsToAdd.push(createNewRpsRow(rpsScores[i]));
        };
    };
    for (var i = 0; i <= 10; i++) {
        if (rowsToAdd[i]){
            rpsContainer.prepend(rowsToAdd[i]);
        };
    };
  };

  // This function grabs scores from the database and updates the view
  function getRpsScores() {
    $.get("/api/players", function(data) {
      console.log("Scores", data);
      data.sort(function(a, b) {
         return a.rpsNumOfWins < b.rpsNumOfWins ? -1 : 1;
         });
      rpsScores = data;
      initializeRpsRows();
    });
  }

  function createNewRpsRow(score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    newScoreSpan.text("Player: " + score.playerName + " - Score: " + score.rpsNumOfWins);
    newInputRow.append(newScoreSpan);
    newInputRow.data("score", score);

    return newInputRow;
  }

// =====================================================================
//                       Simon Score Functions
// =====================================================================

var simonContainer = $(".simon-score-container");
      // Our initial scores array
  var simonScores;

  // Getting simon scores from database when page loads
  getSimonScores();

  // This function resets the scores displayed with new scores from the database
  function initializeSimonRows() {
    simonContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i <= 10; i++) {
        if (simonScores[i]){
            rowsToAdd.push(createNewSimonRow(simonScores[i]));
        };
    };
    for (var i = 0; i <= 10; i++) {
        if (rowsToAdd[i]){
            simonContainer.prepend(rowsToAdd[i]);
        };
    };
  };

  // This function grabs scores from the database and updates the view
  function getSimonScores() {
    $.get("/api/players", function(data) {
      console.log("Scores", data);
      data.sort(function(a, b) {
         return a.simonHiScore < b.simonHiScore ? -1 : 1;
         });
      simonScores = data;
      initializeSimonRows();
    });
  }

  function createNewSimonRow(score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    newScoreSpan.text("Player: " + score.playerName + " - Score: " + score.simonHiScore);
    newInputRow.append(newScoreSpan);
    newInputRow.data("score", score);

    return newInputRow;
  }

// =====================================================================
//                       Card Score Functions
// =====================================================================

var cardContainer = $(".card-score-container");
      // Our initial scores array
  var cardScores;

  // Getting card scores from database when page loads
  getCardScores();

  // This function resets the scores displayed with new scores from the database
  function initializeCardRows() {
    cardContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i <= 10; i++) {
        if (cardScores[i]){
            rowsToAdd.push(createNewCardRow(cardScores[i]));
        };
    };
    for (var i = 0; i <= 10; i++) {
        if (rowsToAdd[i]){
            cardContainer.prepend(rowsToAdd[i]);
        };
    };
  };

  // This function grabs scores from the database and updates the view
  function getCardScores() {
    $.get("/api/players", function(data) {
      console.log("Scores", data);
      data.sort(function(a, b) {
         return a.blackJackHiScore < b.blackJackHiScore ? -1 : 1;
         });
      cardScores = data;
      initializeCardRows();
    });
  }

  function createNewCardRow(score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    newScoreSpan.text("Player: " + score.playerName + " - Score: " + score.blackJackHiScore);
    newInputRow.append(newScoreSpan);
    newInputRow.data("score", score);

    return newInputRow;
  }

