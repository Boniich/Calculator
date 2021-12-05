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

    testingOperation(stateCopy,mathExpression,fraction,squareRoot,equal);



}

export default fractionSquareRoot;