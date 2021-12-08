import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const fractionPotency = (stateCopy,equal) =>{

    console.log("fraction and potency")
    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let fraction = Number.parseFloat(numbers[2]);
    let potency = Number.parseFloat(numbers[5]);

    fraction = 1/fraction;
    potency = potency*potency;

    testingOperation(stateCopy,mathExpression,fraction,potency,equal);
}

export default fractionPotency;