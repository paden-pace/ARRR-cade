// var deck;
// var player
// var suitArray = ["hearts", "spades", "clubs", "diamonds"];
// var cardnumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
// var money = 100;
// var playerTotal = sum of random card + random card 2
// var dealerTotal = sum of random card 1 + random card 2
// function bet is a submit form in html pull value from there. when submited start the game function with dealing to player and dealer
// deal function should assign 4 cards from Deck arrray randomly
// reveal 2 player cards and 1 dealer card in html
// within in game function two button options stand or stay. Hit adds a new random. 
// if hit function adds a randomcard that causes playerTotal > 21 then bust.
// if player clicks stand then turn is over.
// turn over randomcard 2.
// If dealerTotal <playerTotal add random score until dealerTotal > playerTotal. if dealerTotal > 21 then player wins.
// ask to bet again\

// card deck API urls



(function () {
    //api data
    var dealer = {
        deck: '',
        draw: ''
    };

    //game states
    var game = {
        status: '',
        deckId: "up74cn0hdop5",
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

            state.show();
            restart.show();
        });
    }

    function handleData(stateUrl) {
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

        if (game.remaining === 0) {
            game.status = 'WIN';
            result.text(messages.win);
        } else if (dealer.draw.cards[0].value >= game.drawn && game.player === 'higher' || dealer.draw.cards[0].value <= game.drawn && game.player === 'lower') {
            game.status = 'CORRECT';
            result.text(messages.correct);
            drawCard();
        } else {
            game.status = 'LOSE';
            result.text(messages.incorrect);
            remain.hide();
            state.hide();
        }
    }

    function drawCard() {
        state.on('click', function () {
            var guess = $(this).attr('class').split(' ')[0].toLowerCase();

            game.status = 'SELECTED';
            choice.text(messages[guess]);
            game.drawn = dealer.draw.cards[0].value;
            game.player = guess;
            handleData(card);
        });
    }

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

    init();

}());