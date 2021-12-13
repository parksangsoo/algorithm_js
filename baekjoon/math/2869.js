///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split(' ');
var A = parseInt(input[0]);
var B = parseInt(input[1]);
var V = parseInt(input[2]);

console.log(Math.ceil((V - B) / (A - B)));