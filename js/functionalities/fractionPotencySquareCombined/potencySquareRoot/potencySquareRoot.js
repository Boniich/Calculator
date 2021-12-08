import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const potencySquareRoot = (stateCopy,equal) =>{

    console.log("Potency and squareRoot")

    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let potency = Number.parseFloat(numbers[2]);
    let squareRoot = Number.parseFloat(numbers[5]);
    
    potency = potency*potency;
    squareRoot = Math.sqrt(squareRoot);
    
    testingOperation(stateCopy,mathExpression,potency,squareRoot,equal);
}

export default potencySquareRoot;