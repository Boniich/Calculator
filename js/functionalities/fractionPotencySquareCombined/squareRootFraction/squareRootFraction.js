import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const squareRootFraction = (stateCopy,operation,equal) =>{

    console.log("fraction and squareRoot")
    let extractNumbers = /√\(([0-9 | .]+)\).1\/\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let mathExpression = numbers[0];
    let squareRoot = Number.parseFloat(numbers[1]);
    let fraction = Number.parseFloat(numbers[2]);
    
    squareRoot = Math.sqrt(squareRoot);
    fraction = 1/fraction;
    

    console.log(fraction);
    console.log(squareRoot);

    let sum = /(√\([0-9 | .]+\))\+(1\/\(\-?[0-9 | .]+\))/g
    let subtract = /(√\([0-9 | .]+\))\-(1\/\(\-?[0-9 | .]+\))/g
    let multiply = /(√\([0-9 | .]+\))\x(1\/\(\-?[0-9 | .]+\))/g
    let division = /(√\([0-9 | .]+\))\÷(1\/\(\-?[0-9 | .]+\))/g

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,fraction,squareRoot,equal);



}

export default squareRootFraction;