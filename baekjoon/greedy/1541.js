///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./example.txt').toString().split('\n');
var number = input[0].split(/-|\+/);

var giho = [];
var ol = 0;
var nl = 0;

for(var i = 0; i<=input[0].length; i++){
    if(input[0][i] === '-'||input[0][i] === '+'){
        giho.push(input[0][i]);
    }
}


for(var j = 0; j<number.length-1; j++){
    if(giho[j] === '-'){
        if(ol == 0){
            ol = (parseInt(number[j]) - parseInt(number[j+1]));
        }else{
            ol = ol - parseInt(number[j+1]);
        }
        
    }else{
        if(ol == 0){
            ol = (parseInt(number[j]) + parseInt(number[j+1]));
        }else{
            ol = ol + parseInt(number[j+1]);
        }
        
    }
}
//0 1 2
for(var k = number.length-1; k>=1; k--){
    if(giho[k-1] === '-'){
        if(nl == 0){
            nl = (parseInt(number[k]) - parseInt(number[k-1]));
        }else{
            nl = parseInt(number[k-1]) - nl;
        }
        
    }else{
        if(nl == 0){
            nl = (parseInt(number[k]) + parseInt(number[k-1]));
        }else{
            nl = parseInt(number[k-1]) + nl;
        }
        
    }
}

if(nl > ol){
    console.log(ol);
}else{
    console.log(nl);
}




