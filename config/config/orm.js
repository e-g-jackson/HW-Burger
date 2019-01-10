var connection = require('./connection.js');

var orm = {
    selectAll: function(cb){
        var qS = "SELECT * FROM burger;"
        connection.query(qS, function(err, res){
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
    insertOne: function(newBurger){
        qS = "INSERT INTO burger (burgerName, Devoured) ";
        qS += "VALUE (" + newBurger + ", false);";
        console.log('orm.insertOne:');
        console.log('newBurger.val() = ', newBurger)
        console.log(qS);
        connection.query(qS, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(id, devoured){
        qS = "UPDATE burger ";
        qS += "SET devoured = " + devoured + " ";
        qS += "WHERE id = " + id + ";";
        console.log(qS);
        connection.query(qS, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;
