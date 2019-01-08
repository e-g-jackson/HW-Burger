
//Add New Burger
$(document).on('click', '#addBurger', function(){
    var newBurg = $('#newBurger').val().trim();
    console.log('newBurg = ' + newBurg);
    var newBurger = {
        burgerName: newBurg
    }
    $.ajax('/api/burgers', {
        type: "POST",
        data: newBurger
    })
    reloader();
})

//Devour Burger
$(document).on('click', '.devBtn', function(){
    var id = this.id;
    console.log('Burger ID = ' + id);
    var apiLocation  = '/api/burgers/' + id;
    $.ajax(apiLocation, {
        type: "PUT",
        data: "false"
    }).then(function(){
        console.log('Burger Devoured!')
    })
    console.log
    // reloader();
})

//Reload Page
function reloader(){
    window.location.reload(true);
}