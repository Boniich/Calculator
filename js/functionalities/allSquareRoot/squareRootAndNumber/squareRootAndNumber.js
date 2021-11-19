import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const squareRootAndNumber = (flag,stateCopy,operation) =>{

    console.log("SquareRoot and Number");

    let extractNumbers = /√\(([0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(stateCopy.result);
    let value2 = Number.parseFloat(numbers[1]);

    value1 = Math.sqrt(value1);

    // operations
    let sum = /(√\([0-9 | .]+\)\+$)/g
    let subtract = /(√\([0-9 | .]+\)\-$)/g
    let multiply = /(√\([0-9 | .]+\)\x$)/g
    let division = /(√\([0-9 | .]+\)\÷$)/g

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,value1,value2);
    flag.overWrite = true;

}

export default squareRootAndNumber;