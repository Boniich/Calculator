import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const numberAndSquareRoot = (stateCopy,equal) =>{

    console.log("Number and squareRoot");

    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);

    value2 = Math.sqrt(value2);

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
}

export default numberAndSquareRoot;