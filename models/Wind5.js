
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Wind5Schema = new Schema({
  lat: Number,
  long: Number,
  speed: Number,
  dir: Number,
  gust: Number,
});

module.exports = mongoose.model("Wind5", Wind5Schema);
