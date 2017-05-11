
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

// var simon = [];
// var level = 0;
// //var game = true;
var user= [];
var simon = [];
var level = 0;
var clickable = true;
var checker = true;


var addClickHandlers = function(){
    if(clickable){
        $(".red-btn").on("click", function(){
            console.log("red clicked.")
            user.push(1);
            console.log("USER: " + user);
            console.log("user.length: " + user.length + " vs. simon.length: "+ simon.length)
            //playerCheck(simon, user, level);
        });
        $(".yellow-btn").on("click", function(){
            //console.log("yellow clicked.")
            user.push(2);
            console.log("USER: " + user);
            console.log("user.length: " + user.length + " vs. simon.length: "+ simon.length)
            //playerCheck(simon, user, level);
        });
        $(".green-btn").on("click", function(){
            //console.log("green clicked.")
            user.push(3);
            console.log("USER: " + user);
            console.log("user.length: " + user.length + " vs. simon.length: "+ simon.length)
            //playerCheck(simon, user, level);
        });
        $(".blue-btn").on("click", function(){
            //console.log("blue clicked.")
            user.push(4);
            console.log("USER: " + user);
            console.log("user.length: " + user.length + " vs. simon.length: "+ simon.length)
            //playerCheck(simon, user, level);
        });
        $(".enter-btn").on("click", function(){
            if (user.length == simon.length){
                console.log("enter clicked.")
                for (k=0; k<= simon.length; k++){
                    if(k == simon.length){

                        if (checker == false){
                            gameOver();
                        } else {
                            level++;
                            $(".score-div").html("<h3 class:'score'>Score: " + level + "</h3>");
                            console.log("score = " + level);
                        }
                    } else if (k<simon.length){
                        console.log(k+ ": user[k]vs.simon[k]: "+ user[k] + " vs. " + simon[k])
                        if (user[k] != simon[k]){
                            checker = false;
                        };
                        //k++;
                    };
                };
                
            } else {
                gameOver();
                return;
            };
        });
    } else {
        return;
    }
}; 

var gameOver = function(){
    console.log("Checker:" + checker)
    alert("You lose, and your final score is: " + level);
    //SUBMIT THE INFORMATION TO DATABASE...
    clickable = false;
    user= [];
    simon = [];
    level = 0;
}

var playerCheck = function(simon, user, level) {
    console.log("user.length: " + user.length + " vs. simon.length: "+ simon.length)
    if (user.length == simon.length){
        for (k=0; k<simon.length; k++){
            console.log( k+ ": user[k]vs.simon[k]: "+ user[k] + " vs. " + simon[k])
            if (user[k] == simon[k]){
                
                next(simon, level);
            } else if (user[k] != simon[k]){
                checker = false;
                return;
            };
        }
        if(k == simon.length){
            if (checker == false){
                gameOver();
            } else {
                level++;
                $(".score-div").html("<h3 class:'score'>Score: " + level + "</h3>");
                console.log("score = " + level);
            }
        }
        user = [];
    } else {
        gameOver();
        return;
    };
};
// --------------------------   Light up Functions --------------------------
// -----------  * RED * ---------------------
var lightRed = function(){
    console.log("lightUP RED functioning.")
    $(".red-s-btn").removeClass("dimmed");
};
var unlightRed = function(){
    $(".red-s-btn").addClass("dimmed");
    console.log("unlight red");
};

// -----------  * YELLOW * ---------------------
var lightYellow = function(){
    console.log("lightUP YELLOW functioning.")
    $(".yellow-s-btn").removeClass("dimmed");
};
var unlightYellow = function(){
    $(".yellow-s-btn").addClass("dimmed");
    console.log("unlight yellow");
};

// -----------  * GREEN * ---------------------
var lightGreen = function(){
    console.log("lightUP GREEN functioning.")
    $(".green-s-btn").removeClass("dimmed");
};
var unlightGreen = function(){
    $(".green-s-btn").addClass("dimmed");
    console.log("unlight green");
};

// -----------  * BLUE * ---------------------
var lightBlue = function(){
    console.log("lightUP BLUE functioning.")
    $(".blue-s-btn").removeClass("dimmed");
};
var unlightBlue = function(){
    $(".blue-s-btn").addClass("dimmed");
    console.log("unlight blue");
};

function addNumber (simon){
    var newNumber = (Math.floor(Math.random() * (5 - 1)) + 1);
    if (simon.length == 0){
        simon.push(newNumber);
    } else if (simon.length > 0){
        if (simon[(simon.length-1)] != newNumber){
            simon.push(newNumber);
        } else if (simon[(simon.length-1)] == newNumber){
            addNumber(simon);
        }
    }
};

var simonTurn = function(simon){
    addNumber(simon);
    console.log("Simon says " + simon);
    clickable = false;
    var currentLight = 0;
    user = [];

    function setNextLight(){
    console.log("setNextLight function.")
        if(currentLight >= simon.length){
            currentLight = 0;
            clickable = true;
            return;
        }
        switch(simon[currentLight]){
            case 1:
                console.log("CASE RED");
                lightRed();
                setTimeout(unlightRed, 500)
                break;
            case 2:
                console.log("CASE YELLOW");
                lightYellow();
                setTimeout(unlightYellow, 500)
                break;
            case 3:
                console.log("CASE GREEN");
                lightGreen();
                setTimeout(unlightGreen, 500)
                break;
            case 4:
                console.log("CASE BLUE");
                lightBlue();
                setTimeout(unlightBlue, 500)
                break;
            };
        currentLight++;
        setTimeout(setNextLight, 550);
    }
    setNextLight();
};



// var simonTurn = function(simon, level){
//     addNumber(simon);
//     console.log("Simon says " + simon);
//     //for(i=0; i<simon.length; i++){
//     var i = 0;
//     var lightUP = setInterval(function(){  
//         if (i<simon.length){
//         //for(i=0; i<simon.length; i++){
//             //var lightUp = function(i){
//                 //console.log("lightUP functioning.")
//         console.log("i = " + i);
//         if(simon[i] == 1){
//             console.log("lightUP RED functioning.")
//             $(".red-s-btn").removeClass("dimmed");
//             window.setTimeout(unlightRed, 1000);
//             //console.log("lightUP red.")
//         } else if(simon[i] == 2){
//             console.log("lightUP YELLOW functioning.")
//             $(".yellow-s-btn").removeClass("dimmed");
//             window.setTimeout(unlightYellow, 1000);
//             //console.log("lightUP yellow.")
//         } else if(simon[i] == 3){
//             console.log("lightUP GREEN functioning.")
//             $(".green-s-btn").removeClass("dimmed");
//             window.setTimeout(unlightGreen, 1000);
//             //console.log("lightUP green.")
//         } else if(simon[i] == 4){
//             console.log("lightUP BLUE functioning.")
//             $(".blue-s-btn").removeClass("dimmed");
//             window.setTimeout(unlightBlue, 1000);
//             //console.log("lightUP blue.")
//         }

//         i++;
//         };
//     }, 1050);
//     //make it click able
//     return;
// };

$(document).ready(function() {
    console.log("page connected.");
    addClickHandlers();


   

    // var unlightRed = function(){
    //     $(".red-s-btn").addClass("dimmed");
    //     //console.log("unlight red");
    // };
    // var unlightYellow = function(){
    //     $(".yellow-s-btn").addClass("dimmed");
    //     //console.log("unlight yellow");
    // };
    // var unlightGreen = function(){
    //     $(".green-s-btn").addClass("dimmed");
    //     //console.log("unlight green");
    // };
    // var unlightBlue = function(){
    //     $(".blue-s-btn").addClass("dimmed");
    //     //console.log("unlight blue");
    // };


    



    // var next = function(simon, level){
    //     //console.log("Simon says " + simon);
    //     //while(game == true){
    //         simonTurn(simon);
    //         console.log("LEVEL: " + level);
    //         var userReset = [];
    //         playerTurn(simon, level, userReset);
    //     //};
    // };

    $(".next-btn").on("click", function(){
        simonTurn(simon, level);
    });

    $(".start-btn").on("click", function(){
        console.log("Game started.");
        $(".score-div").html("<h3 class:'score'>Score: " + level + "</h3>");
        checker = true;
        simonTurn(simon, level);
    });
    

});