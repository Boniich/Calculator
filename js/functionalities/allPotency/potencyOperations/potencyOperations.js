import numberAndPotency from "../numberAndPotency/numberAndPotency.js";
import potencyAndNumber from "../potencyAndNumber/potencyAndNumber.js";
import twoPotency from "../twoPotency/twoPotency.js";

const potencyOperations = (flag,stateCopy,operation,exp4,exp5,exp6,equal) =>{

    if(exp4 === true){twoPotency(stateCopy,operation,equal);}

    if(exp5 === true){numberAndPotency(stateCopy,operation,equal);}

    if(exp6 === true){potencyAndNumber(flag,stateCopy,operation,equal);}


}

export default potencyOperations;