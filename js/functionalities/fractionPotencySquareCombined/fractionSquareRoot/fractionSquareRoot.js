import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const fractionSquareRoot = (stateCopy,equal) =>{

    console.log("fraction and squareRoot")
    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let fraction = Number.parseFloat(numbers[1]);
    let squareRoot = Number.parseFloat(numbers[2]);

    fraction = 1/fraction;
    squareRoot = Math.sqrt(squareRoot);

    testingOperation(stateCopy,mathExpression,fraction,squareRoot,equal);
}

export default fractionSquareRoot;