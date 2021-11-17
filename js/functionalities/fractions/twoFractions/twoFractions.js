import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const twoFractions = (stateCopy,operation) =>{

    console.log("Two Fractions");

    let extractNumbers = /1\/\((\-?[0-9 | .]+)\).1\/\((\-?[0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);
        
    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);
        
    value1 = 1/value1;
    value2 = 1/value2;
        
    // operations
    let suma = /(1\/\(\-?[0-9 | .]+\))\+(1\/\(\-?[0-9 | .]+\))/g;
    let resta = /(1\/\(\-?[0-9 | .]+\))\-(1\/\(\-?[0-9 | .]+\))/g;
    let multiplicacion = /(1\/\(\-?[0-9 | .]+\))\*(1\/\(\-?[0-9 | .]+\))/g;
    let division = /(1\/\(\-?[0-9 | .]+\))\÷(1\/\(\-?[0-9 | .]+\))/g;
                
    testingOperation(stateCopy,operation,suma,resta,multiplicacion,division,value1,value2);
}

export default twoFractions;