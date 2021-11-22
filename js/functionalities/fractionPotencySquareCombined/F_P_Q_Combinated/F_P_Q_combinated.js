import fractionPotency from "../fractionPotency/fractionPotency.js";
import fractionSquareRoot from "../fractionSquareRoot/fractionSquareRoot.js";
import potencyFraction from "../potencyFraction/potencyFraction.js";
import potencySquareRoot from "../potencySquareRoot/potencySquareRoot.js";
import squareRootPotency from "../squareRootPotency/squareRootPotency.js";
import squareRootFraction from "../squareRootFraction/squareRootFraction.js";
import testExpression from "../../../helpers/testExpression/testExpression.js";

const F_P_Q_Combinated = (stateCopy,equal) =>{

    let operation = new String(stateCopy.operation);

    if(testExpression(stateCopy,"fp") === true){fractionPotency(stateCopy,operation,equal)};
    if(testExpression(stateCopy,"pf") === true){potencyFraction(stateCopy,operation,equal)};
    if(testExpression(stateCopy,"fs") === true){fractionSquareRoot(stateCopy,operation,equal)};
    if(testExpression(stateCopy,"sf") === true){squareRootFraction(stateCopy,operation,equal)}
    if(testExpression(stateCopy,"sp") === true){squareRootPotency(stateCopy,operation,equal)};
    if(testExpression(stateCopy,"ps") === true){potencySquareRoot(stateCopy,operation,equal)};
    



}

export default F_P_Q_Combinated;