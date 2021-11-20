import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const fractionAndNumber = (flag,stateCopy,operation,equal) =>{
    console.log("Fraction and number")
    let extractNumbers = /1\/\((\-?[0-9 | .]+)\)./g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(stateCopy.result);
    let value2 = Number.parseFloat(numbers[1]);
    
    let mathExpression = numbers[0] + value1;

    value2 = 1/value2;

    console.log(value1);
    console.log(value2);

    let sum = /(1\/\(\-?[0-9 | .]+\)\+)/g
    let subtract = /(1\/\(\-?[0-9 | .]+\)\-)/g
    let multiply = /(1\/\(\-?[0-9 | .]+\)\x)/g
    let division = /(1\/\(\-?[0-9 | .]+\)\÷)/g

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,mathExpression,value1,value2,equal);
    flag.overWrite = true;

}

export default fractionAndNumber;