var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split('\n');
var T = parseInt(input[0]);
var cnt = 0;

for(var i = 1; i<=T; i++){
    var a = input[i].toString().split(' ');
    var x = parseInt(a[0]);
    var y = parseInt(a[1]);

    if(Math.sqrt(y-x)%1===0){
        answer = 2 * Math.sqrt(y-x) - 1;
    }else{
        
    }

    console.log(cnt);
};
