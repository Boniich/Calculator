import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const numberAndFraction = (stateCopy,equal) =>{

    console.log("Number and fraction");

    let numbers = execExpression(stateCopy,"signBetween");

    let value1 = Number.parseFloat(numbers[2]);
    let value2 = Number.parseFloat(numbers[5]);

    let mathExpression = numbers[0];

    value2 = 1/value2;

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
}

export default numberAndFraction;