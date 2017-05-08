$('#switchToLogin').on('click', function(){
    console.log('clicked!');
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='block';
})

$('#switchToCreate').on('click', function(){
    document.getElementById('id02').style.display='none';
    document.getElementById('id01').style.display='block';
})

// $('#createNewPlayer').on('click', function(){
//     $.post("/api/players", player, function())
// })

// $('#login').on('click', function(){

// })

var playername = $("input.username");
var password = $("input.password");

$('#login').on('click', function(){
    event.preventDefault();
   console.log("InsertBurger Executed");
   // if (!newItemInput.val().trim()) {   return; }
   var player = {
     playerName: playerName
       .val()
       .trim(),
     password: password
   };
})
