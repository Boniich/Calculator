import testExpression from "../../../helpers/testExpression/testExpression.js";
import numberAndPotency from "../numberAndPotency/numberAndPotency.js";
import potencyAndNumber from "../potencyAndNumber/potencyAndNumber.js";
import twoPotency from "../twoPotency/twoPotency.js";

const potencyOperations = (flag,stateCopy,equal) =>{
    
    let operation = new String(stateCopy.operation);

    if(testExpression(stateCopy,"pp") === true){twoPotency(stateCopy,operation,equal);}

    if(testExpression(stateCopy,"np") === true){numberAndPotency(stateCopy,operation,equal);}

    if(testExpression(stateCopy,"pn") === true){potencyAndNumber(flag,stateCopy,operation,equal);}


}

export default potencyOperations;