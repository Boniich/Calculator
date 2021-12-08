import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const squareRootAndNumber = (flag,stateCopy,equal) =>{

    console.log("SquareRoot and Number");

    let numbers = execExpression(stateCopy,"signBetween");
    
    let value1 = Number.parseFloat(numbers[2]);
    let value2 = Number.parseFloat(stateCopy.result);

    let mathExpression = numbers[0] + value1;

    value1 = Math.sqrt(value1);

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
    flag.overWrite = true;

}

export default squareRootAndNumber;