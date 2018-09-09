
const mongoose = require('mongoose');
let databaseUrl = '';

if (process.env.MONGODB_URI) {
  databaseUrl = process.env.MONGODB_URI;
} else {
  databaseUrl = 'mongodb://localhost:27017/wind';
}

mongoose.connection.on('connected', function() {
  console.log('we in!');
});

mongoose.connection.on('error', function() {
  console.log("aw nuts bro");
});

//initiate connection:
mongoose.connect(databaseUrl);
