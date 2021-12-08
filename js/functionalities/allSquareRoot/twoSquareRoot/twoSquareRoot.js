import execExpression from "../../../helpers/execExpression/execExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const twoSquareRoot = (stateCopy,equal) =>{

    console.log("Two squareRoot")

    let numbers = execExpression(stateCopy,"signBetween");

    let mathExpression = numbers[0];
    let value1 = Number.parseFloat(numbers[2]);
    let value2 = Number.parseFloat(numbers[5]);

    value1 = Math.sqrt(value1);
    value2 = Math.sqrt(value2);

    testingOperation(stateCopy,mathExpression,value1,value2,equal);

}

export default twoSquareRoot;