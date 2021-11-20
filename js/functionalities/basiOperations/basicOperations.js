import testingOperation from "../../helpers/testingOperations/testingOperations.js";


const basicOperations = (stateCopy,equal) =>{
    console.log("basic operations")
    let operation = new String(stateCopy.operation);
    let result = 0;
    let numbers = /(\-?[0-9 | .]+)./g;
    let arrayNumbers = numbers.exec(operation);
    console.log(arrayNumbers);

    
    let value1 = Number.parseFloat(arrayNumbers[1]);
    let value2 = Number.parseFloat(stateCopy.result);


    let mathExpression = arrayNumbers[0] + value2;
    console.log(mathExpression);

    //operations

    let sum = /([0-9 | .])\+/g
    let substract = /([0-9 | .])\-/g
    let multiply = /([0-9 | .])\x/g
    let division = /([0-9 | .])\÷/g
    let porcentage = /([0-9 | .])\%/g
    let validePorc = porcentage.test(operation);

    if(validePorc === true){

        console.log("Porcentaje");
        result = (value1*value2)/100;
        console.log("Resultado del porcentaje es: ",result);
        stateCopy.operation = `${result}%`;
        stateCopy.result = `${result}`;
    }{

        testingOperation(stateCopy,operation,sum,substract,multiply,division,mathExpression,value1,value2,equal);

    }

}

export default basicOperations;