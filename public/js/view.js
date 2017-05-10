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

$("#createNewPlayer").on("click",function() {
    console.log('clicked');
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
    console.log(player)
    $.post("api/players",player).then(function(x) {
        console.log(x)
    })
})