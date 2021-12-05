import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const fractionAndNumber = (flag,stateCopy,operation,equal) =>{
    console.log("Fraction and number")
    let extractNumbers = /1\/\((\-?[0-9 | .]+)\)./g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);
    
    let value1 = Number.parseFloat(stateCopy.result);
    let value2 = Number.parseFloat(numbers[1]);
    
    let mathExpression = numbers[0] + value1;
    //dividendo
    value2 = 1/value2;

    console.log(value1);
    console.log(value2);

    let division = /(1\/\(\-?[0-9 | .]+\)\÷)/g

    let test = division.test(operation);
    console.log(test);

    if(test === true){
        let aux;

        aux = value1;
        value1 = value2;
        value2 = aux;

        console.log("aux",aux);
        console.log("value1",value1);
        console.log("value2",value2);
    }

    testingOperation(stateCopy,mathExpression,value1,value2,equal);
    flag.overWrite = true;

}

export default fractionAndNumber;