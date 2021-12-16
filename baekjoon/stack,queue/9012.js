///dev/stdin
let fs = require('fs');
let input = fs.readFileSync('./example.txt').toString().split('\n');

const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i += 1) {
    const cases = input[i];

    console.log(cases)
    console.log(cases.length-1)
}