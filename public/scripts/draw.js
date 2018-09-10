
var img, w, h;
var long_dist_ratio, long_dist_pix;
var lat_dist_ratio, lat_dist_pix;
let all_wind_data;

var balls = [];
let ghost_balls = [];
let count = 0;

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
	// generateBalls();
}


function draw() {
	count++;

	image(img, 0, 0, img.width/2, img.height/2); // forget the purpose of this 1/2 -- scaling down to fit screen?

	stroke('blue');
	strokeWeight(1);

	// Minneapolis test:
	fill('green');
	ellipse(convertLongToPix(93.3), convertLatToPix(45), 10);

	// ============ DRAW VECTORS: ============
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


	// Very crude:
	balls.push(new Ball(100 + random(600), random(400)));

	// ============ ANIMATE BALLS: ============
	balls.forEach(b => {
		b.removeOffGrid();
		b.setVelocity();
		b.move();
		b.draw();

		// Add to ghost path:
		if (count % 10 === 0) {
			var ghost = new GhostBall(b.x, b.y);
			ghost_balls.push(ghost);
		}
	});

	// ============ DRAW GHOST PATH: ============
	ghost_balls.forEach(g => {
		g.draw();
		g.life -= 0.02;

		if (g.life < 0) {
			const ind = g.find();
			ghost_balls.splice(ind, 1);
		}
	});

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

function getDist(a, b) {
	return Math.pow(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2), 0.5);
}

// Testing ball-generation and motion:
function mouseDragged() {
	const nearest = getNearestPoint(mouseX, mouseY);
	var ball = new Ball(mouseX, mouseY);
	balls.push(ball);
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
