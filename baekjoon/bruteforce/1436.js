///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString();

console.log(input);
var movienum = 665;

while (input > 0) {
  movienum++;

  if (movienum.toString().includes('666')) {
    input--;
  }
}

console.log(movienum);