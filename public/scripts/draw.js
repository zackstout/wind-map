
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
	generateBalls(1, 0);
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
	// if (all_wind_data) {
	// 	all_wind_data.forEach(p => {
	// 		const scale_fact = 1.5;
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

	// Very crude:
	// balls.push(new Ball(100 + random(600), random(400)));


	if (count % 7 === 0) {
		generateBalls(3, Math.random() * 50);
	}

	if (count % 30 === 0) {
		generateBalls(2, Math.random() * 50 - 100);
	}

	// if (count % 17 === 0) {
	// 	generateBalls(2, 3.2);
	// }

	let temp = [];

	// ============ ANIMATE BALLS: ============
	balls.forEach(b => {
		b.removeOffGrid();
		b.setVelocity();
		b.move();
		b.draw();

		// Prepare to get rid of too-close balls:
		let allow = true;
		temp.forEach(t => {
			if (getDist(t, b) < 1) allow = false;
		});
		if (allow) temp.push(b);

		// Add to ghost path:
		if (count % 2 === 0) {
			const ghost = new GhostBall(b.x, b.y);
			ghost_balls.push(ghost);
		}
	});

	balls = temp;

	// ============ DRAW GHOST PATH: ============
	ghost_balls.forEach(g => {
		g.draw();
		g.life -= 0.1;

		if (g.life < 0.3) {
			const ind = g.find();
			ghost_balls.splice(ind, 1);
		}
	});

	// ============ DISPLAY CITIES: ============
	// cities.forEach(c => {
	// 	ellipse(convertLongToPix(-parseFloat(c.lon)), convertLatToPix(c.lat), 5);
	// });
}
