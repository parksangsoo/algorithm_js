///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString();
var a = parseInt(input);

//1         4 5        7 12        10 22         13 35

var ans = 1;
var num2 = 4;

for(i = 0; i<a; i++){

    var ans = ans + num2;
    num2 = num2+3;
};

console.log(ans % 45678);