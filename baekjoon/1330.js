///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(a>b){
    console.log('>')
}else if(a<b){
    console.log('<')
}else if(a == b){
    console.log('==')
}