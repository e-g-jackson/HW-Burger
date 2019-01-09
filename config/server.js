var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

// app.use(express.static('public'));
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js')

app.use(routes);

app.listen(PORT, function(){
    console.log('App listening at localhost:' + PORT)
})