import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const numberAndFraction = (stateCopy,operation,equal) =>{

    console.log("Number and fraction");

    let extractNumbers = /(\-?[0-9 | .]+).1\/\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);

    let mathExpression = numbers[0];


    //operations
    let sum = /(\-?[0-9 | .]+\+1\/\(\-?[0-9 | .]+\))/g
    let subtract = /(\-?[0-9 | .]+\-1\/\(\-?[0-9 | .]+\))/g
    let multiply = /(\-?[0-9 | .]+\x1\/\(\-?[0-9 | .]+\))/g
    let division = /(\-?[0-9 | .]+\÷1\/\(\-?[0-9 | .]+\))/g

    value2 = 1/value2;

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,value1,value2,equal);
}

export default numberAndFraction;