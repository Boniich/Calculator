import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const squareRootPotency = (stateCopy,operation,equal) =>{

    console.log("squareRoot and Potency")
    let extractNumbers = /√\(([0-9 | .]+)\).sqr\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let mathExpression = numbers[0];
    let squareRoot = Number.parseFloat(numbers[1]);
    let potency = Number.parseFloat(numbers[2]);
    
    squareRoot = Math.sqrt(squareRoot);
    potency = potency*potency;
    


    console.log(squareRoot);
    console.log(potency);

    let sum = /(√\([0-9 | .]+\))\+(sqr\(\-?[0-9 | .]+\))/g
    let subtract = /(√\([0-9 | .]+\))\-(sqr\(\-?[0-9 | .]+\))/g
    let multiply = /(√\([0-9 | .]+\))\x(sqr\(\-?[0-9 | .]+\))/g
    let division = /(√\([0-9 | .]+\))\÷(sqr\(\-?[0-9 | .]+\))/g

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,potency,squareRoot,equal);



}

export default squareRootPotency;