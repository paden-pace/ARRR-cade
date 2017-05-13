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

$('#sendPog').on('click', function () {
    document.location.replace('../../PogPage/index.html')
})
// })
var currentName = '';
var currentSimon = '';
var currentRps = '';
var currentPog = '';
var currentCard = '';
//localStorage.setItem('currentName', currentName);

$("#logIn").on("submit", function (event) {
    //event.preventDefault();
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
    if (player.playerName.length > 0 && player.password.length > 0) {
        document.getElementById('id01').style.display = 'none';
        $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + player.playerName+ "</h5>");
        $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");
        $('.logout-button').attr('onClick', 'logOutFunction();');
   
    }
    if ("undefined" === typeof c) {
        console.log("variable is undefined");
    }

    $.post("api/players", player).then(function (x) {
        console.log('x: ', x);
        if (x.response == 'this password is not correct') {
            alert('incorrect password, please try again.');
            document.getElementById('id01').style.display = 'block'
        } else {
            document.getElementById('id01').style.display = 'none'
            currentUser = x[0].playerName;
            console.log('current user: ', currentUser);
            $('h5').text("Logged in as: " + currentUser);
            localStorage.setItem('currentUser', currentUser);

            currentName = x[0].playerName;
            console.log('current name: ', currentName);
            localStorage.setItem('currentName', currentName);


            currentSimon = x[0].simonHiScore;
            console.log('current simon: ', currentSimon);
            localStorage.setItem('currentSimon', currentSimon);

            currentPog = x[0].pogNumOfWins;
            console.log('current pog: ', currentPog);
            localStorage.setItem('currentPog', currentPog);

            currentCard = x[0].blackJackHiScore;
            console.log('current card: ', currentCard);
            localStorage.setItem('currentCard', currentCard);

            currentRps = x[0].rpsNumOfWins;
            console.log('current rps: ', currentRps);
            localStorage.setItem('currentRps', currentRps);

            
            $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + (localStorage.getItem('currentName'))+ "</h5>");
            $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");
            $('.logout-button').attr('onClick', 'logOutFunction();');
            displayScores();
            console.log("should update the main-bar")
        }

    })
    $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + (localStorage.getItem('currentName'))+ "</h5>");
    $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");
    $('.logout-button').attr('onClick', 'logOutFunction();');
    displayScores();

})
$("#createNewPlayer").on("click",function(event) {
    $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + (localStorage.getItem('currentName'))+ "</h5>");
    $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");
    //$('.logout-button').attr('onClick', 'logOutFunction();');
    displayScores();
});


if ((localStorage.getItem('currentName')) != '') {
    document.getElementById('id01').style.display = 'none';

    $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + (localStorage.getItem('currentName'))+ "</h5>");
    $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");

    displayScores();

}

function displayScores() {
    
    $(".pog-score").html("<h5 class='score-text'>Current Score: " + (localStorage.getItem('currentPog'))+ "</h5>");
    $(".rps-score").html("<h5 class='score-text'>Current Score: " + (localStorage.getItem('currentRps'))+ "</h5>");
    $(".simon-score").html("<h5 class='score-text'>Current Score: " + (localStorage.getItem('currentSimon'))+ "</h5>");
    $(".card-score").html("<h5 class='score-text'>Current Score: " + (localStorage.getItem('currentCard'))+ "</h5>");
    $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + (localStorage.getItem('currentName'))+ "</h5>");
    $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");
    $('.logout-button').attr('onClick', 'logOutFunction();');
};

function pogClick() {
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

function rpsClick() {
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

function simonClick() {
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

function cardClick() {
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
$("#tab-pog").on('click', function () {
    pogClick();
    getPogScores();
});
$("#tab-rps").on('click', function () {
    rpsClick();
});
$("#tab-simon").on('click', function () {
    simonClick();
    getSimonScores();
});
$("#tab-card").on('click', function () {
    cardClick();
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
        if (pogScores[i]) {
            rowsToAdd.push(createNewPogRow(i, pogScores[i]));
        };
    };
    for (var i = 0; i <= 9; i++) {
        if (rowsToAdd[i]) {
            pogContainer.append(rowsToAdd[i]);
        };
    };
};

// This function grabs scores from the database and updates the view
function getPogScores() {
    $.get("/api/players", function (data) {
        console.log("Scores", data);
        data.sort(function (a, b) {
            return a.pogNumOfWins > b.pogNumOfWins ? -1 : 1;
        });
        pogScores = data;
        initializePogRows();
    });
}

function createNewPogRow(i, score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    var number = i+1;
    newScoreSpan.text(number + ". Player: " + score.playerName + " - Score: " + score.pogNumOfWins);
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
        if (rpsScores[i]) {
            rowsToAdd.push(createNewRpsRow(i, rpsScores[i]));
        };
    };
    for (var i = 0; i <= 9; i++) {
        if (rowsToAdd[i]) {
            rpsContainer.append(rowsToAdd[i]);
        };
    };
};

// This function grabs scores from the database and updates the view
function getRpsScores() {
    $.get("/api/players", function (data) {
        console.log("Scores", data);
        data.sort(function (a, b) {
            return a.rpsNumOfWins > b.rpsNumOfWins ? -1 : 1;
        });
        rpsScores = data;
        initializeRpsRows();
    });
}

function createNewRpsRow(i, score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    var number = i+1;
    newScoreSpan.text(number + ". Player: " + score.playerName + " - Score: " + score.rpsNumOfWins);
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
        if (simonScores[i]) {
            rowsToAdd.push(createNewSimonRow(i, simonScores[i]));
        };
    };
    for (var i = 0; i <= 9; i++) {
        if (rowsToAdd[i]) {
            simonContainer.append(rowsToAdd[i]);
        };
    };
};

// This function grabs scores from the database and updates the view
function getSimonScores() {
    $.get("/api/players", function (data) {
        console.log("Scores", data);
        data.sort(function (a, b) {
            return a.simonHiScore > b.simonHiScore ? -1 : 1;
        });
        simonScores = data;
        initializeSimonRows();
    });
}

function createNewSimonRow(i, score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    var number = i+1;
    newScoreSpan.text(number + ". Player: " + score.playerName + " - Score: " + score.simonHiScore);
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
        if (cardScores[i]) {
            rowsToAdd.push(createNewCardRow(i, cardScores[i]));
        };
    };
    for (var i = 0; i <= 9; i++) {
        if (rowsToAdd[i]) {
            cardContainer.append(rowsToAdd[i]);
        };
    };
};

// This function grabs scores from the database and updates the view
function getCardScores() {
    $.get("/api/players", function (data) {
        console.log("Scores", data);
        data.sort(function (a, b) {
            return a.blackJackHiScore > b.blackJackHiScore ? -1 : 1;
        });
        cardScores = data;
        initializeCardRows();
    });
}

function createNewCardRow(i, score) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item score-item");
    var newScoreSpan = $("<span>");
    var number = i+1;
    newScoreSpan.text(number + ". Player: " + score.playerName + " - Score: " + score.blackJackHiScore);
    newInputRow.append(newScoreSpan);
    newInputRow.data("score", score);

    return newInputRow;
}


var logOutFunction = function () {
    console.log("Log-Out Clicked!")
    currentName = '';
    currentSimon = '';
    currentRps = '';
    currentPog = '';
    currentCard = '';
    localStorage.setItem('currentUser', '');
    localStorage.setItem('currentName', currentName);
    localStorage.setItem('currentSimon', currentSimon);
    localStorage.setItem('currentRps', currentRps);
    localStorage.setItem('currentPog', currentPog);
    localStorage.setItem('currentCard', currentCard);
    $("#main-bar").html("<h4 id='current-name'>You're not currently logged in.</h4>")
    document.getElementById('id02').style.display = 'none';
    document.getElementById('id01').style.display = 'block';
    console.log("Log-Out Clicked #2!")
};