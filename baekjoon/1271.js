///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

var ans = a/b + '\n';

ans += a%b
console.log(ans);
