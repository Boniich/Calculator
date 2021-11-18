import deletePoint from "../point/deletePoint/deletePoint.js";
import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import fractionsOperations from "../fractions/fractionsOperations/fractionsOperations.js";
import potencyOperations from "../allPotency/potencyOperations/potencyOperations.js";

const getBasicOperations = (flag,signo,stateCopy) =>{

   
    let operation = new String(stateCopy.operation);
    let result = new String(stateCopy.result);
    
    // fractions

    let expres = /(1\/\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;
    let expression2 = /([0-9 | .]+.1\/\([0-9 | .]+\))/g
    let expression3 = /(1\/\([0-9 | .]+\).$)/g

    
    let exp1 = expres.test(operation);
    let exp2 = expression2.test(operation);
    let exp3 = expression3.test(operation);


    //potency

    let expression4 = /(sqr\([0-9 | .]+\)).(sqr\([0-9 | .]+\))/g;
    let expression5 = /([0-9 | .]+).(sqr\([0-9 | .]+\))/g
    let expression6 = /(sqr\([0-9 | .]+\).$)/g
    let exp4 = expression4.test(operation);
    let exp5 = expression5.test(operation);
    let exp6 = expression6.test(operation);


    if(exp1 === true ||exp2 === true || exp3 === true){

        fractionsOperations(flag,stateCopy,exp1,exp2,exp3);

       
    }else if(exp4 === true || exp5 === true || exp6 === true){

        potencyOperations(flag,stateCopy,operation,exp4,exp5,exp6);

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