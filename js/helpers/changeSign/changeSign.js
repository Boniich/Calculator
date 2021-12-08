import execExpression from "../execExpression/execExpression.js";
import testExpression from "../testExpression/testExpression.js";

function changeSign(sign,stateCopy){
    
    let result = new String(stateCopy.result);
    let ExecSignBetween = execExpression(stateCopy,"signBetween");

    (testExpression(stateCopy,"testEqual") === true) ? stateCopy.operation = result + sign : 
    ((testExpression(stateCopy,"testSpecial") === true && sign!==ExecSignBetween[3])) ? stateCopy.operation = ExecSignBetween[1] + sign + ExecSignBetween[4] 
    : stateCopy.operation = execExpression(stateCopy,"endsWithSign")[1] + sign;
}

export default changeSign;