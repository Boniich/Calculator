import deletePoint from "../point/deletePoint/deletePoint.js";
import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import operationsAndResults from "../../helpers/operationsAndResults.js";

const getBasicOperations = (flag,signo,stateCopy) =>{

   
    let operation = new String(stateCopy.operation);
    let result = new String(stateCopy.result);
    
    let expres = /(1\/\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;
    let expression2 = /([0-9 | .]+.1\/\([0-9 | .]+\))/g
    let expression3 = /(1\/\([0-9 | .]+\).$)/g


    let exp1 = expres.test(operation);
    let exp2 = expression2.test(operation);
    let exp3 = expression3.test(operation);


    const fractionsOperations = () =>{

        let result = 0;

        if(exp3 === true){

            console.log("Fraction and number")
            let extractNumbers = /1\/\((\-?[0-9 | .]+)\)/g;
            let numbers = extractNumbers.exec(operation);
            console.log(numbers);

            let value1 = Number.parseFloat(numbers[1]);
            let value2 = stateCopy.result;
            value1 = 1/value1;

            console.log(value1);
            console.log(value2);

            let suma = /(1\/\([0-9 | .]+\)\+)/g
            let resta = /(1\/\([0-9 | .]+\)\-)/g
            let multiplicacion = /(1\/\([0-9 | .]+\)\*)/g
            let division = /(1\/\([0-9 | .]+\)\÷)/g

            if(suma.test(operation)){operationsAndResults(stateCopy,"+",result,value1,value2);}
            
            if(resta.test(operation)){operationsAndResults(stateCopy,"-",result,value1,value2);}

            if(multiplicacion.test(operation)){operationsAndResults(stateCopy,"*",result,value1,value2);}

            if(division.test(operation)){operationsAndResults(stateCopy,"÷",result,value1,value2);}

            flag.overWrite = true;
            
        }



        if(exp2 === true){

            console.log("Number and fraction");

            let extractNumbers = /([0-9 | .]+).1\/\((\-?[0-9 | .]+)\)/g;
            let numbers = extractNumbers.exec(operation);
            console.log(numbers);

            let value1 = Number.parseFloat(numbers[1]);
            let value2 = Number.parseFloat(numbers[2]);


            //operations
            let suma = /([0-9 | .]+\+1\/\([0-9 | .]+\))/g
            let resta = /([0-9 | .]+\-1\/\([0-9 | .]+\))/g
            let multiplicacion = /([0-9 | .]+\*1\/\([0-9 | .]+\))/g
            let division = /([0-9 | .]+\÷1\/\([0-9 | .]+\))/g

            value2 = 1/value2;

            if(suma.test(operation)){operationsAndResults(stateCopy,"+",result,value1,value2);}
            
            if(resta.test(operation)){operationsAndResults(stateCopy,"-",result,value1,value2);}

            if(multiplicacion.test(operation)){operationsAndResults(stateCopy,"*",result,value1,value2);}

            if(division.test(operation)){operationsAndResults(stateCopy,"÷",result,value1,value2);}
            
            
        }



        if(exp1 === true){

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

            if(suma.test(operation)){operationsAndResults(stateCopy,"+",result,value1,value2);}
                
            if(resta.test(operation)){operationsAndResults(stateCopy,"-",result,value1,value2);}
    
            if(multiplicacion.test(operation)){operationsAndResults(stateCopy,"*",result,value1,value2);}
    
            if(division.test(operation)){operationsAndResults(stateCopy,"÷",result,value1,value2);}

            
            
        }


    } 



    if(exp1 === true ||exp2 === true || exp3 === true){

        
        fractionsOperations();

       
    }else if(operation.endsWith(signo)){
        makingAnOperation(stateCopy,signo);
        flag.overWrite = true;

    }else if(result.endsWith(".") || result.endsWith(".0")){

        deletePoint(signo,stateCopy);

    }else if(operation.endsWith(")")){
        stateCopy.operation += signo;

    }else{
        stateCopy.operation = stateCopy.result;
        stateCopy.operation += signo;
        flag.overWrite = true;
        
    }


}

export default getBasicOperations;