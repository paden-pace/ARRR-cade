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
// ask to bet again


// card constructor
function Card(value, name, suit) {
	this.value = value;
	this.name = name;
	this.suit = suit;
	// print card
	 }

// deck constructor
function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	this.printCards = function() {
    console.log("Name: " + this.name)
};

	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s]) )
        }
  
    }
    return cards;

   

 }
 













