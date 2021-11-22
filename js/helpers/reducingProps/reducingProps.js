import testExpression from "../testExpression/testExpression.js";

const reducingProps = (stateCopy) =>{
    let validateExpression = false;
    if(testExpression(stateCopy,"pn") === true 
    || testExpression(stateCopy, "numSign") === true 
    || testExpression(stateCopy,"fn") === true || testExpression(stateCopy,"sn") === true){
        validateExpression = true;
    }

    return validateExpression;

}

export default reducingProps;