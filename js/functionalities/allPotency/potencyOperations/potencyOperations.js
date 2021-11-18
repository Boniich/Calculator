import numberAndPotency from "../numberAndPotency/numberAndPotency.js";
import potencyAndNumber from "../potencyAndNumber/potencyAndNumber.js";
import twoPotency from "../twoPotency/twoPotency.js";

const potencyOperations = (flag,stateCopy,operation,exp4,exp5,exp6) =>{

    if(exp4 === true){twoPotency(stateCopy,operation);}

    if(exp5 === true){numberAndPotency(stateCopy,operation);}

    if(exp6 === true){potencyAndNumber(flag,stateCopy,operation);}


}

export default potencyOperations;