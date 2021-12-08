import fractionPotency from "../fractionPotency/fractionPotency.js";
import fractionSquareRoot from "../fractionSquareRoot/fractionSquareRoot.js";
import potencyFraction from "../potencyFraction/potencyFraction.js";
import potencySquareRoot from "../potencySquareRoot/potencySquareRoot.js";
import squareRootPotency from "../squareRootPotency/squareRootPotency.js";
import squareRootFraction from "../squareRootFraction/squareRootFraction.js";
import testExpression from "../../../helpers/testExpression/testExpression.js";

const F_P_Q_Combinated = (stateCopy,equal) =>{


    if(testExpression(stateCopy,"fp")){fractionPotency(stateCopy,equal)};
    if(testExpression(stateCopy,"pf")){potencyFraction(stateCopy,equal)};
    if(testExpression(stateCopy,"fs")){fractionSquareRoot(stateCopy,equal)};
    if(testExpression(stateCopy,"sf")){squareRootFraction(stateCopy,equal)}
    if(testExpression(stateCopy,"sp")){squareRootPotency(stateCopy,equal)};
    if(testExpression(stateCopy,"ps")){potencySquareRoot(stateCopy,equal)};
    
}

export default F_P_Q_Combinated;