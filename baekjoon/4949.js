///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split('\n');

const open = ["(","["];
const closed = [")","]"];
let stack;
const yesno = [];

input.slice()

