

// Inside SETUP function:

// ATTEMPTING TO USE DATA FROM THEIR SOURCE CODE:
// they have height 237, width 501. So their data is an array of 237 * 501 * 2 (because they use commas to separate x,y coords of vectors at each point)

// Clean up and prepare wind velocity data:
// Ok it may have been overly optimistic to assume we could naively interpret this array:
// for (let i=0; i < windData.field.length; i++) {
// 	if (i % 2 === 0) {
// 		wind_x.push(windData.field[i]);
// 	}
// 	else  {
// 		wind_y.push(windData.field[i]);
// 	}
// }
//
// for (let i=0; i < wind_x.length; i++) {
// 	wind_vals.push({
// 		x: wind_x[i],
// 		y: wind_y[i]
// 	});
// }
//
// for (let i=0; i < wind_vals.length; i++) {
// 	wind_vals[i].x_pix = i % source_w;
// 	wind_vals[i].y_pix = Math.floor(i / source_w);
// }

// Now we have wind_vals...each pixel is associated with a vector.
// We need to find where they determine bounds of grid to in relation to US map..
// Also need to figure out whether partitioned by rows or cols.
// console.log(wind_vals);
// Also we just assumed that they were using x/y coordinates to specify direction of wind; could be polar.



// Inside DRAW function:

// if (wind_data) {
// 	wind_data.forEach(pt => {
// 		push();
// 		var x_pix = convertLongToPix(- pt.coord.lon);
// 		var y_pix = convertLatToPix(pt.coord.lat);
// 		// console.log(x_pix, y_pix);
// 		rotate(pt.wind.deg * 2 * PI / 360);
// 		translate(x_pix, y_pix);
// 		line(0, 0, pt.wind.speed * 10, 0);
//
// 		pop();
// 	});
// }

// Great note from source material:
// The random factor here is designed to ensure that
// more particles are placed in slower areas; this makes the
// overall distribution appear more even.

// wind_vals.forEach(v => {
// 	if (v.x > 0 && v.y > 0 && v.x_pix % 5 === 0) {
// 		const x_scale = (w - 150) / source_w;
// 		const y_scale = (h - 50) / source_h;
// 		const x_off = 50;
// 		const y_off = 25;
// 		stroke('blue');
// 		line(x_off + v.x_pix * x_scale, y_off + v.y_pix * y_scale, (v.x_pix + v.x) * x_scale + x_off, (v.y_pix + v.y) * y_scale + y_off);
// 		fill('red');
// 		noStroke();
// 		ellipse((v.x_pix + v.x) * x_scale + x_off, (v.y_pix + v.y) * y_scale + y_off, 2);
// 		// line(v.y_pix, v.x_pix, v.y_pix + v.y, v.x_pix + v.x);
// 	}
// });



// In SERVER:

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
