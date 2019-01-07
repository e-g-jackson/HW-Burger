var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// require('./config/orm')(app);

var routes = require('./controllers/burgers_controller.js')
app.listen(PORT, function(){
    console.log('App listening at localhost:' + PORT)
})