import testExpression from "../../helpers/testExpression/testExpression.js";
import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import deletePoint from "../point/deletePoint/deletePoint.js";

const mathSigns = (flag,stateCopy,sign) =>{

    let equal = false;
    let operation = new String(stateCopy.operation);
    let result = new String(stateCopy.result);
    let endParentesis = operation.endsWith(")");
    let point = result.endsWith(".");
    let pointAndZero = result.endsWith(".0");


    
    //doesnt work
    let determineSign = /(1?[\/ | \√ | sqr]*\(?\-?[0-9 | 0.0]+\)?)([\+ | \x |\÷ |\% |\= |\-])/g;
    let thisSignIs = determineSign.exec(operation);
    console.log("array",thisSignIs);







    if(point === true || pointAndZero === true){
        console.log("borrando coma")
        deletePoint(sign,stateCopy);

    }else if(stateCopy.operation === ""){

        stateCopy.operation = stateCopy.result;
        stateCopy.operation += sign;
        flag.overWrite = true;
    }else if(sign === "%" && endParentesis === true){

        stateCopy.operation = "";
        stateCopy.result = "0";
    }else if(endParentesis === true && testExpression(stateCopy,"2f") === false && testExpression(stateCopy,"nf") === false
             && testExpression(stateCopy,"pp") === false && testExpression(stateCopy,"np") === false && testExpression(stateCopy,"ss") === false 
             && testExpression(stateCopy,"ns") === false && testExpression(stateCopy,"fp") === false && testExpression(stateCopy,"pf") === false && 
             testExpression(stateCopy,"fs") === false && testExpression(stateCopy,"sf") === false && testExpression(stateCopy,"sp") === false && testExpression(stateCopy,"ps") === false){

        console.log("add sign if end with ')'")
        stateCopy.operation += sign;

    }else if(sign !== thisSignIs[2]){

        console.log("Aca vamos a cambiar el signos");
        stateCopy.operation = thisSignIs[1] + sign;

    }else{

        makingAnOperation(flag,stateCopy,equal);
    }

 



}

export default mathSigns;