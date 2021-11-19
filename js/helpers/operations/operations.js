const operations = (stateCopy,signo,value1,value2) =>{

    let result = 0;

    switch (signo) {

        case "+": 
            console.log("Esto es una suma");
            result = value1 + value2;
            console.log("Este es el valor desde operationsAndResults",result);
            break;

        case "-": 
            console.log("Esto es una resta");
            result = value1 - value2;
            console.log("Este es el valor desde operationsAndResults",result);
            break;

        case "x": 
            console.log("Esto es una multiplicacion");
            result = value1 * value2;
            console.log("Este es el valor desde operationsAndResults",result);
            break;

        case "÷": 
            console.log("Esto es una division");
            result = value1 / value2;
            console.log("Este es el valor desde operationsAndResults",result);
            break;    
    
        default:
            break;
    }


    stateCopy.operation = `${result}${signo}`;
    stateCopy.result = `${result}`;

}

export default operations;