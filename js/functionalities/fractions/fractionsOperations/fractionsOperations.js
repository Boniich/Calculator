import testExpression from "../../../helpers/testExpression/testExpression.js";
import fractionAndNumber from "../fractionAndNumber/fractionAndNumber.js";
import numberAndFraction from "../numberAndFraction/numberAndFraction.js";
import twoFractions from "../twoFractions/twoFractions.js";

    const fractionsOperations = (flag,stateCopy,equal) =>{

        let operation = new String(stateCopy.operation,equal);

        if(testExpression(stateCopy,"2f") === true){twoFractions(stateCopy,operation,equal);}

        if(testExpression(stateCopy,"nf")){numberAndFraction(stateCopy,operation,equal);}

        if(testExpression(stateCopy,"fn")){fractionAndNumber(flag,stateCopy,operation,equal);}
    } 

    export default fractionsOperations;