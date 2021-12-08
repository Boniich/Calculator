import execExpression from "../../../helpers/execExpression/execExpression.js";
import testExpression from "../../../helpers/testExpression/testExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const squareRootFraction = (stateCopy,equal) =>{

    console.log("squareRoot and fraction")

    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let squareRoot = Number.parseFloat(numbers[2]);
    let fraction = Number.parseFloat(numbers[5]);
    
    squareRoot = Math.sqrt(squareRoot);
    fraction = 1/fraction;

    if(testExpression(stateCopy,"division")){
        let aux;

        aux = squareRoot;
        squareRoot = fraction;
        fraction = aux;
    }

    testingOperation(stateCopy,mathExpression,fraction,squareRoot,equal);
}

export default squareRootFraction;