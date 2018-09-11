
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

function generateBalls(range, offset) {
	for (let i=70; i < 120; i += range) {
		for (let j=30; j < 50; j+= range) {
			var ball = new Ball(convertLongToPix(i) + offset, convertLatToPix(j) + offset);
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
