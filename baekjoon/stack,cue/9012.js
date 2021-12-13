///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split('\n');
var num = input[0];



for(var i = 1; i<=num; i++){

    var pro = input[i];
    var stack = [];
    let result = 'YES';
    
    for(var j = 0; j<pro.length; j++){
        if(pro[j] === '('){
            stack.push(1);
        }else{
            if(!stack.pop()){
                result = 'NO';
                break;
            }
        }
    }

    if(stack.length !== 0){
        result = 'NO';
    }
    

    console.log(result);
};

