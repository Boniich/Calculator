import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const potencySquareRoot = (stateCopy,operation,equal) =>{

    console.log("Potency and squareRoot")
    let extractNumbers = /sqr\((\-?[0-9 | .]+)\).√\(([0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let mathExpression = numbers[0];
    let potency = Number.parseFloat(numbers[1]);
    let squareRoot = Number.parseFloat(numbers[2]);
    
    potency = potency*potency;
    squareRoot = Math.sqrt(squareRoot);
    
    console.log(squareRoot);
    console.log(potency);

    testingOperation(stateCopy,mathExpression,potency,squareRoot,equal);



}

export default potencySquareRoot;