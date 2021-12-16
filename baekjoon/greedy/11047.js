///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().split('\n');
var one = input[0].toString().split(' ');
var N = parseInt(one[0]);
var K = parseInt(one[1]);

var arr = [];
let count = 0;

for(var i = 1; i<=N; i++){
    var val = parseInt(input[i]);
    if(val < K){
        arr.push(val);
    }
    
};

for (let j = arr.length; j >= 0; j--) {
    if (arr[j] <= K) {
        count += Math.floor(K / arr[j]);
        K = K % arr[j];
    }
}

console.log(count);
