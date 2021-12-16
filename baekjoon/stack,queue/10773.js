///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().split('\n');
var num = parseInt(input[0]);

var arr = [];
var ansult = 0;

for(var i = 1; i<=num; i++){

    var a = parseInt(input[i]);
    if(a != 0){
        arr.push(a);
    }else{
        arr.pop();
    }
    
};

ansult = arr.reduce((stack, el)=>{
    return stack + el;
}, 0);
console.log(ansult);