import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const fractionSquareRoot = (stateCopy,operation,equal) =>{

    console.log("fraction and squareRoot")
    let extractNumbers = /1\/\((\-?[0-9 | .]+)\).√\(([0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let mathExpression = numbers[0];
    let fraction = Number.parseFloat(numbers[1]);
    let squareRoot = Number.parseFloat(numbers[2]);

    fraction = 1/fraction;
    squareRoot = Math.sqrt(squareRoot);

    console.log(fraction);
    console.log(squareRoot);

    let sum = /(1\/\(\-?[0-9 | .]+\))\+(√\([0-9 | .]+\))/g
    let subtract = /(1\/\(\-?[0-9 | .]+\))\-(√\([0-9 | .]+\))/g
    let multiply = /(1\/\(\-?[0-9 | .]+\))\x(√\([0-9 | .]+\))/g
    let division = /(1\/\(\-?[0-9 | .]+\))\÷(√\([0-9 | .]+\))/g

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,fraction,squareRoot,equal);



}

export default fractionSquareRoot;