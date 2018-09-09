
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Wind4Schema = new Schema({
  lat: Number,
  long: Number,
  speed: Number,
  dir: Number
});

module.exports = mongoose.model("Wind4", Wind4Schema);
