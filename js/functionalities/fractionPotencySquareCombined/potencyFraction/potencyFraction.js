import execExpression from "../../../helpers/execExpression/execExpression.js";
import testExpression from "../../../helpers/testExpression/testExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const potencyFraction = (stateCopy,equal) =>{

    console.log("potency and fraction")
    let numbers = execExpression(stateCopy,"signBetween");
    let mathExpression = numbers[0];
    let potency = Number.parseFloat(numbers[2]);
    let fraction = Number.parseFloat(numbers[5]);
    

    fraction = 1/fraction;
    potency = potency*potency;

    if(testExpression(stateCopy,"division")){
        let aux;

        aux = fraction;
        fraction = potency;
        potency = aux;
    }


    testingOperation(stateCopy,mathExpression,fraction,potency,equal);


}

export default potencyFraction;