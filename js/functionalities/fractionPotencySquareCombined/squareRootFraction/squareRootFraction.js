import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const squareRootFraction = (stateCopy,operation,equal) =>{

    console.log("squareRoot and fraction")
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

    testingOperation(stateCopy,mathExpression,fraction,squareRoot,equal);



}

export default squareRootFraction;