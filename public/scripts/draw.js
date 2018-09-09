
var img, w, h;
var long_dist_ratio, long_dist_pix;
var lat_dist_ratio, lat_dist_pix;

let wind_data;

// let wind_x = [];
// let wind_y = [];
// let wind_vals = [];

// console.log(windData);
// they have height 237, width 501. So their data is an array of 237 * 501 * 2 (because they use commas to separate x,y coords of vectors at each point)

// const source_h = 237;
// const source_w = 501;

function setup() {
	w = 800;
	h = 450;
	createCanvas(w, h);
	background(200);

	$.get('/data')
	.then(function(res) {
		console.log(res);
		wind_data = res;

	})
	.catch(err => console.log(err));

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

	img = loadImage('us-mercator.png');
}


// Great note from source material:
// The random factor here is designed to ensure that
	// more particles are placed in slower areas; this makes the
	// overall distribution appear more even.

function draw() {
	image(img, 0, 0, img.width/2, img.height/2);

	stroke('blue');
	strokeWeight(1);

	// LONGITUDE:
	line(95, 0, 95, h);
	line(720, 0, 720, h);
	long_dist_pix = 720 - 95; // found by experiment
	long_dist_ratio = long_dist_pix / 50; // 50 degrees of longitude

	// LATITUDE:
	line(0, 15, w, 15);
	line(0, 365, w, 365);
	lat_dist_pix = 365 - 15;
	lat_dist_ratio = lat_dist_pix / 20; // 20 degree difference

	// Minneapolis test:
	// fill('green');
	// ellipse(convertLongToPix(93.3), convertLatToPix(45), 10);

	if (wind_data) {
		wind_data.forEach(pt => {
			push();
			var x_pix = convertLongToPix(- pt.coord.lon);
			var y_pix = convertLatToPix(pt.coord.lat);
			// console.log(x_pix, y_pix);
			rotate(pt.wind.deg * 2 * PI / 360);
			translate(x_pix, y_pix);
			line(0, 0, pt.wind.speed * 10, 0);

			pop();
		});
	}



	// cities.forEach(c => {
	// 	ellipse(convertLongToPix(-parseFloat(c.lon)), convertLatToPix(c.lat), 5);
	// });

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
}


function convertLongToPix(x) {
	// using 120 degrees (at 95px) as base:
	return 95 + (120 - x) * long_dist_ratio;
}

function convertLatToPix(x) {
	// using 50 degrees (at 15px) as base:
	return 15 + (50 - x) * lat_dist_ratio;
}
