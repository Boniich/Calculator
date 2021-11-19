import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const twoSquareRoot = (stateCopy,operation) =>{

    console.log("Two squareRoot")

    let extractNumbers = /√\(([0-9 | .]+)\).√\(([0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);

    value1 = Math.sqrt(value1);
    value2 = Math.sqrt(value2);


    // operations
    let sum = /(√\([0-9 | .]+\))\+(√\([0-9 | .]+\))/g;
    let subtract = /(√\([0-9 | .]+\))\-(√\([0-9 | .]+\))/g;
    let multiply = /(√\([0-9 | .]+\))\x(√\([0-9 | .]+\))/g;
    let division = /(√\([0-9 | .]+\))\÷(√\([0-9 | .]+\))/g;

    testingOperation(stateCopy,operation,sum,subtract,multiply,division,value1,value2);

}

export default twoSquareRoot;