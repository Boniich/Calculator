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
    let resta = /(sqr\([0-9 | .]+\)\-$)/g
    let multiplicacion = /(sqr\([0-9 | .]+\)\*$)/g
    let division = /(sqr\([0-9 | .]+\)\÷$)/g

    testingOperation(stateCopy,operation,suma,resta,multiplicacion,division,value1,value2);

    flag.overWrite = true;

}

export default potencyAndNumber;