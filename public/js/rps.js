var currentName = localStorage.getItem('currentName');
var currentScore = localStorage.getItem('currentRps');
$("#current-name").html("Logged in as: " + currentName);
$("#current-score").html("Current High Score: " + currentScore);


var rps = {



    //player stats
    player: {
        score: 0,
        pick: 0
    },
    //computer stats
    comp: {
        score: 0,
        pick: 0
    },
    //game flow
    game: function (val) {
        this.userInput(val);
        this.compInput();
        this.compareMoves();
        this.endRound();
    },
    initialize: function () {
        rps.player.score = 0;
        rps.comp.score = 0;
        rps.updateDisplay(-1, 0);
    },
    //take user input from page
    userInput: function (val) {
        rps.player.pick = val;
        console.log("Player: " + val);
    },

    //random input 1-3
    compInput: function () {
        //random value from 1-3
        var random = Math.floor(Math.random() * 3 + 1);
        rps.comp.pick = random;
        console.log("Comp: " + rps.comp.pick);
    },

    //compare userInput and compInput
    compareMoves: function () {
        var player = rps.player.pick;
        var comp = rps.comp.pick;
        var result;

        //1 = rock, 2 = paper, 3 = scissors
        rps.updateDisplay(player, comp);

        //tie
        if (player == comp) {
            console.log("Draw");
            result = "Draw";
        }
        //rock beats scissors
        else if (player == 1 && comp == 3) {
            rps.player.score++;
            console.log("player win");
            result = "You Win";
        } else if (comp == 1 && player == 3) {
            rps.comp.score++;
            console.log("comp win");
            result = "You Lose";
        }
        //scissors beats paper, paper beats rock
        else if (player > comp) {
            rps.player.score++;
            console.log("player win");
            result = "You Win";
        } else {
            rps.comp.score++
                console.log("comp win");
            result = "You Lose";
        }
        rps.messageUpdate(result);
    },
    updateDisplay: function (player, comp) {
        var img = $(".thumbnail img");
        var img2 = $(".rps-text img");
        var text = "../assets/img/###-text.png";
        var image = "../assets/img/###.png"

        if (player < 0) {
            img.attr("src", text.replace("###", "ready"));
        } else {
            var array = ["anchor", "parrot", "sword"];

            img.attr("src", image.replace("###", array[comp - 1]));

            // img2.attr("src", text.replace("###", array[comp - 1]));
        }
    },
    //decide if game ends
    endRound: function () {
        var player = rps.player.score;
        var comp = rps.comp.score;

        if (player == 3) {
            console.log("You win");
            //return win to database
            //return to main page
            $(".result").html("You win! Game over!");
            $.post("/api/rpswins", {
                currentName: localStorage.getItem("currentName")
            });

            rps.initialize();
        } else if (comp == 3) {
            console.log("You lose");
            //display snarky message
            //return to main page
            $(".result").html("You lose! Game over!");
            rps.initialize();
        } else {
            //next round
        }
    },
    messageUpdate: function (result) {
        var player = rps.player.score;
        var comp = rps.comp.score;

        $(".computer-score").html("BIG BAD AI: " + comp);
        $(".player-score").html("You: " + player);
        $(".result").html(result);
    }
};


rps.initialize();

$(".player").on("click", function () {
    var value = $(this).attr("data-value");
    rps.game(value);
});