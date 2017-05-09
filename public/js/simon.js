
// each turn: 
//     push one random value to simon array 
//     display the array 
//         if 1 light up red (etc.) 
//         unlight up red (etc.)
//     user then selects squares (equal to the simon.length) 
//         with each square select push to the empty array of user 
//     compare user array to simon array 
//         if 
//             any of the values do not match up then end the program and log current level 
//         else 
//             current level goes up 
//             reset user array length 
//             begin the cycle all over again 

// Option: 
//     use one set of squares for simon and one for user 
//     add steps remaining counter 

// =============================================================================================
// =============================================================================================

var simon = [];
var level = 0;
//var game = true;
var user= [];

$(document).ready(function() {
    console.log("page connected.");

    var playerCheck = function(simon, user, level) {
        console.log("user.length: " + user.length + " vs. simon.length: "+ simon.length)
        if (user.length < simon.length){    
            playerTurn(simon, level, user);
        } else if (user.length == simon.length){
            for (k=0; k<user.length; k++){
                console.log("user[k]vs.simon[k]: "+ user[k] + " vs. " + simon[k])
                if (user[k] == simon[k]){
                    level++;
                    $(".score-div").html("<h3 class:'score'>Score: " + level + "</h3>");
                    console.log("score = " + level);
                    next(simon, level);
                } else if (user[k] != simon[k]){
                    alert("You lose, and your final score is: " + level);
                    //game = false;
                    return;
                };
            }
            user = [];
        };
        
    };

    var playerTurn = function(simon, level, user) {
        //var user = user;
        console.log("USER: " + user);
        console.log("playerTurn")
        while( user.length <= simon.length){
        //console.log("USER: " + user)
            $(".red-btn").on("click", function(){
                //console.log("red clicked.")
                user.push(1);
                console.log("USER: " + user);
                playerCheck(simon, user, level);
            });
            $(".yellow-btn").on("click", function(){
                //console.log("yellow clicked.")
                user.push(2);
                console.log("USER: " + user);
                playerCheck(simon, user, level);
            });
            $(".green-btn").on("click", function(){
                //console.log("green clicked.")
                user.push(3);
                console.log("USER: " + user);
                playerCheck(simon, user, level);
            });
            $(".blue-btn").on("click", function(){
                //console.log("blue clicked.")
                user.push(4);
                console.log("USER: " + user);
                playerCheck(simon, user, level);
            });
        };
    };

    var unlightRed = function(){
        $(".red-btn").addClass("dimmed");
        //console.log("unlight red");
    };
    var unlightYellow = function(){
        $(".yellow-btn").addClass("dimmed");
        //console.log("unlight yellow");
    };
    var unlightGreen = function(){
        $(".green-btn").addClass("dimmed");
        //console.log("unlight green");
    };
    var unlightBlue = function(){
        $(".blue-btn").addClass("dimmed");
        //console.log("unlight blue");
    };

    var unlight = function(){
        $(".red-btn").addClass("dimmed");
        $(".yellow-btn").addClass("dimmed");
        $(".green-btn").addClass("dimmed");
        $(".blue-btn").addClass("dimmed");
    }


    function addNumber (simon, level){
        //console.log("simon: " + simon);
        var newNumber = (Math.floor(Math.random() * (5 - 1)) + 1);
        if (simon[(simon.length-1)] != newNumber){
            simon.push(newNumber);
        } else if (simon[(simon.length-1)] != newNumber){
            //addNumber(simon);
        }
    };

    var simonTurn = function(simon, level){
        //addNumber(simon, level);
        var newNumber = (Math.floor(Math.random() * (5 - 1)) + 1);
        if (simon[(simon.length-1)] != newNumber){
            simon.push(newNumber);
        } else if (simon[(simon.length-1)] != newNumber){
            //addNumber(simon);
        }
        console.log("Simon says " + simon);
        //for(i=0; i<simon.length; i++){
        var i = 0;
        setInterval(function(){
            if (i<simon.length){
                //var lightUp = function(i){
                    //console.log("lightUP functioning.")
                    console.log("i = " + i);
                    if(simon[i] == 1){
                        console.log("lightUP RED functioning.")
                        $(".red-btn").removeClass("dimmed");
                        window.setTimeout(unlightRed, 1000);
                        //console.log("lightUP red.")
                    } else if(simon[i] == 2){
                        console.log("lightUP YELLOW functioning.")
                        $(".yellow-btn").removeClass("dimmed");
                        window.setTimeout(unlightYellow, 1000);
                        //console.log("lightUP yellow.")
                    } else if(simon[i] == 3){
                        console.log("lightUP GREEN functioning.")
                        $(".green-btn").removeClass("dimmed");
                        window.setTimeout(unlightGreen, 1000);
                        //console.log("lightUP green.")
                    } else if(simon[i] == 4){
                        console.log("lightUP BLUE functioning.")
                        $(".blue-btn").removeClass("dimmed");
                        window.setTimeout(unlightBlue, 1000);
                        //console.log("lightUP blue.")
                    }
                    //window.setTimeout(unlight, 1000);
                };
            //};
            //setTimeout(lightUp, 1000);
            i++;
            //lightUp(i);

        }, 1050);
        
    };


    var next = function(simon, level){
        //console.log("Simon says " + simon);
        //while(game == true){
            simonTurn(simon, level);
            console.log("LEVEL: " + level);
            var userReset = [];
            playerTurn(simon, level, userReset);
        //};
    };



    $(".start-btn").on("click", function(){
        var simon = [];
        var level = 0;
        //var game = true;
        var user= [];
        console.log("Game started.");
        next(simon, level);
    });



});