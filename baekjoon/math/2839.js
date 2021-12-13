var fs = require('fs');
var input = fs.readFileSync('example.txt').toString();
var A = parseInt(input);

let count = 0;

while (true) {
  if (A % 5 === 0) {
    console.log(A / 5 + count);
    break;
  }
    
  if (0 > A) {
    console.log(-1);
    break;
  }

  count++;
  A -= 3;
}