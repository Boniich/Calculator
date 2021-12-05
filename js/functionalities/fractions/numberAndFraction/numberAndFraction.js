import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const numberAndFraction = (stateCopy,operation,equal) =>{

    console.log("Number and fraction");

    let extractNumbers = /(\-?[0-9 | .]+).1\/\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);

    let mathExpression = numbers[0];

    value2 = 1/value2;

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
}

export default numberAndFraction;