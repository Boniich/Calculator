import testingOperation from "../../../helpers/testingOperations/testingOperations.js";


const potencyFraction = (stateCopy,operation,equal) =>{

    console.log("potency and fraction")
    let extractNumbers = /sqr\((\-?[0-9 | .]+)\).1\/\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let mathExpression = numbers[0];
    let potency = Number.parseFloat(numbers[1]);
    let fraction = Number.parseFloat(numbers[2]);
    

    fraction = 1/fraction;
    potency = potency*potency;

    console.log(fraction);
    console.log(potency);

    testingOperation(stateCopy,mathExpression,fraction,potency,equal);


}

export default potencyFraction;