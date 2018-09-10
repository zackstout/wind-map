
const express = require('express');
const app = express();
const PORT = 8080;
const axios = require('axios');
const PromisePool = require('es6-promise-pool');
const dotenv = require('dotenv').config();
const api_key = process.env.API_KEY;
const mongoose = require('mongoose');
const connection = require('./modules/connection');
const db = require('./models');


// Helper function for (slooooowly) pinging Open Weather API:
var delayValue = function (value, time) {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      // Adding * 0.5 and changing 20 to 40 as we move from 1000 to 4000:
      const long = 70 + 0.5 * Math.floor(value / 40); // We had a *2 here. Was source of duplicate data problem. Now we're going cell by cell.
      const lat = 30 + 0.5 * (value % 40);
      console.log('Resolving: ' + value, long, lat);

      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=-${long}&APPID=${api_key}`)
      .then(function(data) {

        const gust = data.data.wind.gust ? data.data.wind.gust : 0;

        // The golden ticket! Wind4:

        // Wind2 has 2000, so about halfway there.
        db.Wind2.create({
          lat: data.data.coord.lat,
          long: data.data.coord.lon,
          speed: data.data.wind.speed,
          dir: data.data.wind.deg,
          gust: gust,
        })
        .then(data => {
          // console.log(data);
        })
        .catch(err => console.log(err.message));

        console.log('resolved...', data.data.wind);
        resolve(data);
      }).catch(err => {
        console.log(err);
        reject();
      });

    }, time);

  });
};


// Grab data from database to draw to the map:
app.get('/data2', function(req, res) {
  db.Wind2.find({})
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(501);
    });
});


// Initiate process of grabbing data from Open Weather API:
// NOTE: Will take 10 - 20 minutes:
app.get('/data', function(req, res) {
  // Cool! JS generators:
  const generatePromises = function * () {
    // We'll want to go up to 1000 to get it all: it's a 20 x 50 grid.
    // We can probably go a bit faster too. (Was at 15000, pushing down to 8000)

    // changing from 1k to 4k:
    // We can just change the starting value if data stops coming..
    for (let count = 3375; count <= 4000; count++) {
      yield delayValue(count, 8000); // Every 8 seconds, add 5 more to pool. So we should not exceed 60/minute.
    }
  };

  // So if we want to make like 250 requests, will need to space out over about 5 minutes.
  const promiseIterator = generatePromises();
  const pool = new PromisePool(promiseIterator, 5);

  pool.start()
  .then(() => {
    console.log('Complete');
  });

  res.sendStatus(200);
});


app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('thx for listening on channel ', PORT);
});
