///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().split('\n');
var A = input[0].toString().split(' ');
var N = parseInt(A[0]);
var M = parseInt(A[1]);
var B = input[1].toString().split(' ');

var max = 0;

for(var i = 0; i < N - 2; i++){
    for(var j = i + 1; j < N-1; j++){
        for(var k = j + 1; k < N; k++){
            var sum =  parseInt(B[i]) + parseInt(B[j]) + parseInt(B[k]); 
            if(sum > max && sum <= M){
                max = sum;
            }
        }
    }
}

console.log(max);



