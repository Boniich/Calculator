import testExpression from "../../../helpers/testExpression/testExpression.js";
import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const squareRootPotency = (stateCopy,operation,equal) =>{

    console.log("squareRoot and Potency")
    let extractNumbers = /√\(([0-9 | .]+)\).sqr\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let mathExpression = numbers[0];
    let squareRoot = Number.parseFloat(numbers[1]);
    let potency = Number.parseFloat(numbers[2]);
    
    squareRoot = Math.sqrt(squareRoot);
    potency = potency*potency;
    


    console.log(squareRoot);
    console.log(potency);


    if(testExpression(stateCopy,"division")){
        let aux;

        aux = squareRoot;
        squareRoot = potency;
        potency = aux;
    }

    testingOperation(stateCopy,mathExpression,potency,squareRoot,equal);
}

export default squareRootPotency;