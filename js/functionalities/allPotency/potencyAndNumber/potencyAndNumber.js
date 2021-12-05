import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const potencyAndNumber = (flag,stateCopy,operation,equal) =>{

    console.log("Potency and Number");

    let extractNumbers = /sqr\((\-?[0-9 | .]+)\)./g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(stateCopy.result);

    let mathExpression = numbers[0] + value1;

    value1 = value1*value1;
    console.log(value1);
    console.log(value2);

    testingOperation(stateCopy,mathExpression,value1,value2,equal);

    flag.overWrite = true;

}

export default potencyAndNumber;