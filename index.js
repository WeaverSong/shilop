const fs = require ('fs');
const preCompile = require('./preCompile');

let inputs = process.argv;
inputs.splice(0, 2);

const file = fs.readFileSync(`./${inputs[0]}`, "utf-8");
let pStack = preCompile(file);



const execute = function (pStack) {
    let stack = [];

    pStack.forEach(ele => {
        switch(ele) {
            case "print":
                console.log(stack.pop());
            break;
            case "+":
                stack.push(parseFloat(stack.pop()) + parseFloat(stack.pop()));
            break;
            case "-":
                stack.push(parseFloat(stack.pop()) - parseFloat(stack.pop()));
            break;
            case "*":
                stack.push(parseFloat(stack.pop()) * parseFloat(stack.pop()));
            break;
            case "/":
                stack.push(parseFloat(stack.pop()) / parseFloat(stack.pop()));
            break;
            case "dupe":
            case "duplicate":
                stack.push(stack[stack.length - 1]);
            break;
            case "pop":
                stack.pop();
            break;
            default:
                stack.push(ele);
            break;
        };
    });

};

execute (pStack);