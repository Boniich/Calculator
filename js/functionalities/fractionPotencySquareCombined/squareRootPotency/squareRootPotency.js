import execExpression from "../../../helpers/execExpression/execExpression.js";
import testExpression from "../../../helpers/testExpression/testExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const squareRootPotency = (stateCopy,equal) =>{

    console.log("squareRoot and Potency")

    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let squareRoot = Number.parseFloat(numbers[2]);
    let potency = Number.parseFloat(numbers[5]);
    
    squareRoot = Math.sqrt(squareRoot);
    potency = potency*potency;


    if(testExpression(stateCopy,"division")){
        let aux;

        aux = squareRoot;
        squareRoot = potency;
        potency = aux;
    }

    testingOperation(stateCopy,mathExpression,potency,squareRoot,equal);
}

export default squareRootPotency;