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
    //take user input from page
    userInput: function(val) {
    	
    },

    //random input 1-3
    compInput: function() {
    	//random value from 1-3
    	var random = Math.floor(Math.random() * 3 + 1);
    	this.comp.score = random;
    	console.log(this.comp.score);
    },

    //compare userInput and compInput
    compareMoves: function() {

    },

    endRound: function() {

    }
};

console.log("loaded");

$(".btn").on("click", function() {
    var value = $(this).attr("data-value");
    console.log("Value: " + value);


});