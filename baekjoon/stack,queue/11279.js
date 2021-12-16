///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().split('\n');
var num = parseInt(input[0]);

var arr = []

for(var i=1; i<=num; i++){
    var x = parseInt(input[i]);
    if(x !== 0){
        arr.push(x);
    }else{
        arr.push(x);
        console.log(Math.max.apply(null, arr));
        arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
    }
}