import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import deletePoint from "../point/deletePoint/deletePoint.js";

const mathSigns = (flag,stateCopy,sign) =>{

    let equal = false;
    let operation = new String(stateCopy.operation);
    let result = new String(stateCopy.result);
    let endParentesis = operation.endsWith(")");
    let point = result.endsWith(".");
    let pointAndZero = result.endsWith(".0");


    //fractions

    let expres = /(1\/\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;
    let expression2 = /(\-?[0-9 | .]+.1\/\(\-?[0-9 | .]+\))/g
    let exp1 = expres.test(operation);
    let exp2 = expression2.test(operation);
   

    //potency

    let expression4 = /(sqr\(\-?[0-9 | .]+\)).(sqr\(\-?[0-9 | .]+\))/g;
    let expression5 = /(\-?[0-9 | .]+).(sqr\(\-?[0-9 | .]+\))/g
    let exp4 = expression4.test(operation);
    let exp5 = expression5.test(operation);

    //squareRoot

    let expression7 = /(√\([0-9 | .]+\)).(√\([0-9 | .]+\))/g;
    let expression8 = /(\-?[0-9 | .]+).(√\([0-9 | .]+\))/g
    let exp7 = expression7.test(operation);
    let exp8 = expression8.test(operation);

    if(point === true || pointAndZero === true){
        console.log("boorando coma")
        deletePoint(sign,stateCopy);

    }else if(stateCopy.operation === ""){

        stateCopy.operation = stateCopy.result;
        stateCopy.operation += sign;
        flag.overWrite = true;
    }else if(endParentesis === true && exp1 === false && exp2 === false && exp4 === false
        && exp5 === false && exp7 === false && exp8 === false){

        console.log("Agregar signo si termina en parentesis")
        stateCopy.operation += sign;

    }else{

        console.log("test desde sum")
        makingAnOperation(flag,stateCopy,equal);
    }

}

export default mathSigns;