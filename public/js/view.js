$('#switchToLogin').on('click', function () {
    console.log('clicked!');
    document.getElementById('id01').style.display = 'none';
    document.getElementById('id02').style.display = 'block';
})

$('#switchToCreate').on('click', function () {
    document.getElementById('id02').style.display = 'none';
    document.getElementById('id01').style.display = 'block';
})

// $('#createNewPlayer').on('click', function(){
//     $.post("/api/players", player, function())
// })

// $('#login').on('click', function(){

// })
var currentUser = '';
$("#logIn").on("submit",function(event) {
    event.preventDefault();
    var playerName = $("input.username");
    var password = $("input.pword");
    var player = {
        playerName: playerName
            .val()
            .trim(),
        password: password
            .val()
            .trim()
    };
    console.log(player);
    if(player.playerName.length > 0 && player.password.length > 0){
            document.getElementById('id01').style.display = 'none';
    }
    $.post("api/players", player).then(function(x) {
        console.log('x: ', x);
        currentUser = x[0].playerName;
        console.log('current user: ',currentUser);
    })
    $('h5').text("Logged in as: "+ currentUser);
})