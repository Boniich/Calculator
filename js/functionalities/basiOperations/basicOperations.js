import execExpression from "../../helpers/execExpression/execExpression.js";
import testingOperation from "../../helpers/testingOperations/testingOperations.js";


const basicOperations = (stateCopy,equal) =>{
    console.log("basic operations")

    let numbers = execExpression(stateCopy,"endsWithSign");

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(stateCopy.result);
    let mathExpression = numbers[0] + value2;

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
}

export default basicOperations;