# Wind map
I thought it would be a fun challenge to try to re-create this gorgeous [animation](http://hint.fm/wind/).

The main challenge so far has been grabbing the data. The [Open Weather API](https://openweathermap.org/api) limits free users to 60 requests per minute, so I used `es6-promise-pool` to slowly grab the necessary data and store it in a database.

Having the data, it should be just a matter of determining where to drop new balls, drawing 'ghost paths', deleting balls that have not moved or have left the screen, and then using wind vector at nearest cell to determine each ball's path. The ideas are quite similar to those behind this simple [fluid dynamics](https://github.com/zackstout/vector-fields-general) project of mine.

## Screenshot
Making some progress -- here is a crude vector field:

![screen shot 2018-09-09 at 6 53 42 pm](https://user-images.githubusercontent.com/29472568/45270312-c71a0a00-b461-11e8-816e-9c191ff51457.png)

It looks better still with finer-grained data:

![screen shot 2018-09-10 at 4 36 59 pm](https://user-images.githubusercontent.com/29472568/45325908-d5c2f880-b517-11e8-9ceb-92557cd0e846.png)

And here's what we're imitating -- we seem to be on the right track:

![screen shot 2018-09-09 at 6 53 57 pm](https://user-images.githubusercontent.com/29472568/45270313-c7b2a080-b461-11e8-8cf2-b1fa09f4c8f8.png)

All right, we have a *very rough* version:

![](https://media.giphy.com/media/1BfhcCCwxNTbNPiGng/giphy.gif)
