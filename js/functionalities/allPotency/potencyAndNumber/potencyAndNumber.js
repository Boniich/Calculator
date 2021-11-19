import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const potencyAndNumber = (flag,stateCopy,operation) =>{

    console.log("Potency and Number");

    let extractNumbers = /sqr\(([0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(stateCopy.result);
    let value2 = Number.parseFloat(numbers[1]);

    value1 = value1*value1;


    // operations
    let suma = /(sqr\([0-9 | .]+\)\+$)/g
    let subtract = /(sqr\([0-9 | .]+\)\-$)/g
    let multiply = /(sqr\([0-9 | .]+\)\x$)/g
    let division = /(sqr\([0-9 | .]+\)\÷$)/g

    testingOperation(stateCopy,operation,suma,subtract,multiply,division,value1,value2);

    flag.overWrite = true;

}

export default potencyAndNumber;