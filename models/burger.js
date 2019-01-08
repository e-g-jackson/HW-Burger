var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  
  create: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      console.log(res);
      cb(res);
    });
  },
  updateOne: function(id, devoured, cb) {
    orm.updateOne(id, devoured, function(res) {
      cb(res);
      console.log('update inputs:');
      console.log('condition', condition, '\n devoured:', devoured)
    });
  }
};

module.exports = burger;
