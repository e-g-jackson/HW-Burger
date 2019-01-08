var connection = require('./connection.js');

var orm = {
    selectAll: function(cb){
        var qS = "SELECT * FROM burger"
        connection.query(qS, function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
    insertOne: function(newBurger){
        qS = "INSERT INTO burger (burgerName, Devoured) ";
        qs += "VALUE (" + newBurger + ", false);";
        console.log(qS);
        connection.query(qS, newBurger, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(bgName){
        qS = "UPDATE burger ";
        qS += "SET devoured = true ";
        qS += "WHERE burgerName = " + bgName + ";";
        connection.query(qS, bgName, function(){
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;