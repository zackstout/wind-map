
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
		if (this.x < 0 || this.y < 0 || this.x > w || this.y > h + 100) {
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
		// Ahh ok alpha value has max 255:
		fill(75, 0, 135, 255);
		noStroke();
		ellipse(this.x, this.y, 2.5);
	}

	move() {
		const speed_fact = 0.5;
		this.x += this.speed * speed_fact * cos(PI/2 + this.dir * 2*PI/360);
		this.y += this.speed * speed_fact * sin(PI/2 + this.dir * 2*PI/360);
	}
}
