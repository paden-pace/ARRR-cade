$('#switchToLogin').on('click', function(){
    console.log('clicked!');
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='block';
})

$('#switchToCreate').on('click', function(){
    document.getElementById('id02').style.display='none';
    document.getElementById('id01').style.display='block';
})
