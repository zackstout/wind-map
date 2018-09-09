
var img, w, h;
var long_dist_ratio, long_dist_pix;
var lat_dist_ratio, lat_dist_pix;
let all_wind_data;
// Will contain e.g. {lat: 40, long: -90} -- to handle duplicates:
let already_drawn = [];


function setup() {
	w = 800;
	h = 450;
	createCanvas(w, h);
	background(200);

	$.get('/data2')
	.then(function(res) {
		console.log(res);
		all_wind_data = res;

	})
	.catch(err => console.log(err));

	img = loadImage('images/us-mercator.png');
}


function draw() {
	image(img, 0, 0, img.width/2, img.height/2); // forget the purpose of this 1/2 -- scaling down to fit screen?

	stroke('blue');
	strokeWeight(1);

	// LONGITUDE:
	// line(95, 0, 95, h);
	// line(720, 0, 720, h);
	long_dist_pix = 720 - 95; // found by experiment
	long_dist_ratio = long_dist_pix / 50; // 50 degrees of longitude

	// LATITUDE:
	// line(0, 15, w, 15);
	// line(0, 365, w, 365);
	lat_dist_pix = 365 - 15;
	lat_dist_ratio = lat_dist_pix / 20; // 20 degree difference

	// Minneapolis test:
	// fill('green');
	// ellipse(convertLongToPix(93.3), convertLatToPix(45), 10);

	if (all_wind_data) {
		all_wind_data.forEach(p => {
			const scale_fact = 2.5;
			// Ignoring duplicates:
			if (!arrIncludesPoint(already_drawn, p)) {
				// console.log(p);
				// ellipse(convertLongToPix(- p.long), convertLatToPix(p.lat), 5);
				push();
				translate(convertLongToPix(- p.long), convertLatToPix(p.lat));
				// We add PI/2 because 0 is DUE EAST instead of DUE NORTH:
				rotate(PI/2 + p.dir * 2*PI / 360);
				stroke('green');
				line(0, 0, p.speed * scale_fact, 0);
				noStroke();
				fill('red');
				// Shows which way vector is pointing:
				ellipse(p.speed * scale_fact, 0, 2);
				pop();
			}
		});
	}

	// DISPLAY CITIES:
	// cities.forEach(c => {
	// 	ellipse(convertLongToPix(-parseFloat(c.lon)), convertLatToPix(c.lat), 5);
	// });

}

function arrIncludesPoint(arr, p) {
	for (let i=0; i < arr.length; i++) {
		if (arr[i].lat == p.lat && arr[i].long == p.long) return true;
	}
	return false;
}

function convertLongToPix(x) {
	// using 120 degrees (at 95px) as base:
	return 95 + (120 - x) * long_dist_ratio;
}

function convertLatToPix(x) {
	// using 50 degrees (at 15px) as base:
	return 15 + (50 - x) * lat_dist_ratio;
}
