import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const numberAndPotency = (stateCopy,equal) =>{

    console.log("Number and Potency");
    
    let numbers = execExpression(stateCopy,"signBetween");
    
    let mathExpression = numbers[0];
    let value1 = Number.parseFloat(numbers[2]);
    let value2 = Number.parseFloat(numbers[5]);

    value2 = value2*value2;

    

    testingOperation(stateCopy,mathExpression,value1,value2,equal);

}

export default numberAndPotency;