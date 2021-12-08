import testExpression from "../../../helpers/testExpression/testExpression.js";
import fractionAndNumber from "../fractionAndNumber/fractionAndNumber.js";
import numberAndFraction from "../numberAndFraction/numberAndFraction.js";
import twoFractions from "../twoFractions/twoFractions.js";

    const fractionsOperations = (flag,stateCopy,equal) =>{

        if(testExpression(stateCopy,"2f")){twoFractions(stateCopy,equal);}

        if(testExpression(stateCopy,"nf")){numberAndFraction(stateCopy,equal);}

        if(testExpression(stateCopy,"fn")){fractionAndNumber(flag,stateCopy,equal);}
    } 

    export default fractionsOperations;