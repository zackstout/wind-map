
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WindSchema = new Schema({
  lat: Number,
  long: Number,
  speed: Number,
  dir: Number
});

module.exports = mongoose.model("Wind", WindSchema);
