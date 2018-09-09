
const express = require('express');
const app = express();
const PORT = 8008;
const axios = require('axios');

const PromisePool = require('es6-promise-pool');

const dotenv = require('dotenv').config();
const api_key = process.env.API_KEY;

var mongoose = require('mongoose');
var databaseUrl = '';
var db = require('./models');

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




// Will probably have to save these in a DB instead of waiting to send back a response:
// let all_wind_data = [];

// Helper function:
var delayValue = function (value, time) {

  return new Promise(function (resolve, reject) {
    // console.log('Resolving ' + value + ' in ' + time + ' ms');
    setTimeout(function () {
      const long = 70 + Math.floor(value / 20) * 2;
      const lat = 30 + value % 20;
      console.log('Resolving: ' + value, long, lat);

      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=-${long}&APPID=${api_key}`)
      .then(function(data) {
        // all_wind_data.push({coord: data.data.coord, wind: data.data.wind});

        // Seems to be creating too many: should probably check whether exists before creating.
        // Strange -- we got exactly 3 times more than expected!
        db.Wind.create({
          lat: data.data.coord.lat,
          long: data.data.coord.lon,
          speed: data.data.wind.speed,
          dir: data.data.wind.deg
        })
        .then(data => console.log(data))
        .catch(err => console.log(err.message));

        console.log('resolved...', data.data.wind);
        resolve(data);
      });
      // resolve(value);
    }, time);
  });
};



app.get('/data2', function(req, res) {
  db.Wind.find({})
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(501);
    });
});


app.get('/data', function(req, res) {

  // Cool! JS Generators:
  const generatePromises = function * () {
    for (let count = 1; count <= 260; count++) {
      // delayValue(count, 1000).then(d => console.log("d for count ", count, " is ", d));
      yield delayValue(count, 15000);
    }
  };

  // So if we want to make like 250 requests, will need to space out over about 5 minutes.
  const promiseIterator = generatePromises();
  const pool = new PromisePool(promiseIterator, 5);

  pool.start()
  .then(() => {
    console.log('Complete');
    // res.send(all_wind_data);

    // axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=45&lon=-90&APPID=${api_key}`)
    // .then(function(result) {
    //   console.log("RESULT IS...", result);
    //   res.send(result);
    //
    // })
    // .catch(function(err) {
    //   console.log(err);
    //   res.sendStatus(500);
    // });

  });

  res.sendStatus(200);




  // We want to range from 120 to 70 lon, and 30 to 50 lat:
  // Let's start with range of 5:
  // let promises = [];
  // const range = 5;
  //
  // for (let i=70; i <=120; i+=range) {
  //   for (let j=30; j <=50; j+=range) {
  //     promises.push(axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${j}&lon=-${i}&APPID=${api_key}`));
  //   }
  // }
  //
  // Promise.all(promises)
  // .then(data => {
  //   let result = [];
  //   // console.log(data);
  //   data.forEach(data => {
  //     // console.log(data.data);
  //     // console.log(data.data.coord);
  //     // console.log(data.data.wind);
  //     result.push({
  //       coord: data.data.coord,
  //       wind: data.data.wind
  //     });
  //
  //   });
  //
  //   res.send(result);
  //
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.sendStatus(501);
  // });

});



app.use(express.static('public'));
app.listen(PORT, function() {
  console.log('thx for listening on channel ', PORT);
});
