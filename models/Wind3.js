
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Wind3Schema = new Schema({
  lat: Number,
  long: Number,
  speed: Number,
  dir: Number
});

module.exports = mongoose.model("Wind3", Wind3Schema);
