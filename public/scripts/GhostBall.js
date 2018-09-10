
class GhostBall {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.life = 1;
	}

	draw() {
		fill(75, 0, 135, 255 * this.life);

		ellipse(this.x, this.y, 2.5);
	}

	find() {
		for (let i=0; i < ghost_balls.length; i++) {
			if (ghost_balls[i].x === this.x && ghost_balls[i].y === this.y) return i;
		}
		return null; // yikes!
	}
}
