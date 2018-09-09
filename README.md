# Wind map
I thought it would be a fun challenge to try to emulate this gorgeous [animation](http://hint.fm/wind/).

The main challenge so far has been grabbing the data. The [Open Weather API](https://openweathermap.org/api) limits free users to 60 requests per minute, so I used `es6-promise-pool` to slowly grab the necessary data and store it in a database.

## Screenshot
Making some progress -- here is a crude vector field:

![screen shot 2018-09-09 at 5 16 36 pm](https://user-images.githubusercontent.com/29472568/45269464-8667c400-b454-11e8-821f-ab39df3c11fa.png)
