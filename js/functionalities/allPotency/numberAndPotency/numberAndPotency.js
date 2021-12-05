import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const numberAndPotency = (stateCopy,operation,equal) =>{

    console.log("Number and Potency");

    let extractNumbers = /(\-?[0-9 | .]+).sqr\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);

    value2 = value2*value2;

    let mathExpression = numbers[0];

    testingOperation(stateCopy,mathExpression,value1,value2,equal);

}

export default numberAndPotency;