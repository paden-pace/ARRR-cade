// card deck API urls
var currentName = localStorage.getItem('currentName');
var currentScore = localStorage.getItem('currentCard');
$("#current-name").html("Logged in as: " + currentName);
$("#current-score").html("Current High Score: " + currentScore);

var guess = 3;
var level = 0;

(function () {
    //api data
    var dealer = {
        deck: '',
        draw: ''
    };
    var guess = 3;
    var level = 0;

    //game states
    var game = {
        status: '',
        deckId: "asuty8abnzay",
        remaining: '',
        result: '',
        player: '',
        drawn: '',
    };

    //elements
    var player = $('#player'),
        start = $('#start'),
        lower = $('.lower'),
        higher = $('.higher'),
        state = $('.state'),
        result = $('#result'),
        choice = $('#choice'),
        remain = $('#remain'),
        restart = $('#restart');
    check = $(".check");

    //cards
    var cards = [{
        '1': 0
    }, {
        '2': 1
    }, {
        '3': 2
    }, {
        '4': 3
    }, {
        '5': 4
    }, {
        '6': 5
    }, {
        '7': 6
    }, {
        '8': 7
    }, {
        '9': 8
    }, {
        '10': 9
    }, {
        'J': 10
    }, {
        'Q': 11
    }, {
        'K': 12
    }, {
        'A': 13
    }];

    //messages
    var messages = {
        start: 'Please choose lower or higher!',
        remaining: 'You have ' + game.remaining + ' cards remaining!',
        lower: 'You chose Lower!',
        higher: 'You chose Higher!',
        win: 'You have won!',
        correct: 'You are correct!',
        incorrect: 'You are incorrect, please start again!',
    };

    //urls
    var deck = "http://deckofcardsapi.com/api/deck/new/shuffle/",
        card = "http://deckofcardsapi.com/api/deck/" + game.deckId + "/draw/?count=1",
        shuffle = "http://deckofcardsapi.com/api/deck/" + game.deckId + "/shuffle/";

    function init() {
        start.show();
        game.status = 'NEW';

        start.on('click', function () {
            var dealer = {} ? handleData(deck) : handleData(shuffle);

            start.hide();
            check.show();
            state.show();
            restart.show();
        });
    }

    function handleData(stateUrl) {
        console.log("check:")
        $.ajax({
            url: stateUrl,
            type: 'GET'
        }).then(function (data) {
            if (dealer.deck === '') {
                dealer.deck = data;
            } else {
                dealer.draw = data;
            }
            handleStatus();
        });
    }


    function handleStatus() {
        console.log(game.status);
        switch (game.status) {
            case "NEW":
                game.status = 'STARTED';
                handleData(card);
                break;
            case "STARTED":
                console.log(dealer);
                player.attr('src', dealer.draw.cards[0].image);
                choice.text(messages.start);
                drawCard();
                break;
            case "CORRECT":
                drawCard();
                break;
            case "SELECTED":
                calculateResult();
                break;
            case "LOSE":
                //lose animation
                break;
            default:
                console.log('no status');
        }
    }

    function calculateResult() {
        player.attr('src', dealer.draw.cards[0].image);
        game.remaining = dealer.draw.remaining;
        remain.text(messages.remaining);
        // console.log("dealercard:" + dealer.cards[0].value); 
        console.log("game.drawn:" + game.drawn);
        console.log("guess: " + guess);
        if (game.remaining === 0) {
            game.status = 'WIN';
            result.text(messages.win);
        } else if (dealer.draw.cards[0].value >= game.drawn && guess === 'higher' || dealer.draw.cards[0].value <= game.drawn && guess === 'lower') {
            level++
            console.log("your score is:" + level);
            game.status = 'CORRECT';
            result.text(messages.correct);
            drawCard();
        } else {
            game.status = 'LOSE';
            gameOver(level);
            result.text(messages.incorrect);
            remain.hide();
            state.hide();
        }
    }

    function drawCard() {
        higher.on('click', function () {
            guess = "higher";
            // handleData(card);
        });
        lower.on('click', function () {
            guess = "lower";

        });
        game.status = 'SELECTED';
        choice.text(messages[guess]);
        game.drawn = dealer.draw.cards[0].value;
        game.player = guess;
        // handleData(card);
    }

    check.on("click", function () {
        console.log("check clicked");
        handleData(card);
    });

    restart.on('click', function () {
        //delete card data
        dealer.draw = '';

        //clear/hide elements
        player.attr('src', "./../img/blank.jpg");
        result.text('');
        choice.text('');
        remain.text('');
        restart.hide();
        state.hide();

        //restart the game
        init();
    });

    var gameOver = function (level) {

        alert("You lose, and your final score is: " + level);
        //SUBMIT THE INFORMATION TO DATABASE...
        updateScore(level);
        variableReset();
    }

    //sequelize
    function updateScore(score) {
        var data = {
            currentName: localStorage.getItem('currentName'),
            blackJackHiScore: score
        }
        $.post('/api/cardUpdate', data);
        if (score > (localStorage.getItem('currentCard'))) {
            localStorage.setItem('currentCard', score);
            //$("#current-score").html("Current High Score: " + score);
        }
    }


    init();

}());



var variableReset = function (){
    guess = 3;
    level = 0;

    dealer = {
        deck: '',
        draw: ''
    };

    game = {
        status: '',
        deckId: "wumfzqv956sl",
        remaining: '',
        result: '',
        player: '',
        drawn: '',
    };

    //elements
    player = $('#player');
    start = $('#start');
    lower = $('.lower');
    higher = $('.higher');
    state = $('.state');
    result = $('#result');
    choice = $('#choice');
    remain = $('#remain');
    restart = $('#restart');
    check = $(".check");

    //cards
    cards = [{
        '1': 0
    }, {
        '2': 1
    }, {
        '3': 2
    }, {
        '4': 3
    }, {
        '5': 4
    }, {
        '6': 5
    }, {
        '7': 6
    }, {
        '8': 7
    }, {
        '9': 8
    }, {
        '10': 9
    }, {
        'J': 10
    }, {
        'Q': 11
    }, {
        'K': 12
    }, {
        'A': 13
    }];

    //messages
    messages = {
        start: 'Please choose lower or higher!',
        remaining: 'You have ' + game.remaining + ' cards remaining!',
        lower: 'You chose Lower!',
        higher: 'You chose Higher!',
        win: 'You have won!',
        correct: 'You are correct!',
        incorrect: 'You are incorrect, please start again!',
    };

    //urls
    deck = "http://deckofcardsapi.com/api/deck/new/shuffle/";
    card = "http://deckofcardsapi.com/api/deck/" + game.deckId + "/draw/?count=1";
    shuffle = "http://deckofcardsapi.com/api/deck/" + game.deckId + "/shuffle/";

}

//(dealer, guess, level, game, player, start, lower, higher, state, result, choice, remain, restart, check, cards, messages, deck, card, shuffle)
