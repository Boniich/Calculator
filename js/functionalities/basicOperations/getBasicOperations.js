import deletePoint from "../point/deletePoint/deletePoint.js";
import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import operationsAndResults from "../../helpers/operationsAndResults.js";

const getBasicOperations = (flag,signo,stateCopy) =>{

   
    let operation = new String(stateCopy.operation);
    let result = new String(stateCopy.result);

    const operations = (suma,resta,multiplicacion,division,value1,value2) =>{

        if(suma.test(operation)){operationsAndResults(stateCopy,"+",value1,value2);}
                
        if(resta.test(operation)){operationsAndResults(stateCopy,"-",value1,value2);}

        if(multiplicacion.test(operation)){operationsAndResults(stateCopy,"*",value1,value2);}

        if(division.test(operation)){operationsAndResults(stateCopy,"÷",value1,value2);}

    }

    
    // fractions

    let expres = /(1\/\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;
    let expression2 = /([0-9 | .]+.1\/\([0-9 | .]+\))/g
    let expression3 = /(1\/\([0-9 | .]+\).$)/g

    
    let exp1 = expres.test(operation);
    let exp2 = expression2.test(operation);
    let exp3 = expression3.test(operation);


    const fractionsOperations = () =>{


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

            operations(suma,resta,multiplicacion,division,value1,value2);

            
            
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

            operations(suma,resta,multiplicacion,division,value1,value2);
            
            
        }


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

            operations(suma,resta,multiplicacion,division,value1,value2);

            flag.overWrite = true;
            
        }










    } 


    //potency

    let expression4 = /(sqr\([0-9 | .]+\)).(sqr\([0-9 | .]+\))/g;
    let expression5 = /([0-9 | .]+).(sqr\([0-9 | .]+\))/g
    let expression6 = /(sqr\([0-9 | .]+\).$)/g
    let exp4 = expression4.test(operation);
    let exp5 = expression5.test(operation);
    let exp6 = expression6.test(operation);


    const potencyOperations = () =>{

        if(exp4 === true){

            console.log("Two Potency")

            let extractNumbers = /sqr\(([0-9 | .]+)\).sqr\(([0-9 | .]+)\)/g;
            let numbers = extractNumbers.exec(operation);
            console.log(numbers);
    
            let value1 = Number.parseFloat(numbers[1]);
            let value2 = Number.parseFloat(numbers[2]);
    
            value1 = value1*value1;
            value2 = value2*value2;
    
    
            // operations
            let suma = /(sqr\([0-9 | .]+\))\+(sqr\([0-9 | .]+\))/g;
            let resta = /(sqr\([0-9 | .]+\))\-(sqr\([0-9 | .]+\))/g;
            let multiplicacion = /(sqr\([0-9 | .]+\))\*(sqr\([0-9 | .]+\))/g;
            let division = /(sqr\([0-9 | .]+\))\÷(sqr\([0-9 | .]+\))/g;

            operations(suma,resta,multiplicacion,division,value1,value2);


        }

        if(exp5 === true){

            console.log("Number and Potency");

            let extractNumbers = /([0-9 | .]+).sqr\(([0-9 | .]+)\)/g;
            let numbers = extractNumbers.exec(operation);
            console.log(numbers);
    
            let value1 = Number.parseFloat(numbers[1]);
            let value2 = Number.parseFloat(numbers[2]);
    
            value2 = value2*value2;
    
    
            // operations
            let suma = /([0-9 | .]+)\+(sqr\([0-9 | .]+\))/g;
            let resta = /([0-9 | .]+)\-(sqr\([0-9 | .]+\))/g;
            let multiplicacion = /([0-9 | .]+)\*(sqr\([0-9 | .]+\))/g;
            let division = /([0-9 | .]+)\÷(sqr\([0-9 | .]+\))/g;

            operations(suma,resta,multiplicacion,division,value1,value2);

        }

        if(exp6 === true){

            console.log("Potency and Number");

            let extractNumbers = /sqr\(([0-9 | .]+)\)/g;
            let numbers = extractNumbers.exec(operation);
            console.log(numbers);
    
            let value1 = Number.parseFloat(numbers[1]);
            let value2 = stateCopy.result;
    
            value2 = value2*value2;
    
    
            // operations
            let suma = /(sqr\([0-9 | .]+\)\+$)/g
            let resta = /(sqr\([0-9 | .]+\)\-$)/g
            let multiplicacion = /(sqr\([0-9 | .]+\)\*$)/g
            let division = /(sqr\([0-9 | .]+\)\÷$)/g

            operations(suma,resta,multiplicacion,division,value1,value2);

        }

       

    }


   


    if(exp1 === true ||exp2 === true || exp3 === true){

        fractionsOperations();

       
    }else if(exp4 === true || exp5 === true || exp6 === true){

        potencyOperations();

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