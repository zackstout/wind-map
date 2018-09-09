const express = require('express');
const app = express();
const PORT = 8008;
const axios = require('axios');

const dotenv = require('dotenv').config();
const api_key = process.env.API_KEY;

app.get('/data', function(req, res) {
  // We want to range from 120 to 70 lon, and 30 to 50 lat:
  // Let's start with range of 5:
  let promises = [];
  const range = 5;

  for (let i=70; i <=120; i+=range) {
    for (let j=30; j <=50; j+=range) {
      promises.push(axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${j}&lon=-${i}&APPID=${api_key}`));
    }
  }

  Promise.all(promises)
  .then(data => {
    let result = [];
    // console.log(data);
    data.forEach(data => {
      // console.log(data.data);
      // console.log(data.data.coord);
      // console.log(data.data.wind);
      result.push({
        coord: data.data.coord,
        wind: data.data.wind
      });

    });

    res.send(result);

  })
  .catch(err => {
    console.log(err);
    res.sendStatus(501);
  });

  // res.sendStatus(201);
  // axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=45&lon=-93&APPID=${api_key}`)
  //   .then(function(data) {
  //     console.log(data);
  //     res.sendStatus(201);
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //     res.sendStatus(501);
  //   });
});



app.use(express.static('public'));
app.listen(PORT, function() {
  console.log('thx for listening on channel ', PORT);
});
