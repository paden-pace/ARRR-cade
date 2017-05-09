$('#switchToLogin').on('click', function () {
    console.log('clicked!');
    document.getElementById('id01').style.display = 'none';
    document.getElementById('id02').style.display = 'block';
})

$('#switchToCreate').on('click', function () {
    document.getElementById('id02').style.display = 'none';
    document.getElementById('id01').style.display = 'block';
})

<<<<<<< HEAD
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
=======
$('createLogIn').on('submit', createPlayerLogin);

function createPlayerLogin() {
    console.log('form submitted!');
    event.preventDefault();
    // Don't do anything if the fields haven't been filled out
    if (!uname.val().trim().trim() || psw.val().trim().trim()) {
        console.log('fieldsbeempty!');
        return;
    }

    var newPlayer = {

    }
}
>>>>>>> ZBranch
