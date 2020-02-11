const goblins = new Array(101);
goblins.fill('healthy', 0, 101);
//console.log(goblins, goblins.length);
const healthy = [];
for (let i = 2; i <= 100; i++) {
	for (let j = 0; j <= 100; j++) {
		if (j % i === 0) {
			if (goblins[j] === 'healthy') {
				goblins[j] = 'sick';
			} else if (goblins[j] === 'sick') {
				goblins[j] = 'healthy';
			} else {
				console.log('something has gone horribly wrong');
			}
		}
	}
}
//console.log(goblins)
for (let p = 0; p <= 100; p++) {
	if (goblins[p] === 'healthy') {
		healthy.push(p);
	}
}
console.log(healthy);
