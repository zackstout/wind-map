
var img, w, h;
var long_dist_ratio, long_dist_pix;
var lat_dist_ratio, lat_dist_pix;
let all_wind_data;

var balls = [];
let count = 0;

// ================================= BALL CLASS =================================
class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dir = 0;
		this.speed = 0;
	}

	find() {
		for (let i=0; i < balls.length; i++) {
			if (balls[i].x === this.x && balls[i].y === this.y) return i;
		}
		return null; // yikes!
	}

	removeOffGrid() {
		if (this.x < 0 || this.y < 0 || this.x > w || this.y > h) {
			const ind = this.find();
			balls.splice(ind, 1);
		}
	}

	// Huh, we lost the code. Anyway, it's prob better to loop through cells and find those with multiple balls living at them.
	removeLazy() {
		// The trouble with this was we lose too many slowly-moving balls if we delete those with prev_x close to their current x
	}

	setVelocity() {
		if (all_wind_data) {
			const nearest = getNearestPoint(this.x, this.y);

			for (let i=0; i < all_wind_data.length; i++) {
				const d = all_wind_data[i];
				if (d.lat == nearest.y && d.long == - nearest.x) {
					this.dir = d.dir;
					this.speed = d.speed;
					break;
				}
			}
		}
	}

	draw() {
		fill('purple');
		noStroke();
		ellipse(this.x, this.y, 2.5);
	}

	move() {
		const speed_fact = 0.5;
		this.x += this.speed * speed_fact * cos(PI/2 + this.dir * 2*PI/360);
		this.y += this.speed * speed_fact * sin(PI/2 + this.dir * 2*PI/360);
	}
}

// ================================= MAIN FUNCTIONS =================================

function setup() {
	w = 800;
	h = 450;
	createCanvas(w, h);
	background(200);

	// Found by experiment:
	long_dist_pix = 720 - 95;
	long_dist_ratio = long_dist_pix / 50; // 50 degrees of longitude
	lat_dist_pix = 365 - 15;
	lat_dist_ratio = lat_dist_pix / 20; // 20 degree difference

	$.get('/data2')
	.then(function(res) {
		console.log(res);
		all_wind_data = res;
	})
	.catch(err => console.log(err));

	img = loadImage('images/us-mercator.png');

	// Generate initial balls at every cell:
	generateBalls();
}


function draw() {
	count++;

	// if (count % 100 === 0) {
	// 	generateBalls();
	// }
	image(img, 0, 0, img.width/2, img.height/2); // forget the purpose of this 1/2 -- scaling down to fit screen?

	stroke('blue');
	strokeWeight(1);

	// Minneapolis test:
	fill('green');
	ellipse(convertLongToPix(93.3), convertLatToPix(45), 10);

	// ============ DRAW VECTORS: ============
	// if (all_wind_data) {
	// 	all_wind_data.forEach(p => {
	// 		const scale_fact = 2.5;
	//
	// 		push();
	// 		translate(convertLongToPix(- p.long), convertLatToPix(p.lat));
	// 		// We add PI/2 because 0 is DUE EAST instead of DUE NORTH:
	// 		rotate(PI/2 + p.dir * 2*PI / 360);
	// 		stroke('green');
	// 		line(0, 0, p.speed * scale_fact, 0);
	// 		noStroke();
	// 		fill('red');
	// 		// Shows which way the vector is pointing:
	// 		ellipse(p.speed * scale_fact, 0, 2);
	// 		pop();
	// 	});
	// }

	// ============ ANIMATE BALLS: ============
	balls.forEach(b => {
		b.removeOffGrid();
		b.setVelocity();
		b.move();
		b.draw();

		// if (count > 10) {
		// 	b.removeLazy();
		// }
	})

	// ============ DISPLAY CITIES: ============
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

function generateBalls() {
	for (let i=70; i < 120; i++) {
		for (let j=30; j < 50; j++) {
			var ball = new Ball(convertLongToPix(i), convertLatToPix(j));
			balls.push(ball);
		}
	}
}

function mouseDragged() {
	const nearest = getNearestPoint(mouseX, mouseY);
	var ball = new Ball(mouseX, mouseY);
	balls.push(ball);
}

function getDist(a, b) {
	return Math.pow(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2), 0.5);
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
