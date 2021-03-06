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
    burger.create('"' + req.body.burgerName + '"', function(result){
        result.json({id: result.insertId});
        console.log('burger_controller--router.post: ', req.body.name )
    });
});

router.put('/api/burgers/:id', function(req, res){
    //not running
    var id = req.params.id;
    var condition = "id = " + req.params.id;
    console.log("The condition is:" + condition);
    burger.updateOne(id, true, function(result){
        if (result.changedRows === 0){
            return res.status(404).send('Couldn\'nt find that one...').end();
        }
        res.status(200).end();
    });
});

module.exports = router;