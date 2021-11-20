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


    // operations
    let sum = /(\-?[0-9 | .]+)\+(sqr\(\-?[0-9 | .]+\))/g;
    let subtract = /(\-?[0-9 | .]+)\-(sqr\(\-?[0-9 | .]+\))/g;
    let multiply = /(\-?[0-9 | .]+)\x(sqr\(\-?[0-9 | .]+\))/g;
    let division = /(\-?[0-9 | .]+)\÷(sqr\(\-?[0-9 | .]+\))/g;

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,value1,value2,equal);

}

export default numberAndPotency;