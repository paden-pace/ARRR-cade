$(document).ready(function () {
    console.log("page connected.");

    $(".red-btn").on("click", function () {
        console.log("red clicked.")
    })

    $(".yellow-btn").on("click", function () {
        console.log("yellow clicked.")
    })

    $(".green-btn").on("click", function () {
        console.log("green clicked.")
    })

    $(".blue-btn").on("click", function () {
        console.log("blue clicked.")
    })

    var unlightRed = function () {
        $(".red-btn").addClass("dimmed");
        console.log("unlight red");
    };
    var unlightYellow = function () {
        $(".yellow-btn").addClass("dimmed");
        console.log("unlight yellow");
    };
    var unlightGreen = function () {
        $(".green-btn").addClass("dimmed");
        console.log("unlight green");
    };
    var unlightBlue = function () {
        $(".blue-btn").addClass("dimmed");
        console.log("unlight blue");
    };

    var lightUp = function () {
        console.log("lightUP functioning.")
        if (simon[i] == 1) {
            $(".red-btn").removeClass("dimmed");
            window.setTimeout(unlightRed, 1000);
            console.log("lightUP red.")
        } else if (simon[i] == 2) {
            $(".yellow-btn").removeClass("dimmed");
            window.setTimeout(unlightYellow, 1000);
            console.log("lightUP yellow.")
        } else if (simon[i] == 3) {
            $(".green-btn").removeClass("dimmed");
            window.setTimeout(unlightGreen, 1000);
            console.log("lightUP green.")
        } else if (simon[i] == 4) {
            $(".blue-btn").removeClass("dimmed");
            window.setTimeout(unlightBlue, 1000);
            console.log("lightUP blue.")
        }
    };

    var next = function (simon) {
        simon.push((Math.floor(Math.random() * (5 - 1)) + 1));
        console.log("Simon says " + simon);

        //for(i=0; i<simon.length; i++){
        var i = 0;
        if (i < simon.length) {
            var lightUp = function (i) {
                console.log("lightUP functioning.")
                console.log("i = " + i);
                if (simon[i] == 1) {
                    console.log("lightUP RED functioning.")
                    $(".red-btn").removeClass("dimmed");
                    window.setTimeout(unlightRed, 1000);
                    console.log("lightUP red.")
                } else if (simon[i] == 2) {
                    console.log("lightUP YELLOW functioning.")
                    $(".yellow-btn").removeClass("dimmed");
                    window.setTimeout(unlightYellow, 1000);
                    console.log("lightUP yellow.")
                } else if (simon[i] == 3) {
                    console.log("lightUP GREEN functioning.")
                    $(".green-btn").removeClass("dimmed");
                    window.setTimeout(unlightGreen, 1000);
                    console.log("lightUP green.")
                } else if (simon[i] == 4) {
                    console.log("lightUP BLUE functioning.")
                    $(".blue-btn").removeClass("dimmed");
                    window.setTimeout(unlightBlue, 1000);
                    console.log("lightUP blue.")
                }
            };

            setTimeout(lightUp, 1000);
            i++;
            lightUp(i);
        };
    };

    var simon = [];
    $(".start-btn").on("click", function () {
        console.log("Game started.");
        console.log("Simon says " + simon);
        next(simon);

    })





});