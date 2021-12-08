import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const twoFractions = (stateCopy,equal) =>{

    console.log("Two Fractions");

    let numbers = execExpression(stateCopy,"signBetween");
    
    let value1 = Number.parseFloat(numbers[2]);
    let value2 = Number.parseFloat(numbers[5]);

    value1 = 1/value1;
    value2 = 1/value2;

    let mathExpression = numbers[0];

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
}

export default twoFractions;
