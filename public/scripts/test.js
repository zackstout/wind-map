
let result = [];

for (let i=0; i < 4000; i++) {
  const long = 70 + 0.5 * Math.floor(i / 40); // We had a *2 here. Was source of duplicate data problem. Now we're going cell by cell.
  const lat = 30 + 0.5 * (i % 40);
  result.push({x: long, y: lat});
}

console.log("result...", result);
