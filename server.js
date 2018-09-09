
const express = require('express');
const app = express();
const PORT = 8008;
const axios = require('axios');

const PromisePool = require('es6-promise-pool');

const dotenv = require('dotenv').config();
const api_key = process.env.API_KEY;

// Helper function:
var delayValue = function (value, time) {


    // return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=45&lon=-90&APPID=${api_key}`);


  return new Promise(function (resolve, reject) {
    console.log('Resolving ' + value + ' in ' + time + ' ms');
    setTimeout(function () {
      console.log('Resolving: ' + value);
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=45&lon=-90&APPID=${api_key}`)
        .then(function(data) {
          console.log('resolved...', data.data.wind);
          resolve(data);

        });
      // resolve(value);
    }, time);
  });
};





app.get('/data', function(req, res) {

  // Cool! JS Generators:
  const generatePromises = function * () {
    for (let count = 1; count <= 5; count++) {
      // delayValue(count, 1000).then(d => console.log("d for count ", count, " is ", d));
      yield delayValue(count, 1000);
    }
  };

  // So if we want to make like 250 requests, will need to space out over about 5 minutes.
  const promiseIterator = generatePromises();
  const pool = new PromisePool(promiseIterator, 3);

  pool.start()
  .then(() => {
    console.log('Complete');

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
