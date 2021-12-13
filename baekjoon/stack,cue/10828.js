///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().split('\n');
var num = parseInt(input[0]);

var arr = [];

for(var i = 1; i<=num; i++){
    const comand = input[i].split(' ');
    console.log(comand[0])
    if(comand.length == 1){

        if(comand[0] === 'pop'){
            if(arr.length == 0){
                console.log(-1)
            }else{
                console.log(arr.pop())
            }
        }

        if(comand[0] === 'top'){
            if(arr.length == 0){
                console.log(-1)
            }else{
                console.log(arr[arr.length-1])
            }
        }

        if (comand[0] === 'empty') {
            if (stack.length == 0) {
                console.log(1)
            } else {
                console.log(0)
            }
        }

        if (comand[0] === 'size') {
            console.log(stack.length)
        }

    }else{
        
        x = comand[1];
        arr.push(x);
    }

};