var connection = require('./connection.js');

var orm = {
    selectAll: function(){
        var qS = "SELECT * FROM burgers"
        connection.query(qS, function(err, res){
            if(err) throw err;
            console.log(res);
        });
    },
    insertOne: function(newBurger){
        qS = "INSERT INTO burgers (burgerName, Devoured) ";
        qs += "VALUE (??, false);";
        console.log(qS);
        connection.query(qS, newBurger, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(bgName){
        qS = "UPDATE burgers";
        qS += "SET devoured = true";
        qS += "WHERE burgerName = ??;";
        connection.query(qS, bgName, function(){
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;