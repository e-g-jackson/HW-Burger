var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log("hbsObject:")
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    burger.create(['burgerName', 'devoured'], [req.body.name, false], function(result){
        result.json({id: result.insertId});
    });
});

router.put('api/burgers/:burgerName', function(req, res){
    var id = "id = " + req.params.burgerName;
    console.log("The id is: " + id);
    burger.update({devoured: true}, id, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;