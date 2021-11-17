import fractionAndNumber from "../fractionAndNumber/fractionAndNumber.js";
import numberAndFraction from "../numberAndFraction/numberAndFraction.js";
import twoFractions from "../twoFractions/twoFractions.js";

    const fractionsOperations = (flag,stateCopy,exp1,exp2,exp3) =>{

        let operation = new String(stateCopy.operation);

        if(exp1 === true){twoFractions(stateCopy,operation);}

        if(exp2 === true){numberAndFraction(stateCopy,operation);}

        if(exp3 === true){fractionAndNumber(flag,stateCopy,operation);}
    } 

    export default fractionsOperations;