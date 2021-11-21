import testingOperation from "../../helpers/testingOperations/testingOperations.js";

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

    let sum = /(sqr\(\-?[0-9 | .]+\))\+(√\([0-9 | .]+\))/g
    let subtract = /(sqr\(\-?[0-9 | .]+\))\-(√\([0-9 | .]+\))/g
    let multiply = /(sqr\(\-?[0-9 | .]+\))\x(√\([0-9 | .]+\))/g
    let division = /(sqr\(\-?[0-9 | .]+\))\÷(√\([0-9 | .]+\))/g

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,potency,squareRoot,equal);



}

export default potencySquareRoot;