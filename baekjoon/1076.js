///dev/stdin
var fs = require('fs');
var input = fs.readFileSync('example.txt').toString().split("\n");
var a = input[0];
var b = input[1];
var c = input[2];

if(a === "black"){
    var num1 = "0"
}else if(a === "brown"){
    var num1 = "1"
}else if(a === "red"){
    var num1 = "2"
}else if(a === "orange"){
    var num1 = "3"
}else if(a === "yellow"){
    var num1 = "4"
}else if(a === "green"){
    var num1 = "5"
}else if(a === "blue"){
    var num1 = "6"
}else if(a === "violet"){
    var num1 = "7"
}else if(a === "grey"){
    var num1 = "8"
}else if(a === "white"){
    var num1 = "9" 
}

if(b === "black"){
    var num2 = "0"
}else if(b === "brown"){
    var num2 = "1"
}else if(b === "red"){
    var num2 = "2"
}else if(b === "orange"){
    var num2 = "3"
}else if(b === "yellow"){
    var num2 = "4"
}else if(b === "green"){
    var num2 = "5"
}else if(b === "blue"){
    var num2 = "6"
}else if(b === "violet"){
    var num2 = "7"
}else if(b === "grey"){
    var num2 = "8"
}else if(b === "white"){
    var num2 = "9"
}

if(c === "black"){
    console.log(num1+num2)
}else if(c === "brown"){
    console.log(num1+num2)
}else if(c === "red"){
    console.log(num1+num2)
}else if(c === "orange"){
    console.log(num1+num2)
}else if(c === "yellow"){
    console.log(num1+num2)
}else if(c === "green"){
    console.log(num1+num2)
}else if(c === "blue"){
    console.log(num1+num2)
}else if(c === "violet"){
    console.log(num1+num2)
}else if(c === "grey"){
    console.log(num1+num2)
}else if(c === "white"){
    console.log(num1+num2)
}