//배수와 약수

var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().trim().split('\n');
var num = input.length;

for(var i = 0; i<num-1; i++){
    var aws = input[i].toString().split(' ');
    
    if(parseInt(aws[0]) < parseInt(aws[1])){
        if(parseInt(aws[1])%parseInt(aws[0]) === 0){
            var ans = "factor"
        }else{
            var ans = "neither"
        }
    }else{
        if(parseInt(aws[0])%parseInt(aws[1]) === 0){
            var ans = "multiple"
        }else{
            var ans = "neither"
        }
    }

    console.log(ans);
}