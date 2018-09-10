
var img, w, h;
var long_dist_ratio, long_dist_pix;
var lat_dist_ratio, lat_dist_pix;
let all_wind_data;

var balls = [];

// ================================= BALL CLASS =================================

class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dir = 0;
		this.speed = 0;
	}

	setVelocity() {
		const nearest = getNearestPoint(this.x, this.y);
		// console.log(nearest);

		for (let i=0; i < all_wind_data.length; i++) {
			const d = all_wind_data[i];
			if (d.lat == nearest.y && d.long == - nearest.x) {
				// console.log('ahoy');
				this.dir = d.dir;
				this.speed = d.speed;
				break;
			}
		}
	}

	draw() {
		fill('purple');
		noStroke();
		ellipse(this.x, this.y, 6);
	}

	move() {
		const speed_fact = 0.5;
		// console.log(this.deg, this.speed);
		this.x += this.speed * speed_fact * cos(PI/2 + this.dir * 2*PI/360);
		this.y += this.speed * speed_fact * sin(PI/2 + this.dir * 2*PI/360);
		// console.log(this.x, this.y);
	}
}


// ================================= MAIN FUNCTIONS =================================

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

			push();
			translate(convertLongToPix(- p.long), convertLatToPix(p.lat));
			// We add PI/2 because 0 is DUE EAST instead of DUE NORTH:
			rotate(PI/2 + p.dir * 2*PI / 360);
			stroke('green');
			line(0, 0, p.speed * scale_fact, 0);
			noStroke();
			fill('red');
			// Shows which way the vector is pointing:
			ellipse(p.speed * scale_fact, 0, 2);
			pop();
		});
	}

	balls.forEach(b => {
		b.setVelocity();
		b.move();
		b.draw();
	})

	// DISPLAY CITIES:
	// cities.forEach(c => {
	// 	ellipse(convertLongToPix(-parseFloat(c.lon)), convertLatToPix(c.lat), 5);
	// });

}

// ================================= HELPER FUNCTIONS =================================

// Get nearest point to a certain location (e.g. mouse clicked point):
function getNearestPoint(x, y) {
	const near_x = convertPixToLong(x);
	const near_y = convertPixToLat(y);

	const nearest_x = (near_x - parseInt(near_x)) > 0.5 ? parseInt(near_x) + 1 : parseInt(near_x);
	const nearest_y = (near_y - parseInt(near_y)) > 0.5 ? parseInt(near_y) + 1 : parseInt(near_y);
	return {
		x: nearest_x,
		y: nearest_y
	};
}

function mouseDragged() {
	// let near_points = [];
	const nearest = getNearestPoint(mouseX, mouseY);
	var ball = new Ball(mouseX, mouseY);
	balls.push(ball);

	console.log(nearest);
}

// For converting coordinates to pixels:
function convertLongToPix(x) {
	// using 120 degrees (at 95px) as base:
	return 95 + (120 - x) * long_dist_ratio;
}

function convertLatToPix(x) {
	// using 50 degrees (at 15px) as base:
	return 15 + (50 - x) * lat_dist_ratio;
}

// For converting pixels to coordinates:
function convertPixToLong(x) {
	return 120 - (x - 95) / long_dist_ratio;
}

function convertPixToLat(x) {
	return 50 - (x - 15) / lat_dist_ratio;
}
