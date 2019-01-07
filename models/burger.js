var orm = require("../config/orm.js");

var burger = {
  all: function(brg) {
    orm.selectAll("burger", function(res) {
      brg(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, brg) {
    orm.insertOne("burger", cols, vals, function(res) {
      brg(res);
    });
  },
  updateOne: function(objColVals, condition, brg) {
    orm.update("burger", objColVals, condition, function(res) {
      brg(res);
    });
  }
};

module.exports = burger;
