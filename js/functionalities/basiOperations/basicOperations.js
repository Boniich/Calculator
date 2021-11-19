import testingOperation from "../../helpers/testingOperations/testingOperations.js";


const basicOperations = (stateCopy,signoString) =>{
    // determinamos que signo es y dividimos el string
    let operation = new String(stateCopy.operation);
    let result = 0,
    extractNumbers = stateCopy.operation.split(signoString);
    console.log(extractNumbers);
    console.log(extractNumbers[0]);
    console.log(stateCopy.result);


    // comvertimos los string a numeros
    let value1 = Number.parseFloat(extractNumbers[0]);
    let value2 = Number.parseFloat(stateCopy.result);

    if(extractNumbers[0] === ""){
        value1 = Number.parseFloat(`-${extractNumbers[1]}`);
    }

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
        stateCopy.operation = `${result}${signoString}`;
        stateCopy.result = `${result}`;
    }{

        testingOperation(stateCopy,operation,sum,substract,multiply,division,value1,value2);

    }

}

export default basicOperations;