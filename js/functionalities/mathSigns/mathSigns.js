import changeSign from "../../helpers/changeSign/changeSign.js";
import execExpression from "../../helpers/execExpression/execExpression.js";
import testExpression from "../../helpers/testExpression/testExpression.js";
import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import deletePoint from "../point/deletePoint/deletePoint.js";

const mathSigns = (flag,stateCopy,sign) =>{

    let equal = false;
    let result = new String(stateCopy.result);
    let endParentesis = testExpression(stateCopy,"endParentesis");
    let point = result.endsWith(".");
    let pointAndZero = result.endsWith(".0");


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
    }else if(endParentesis === true && testExpression(stateCopy,"fractionPotencySquare") === false){

        console.log("add sign if end with ')'")
        stateCopy.operation += sign;

    }else if(sign !== execExpression(stateCopy,"endsWithSign")[2]
     || (testExpression(stateCopy,"testSpecial") && sign!==execExpression(stateCopy,"signBetween")[3]) 
     || testExpression(stateCopy,"testEqual")){

        console.log("here will change sign");
        changeSign(sign,stateCopy);

    }else{

        makingAnOperation(flag,stateCopy,equal);
    }


}

export default mathSigns;