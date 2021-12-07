///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split('\n');
var input2 = input[1].toString().split(' ');
var a = parseInt(input[0]);

var Y = 0;
var M = 0;

for(var i=0; i<a; i++){

    Y += input2[i] % 30 === 0 ? (input2[i] / 30 + 1) * 10 : Math.ceil(input2[i] / 30) * 10;
	M += input2[i] % 60 === 0 ? (input2[i] / 60 + 1) * 15 : Math.ceil(input2[i] / 60) * 15;
}

if(M === Y){
    console.log("Y M " + M);
}else if(M > Y){
    console.log("Y " + Y);
}else{
    console.log("M " + M);
} 
