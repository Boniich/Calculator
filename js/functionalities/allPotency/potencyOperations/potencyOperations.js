import testExpression from "../../../helpers/testExpression/testExpression.js";
import numberAndPotency from "../numberAndPotency/numberAndPotency.js";
import potencyAndNumber from "../potencyAndNumber/potencyAndNumber.js";
import twoPotency from "../twoPotency/twoPotency.js";

const potencyOperations = (flag,stateCopy,equal) =>{
    
    if(testExpression(stateCopy,"pp")){twoPotency(stateCopy,equal);}

    if(testExpression(stateCopy,"np")){numberAndPotency(stateCopy,equal);}

    if(testExpression(stateCopy,"pn")){potencyAndNumber(flag,stateCopy,equal);}

}

export default potencyOperations;