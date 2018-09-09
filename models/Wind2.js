
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Wind2Schema = new Schema({
  lat: Number,
  long: Number,
  speed: Number,
  dir: Number
});

module.exports = mongoose.model("Wind2", Wind2Schema);
