# Wind map
I thought it would be a fun challenge to try to emulate this gorgeous [animation](http://hint.fm/wind/).

The main challenge so far has been grabbing the data. The [Open Weather API](https://openweathermap.org/api) limits free users to 60 requests per minute, so I used `es6-promise-pool` to slowly grab the necessary data and store it in a database.

## Screenshot
Making some progress -- here is a crude vector field:

![screen shot 2018-09-09 at 6 53 42 pm](https://user-images.githubusercontent.com/29472568/45270312-c71a0a00-b461-11e8-816e-9c191ff51457.png)

And here's what we're imitating -- we seem to be on the right track:

![screen shot 2018-09-09 at 6 53 57 pm](https://user-images.githubusercontent.com/29472568/45270313-c7b2a080-b461-11e8-8cf2-b1fa09f4c8f8.png)
