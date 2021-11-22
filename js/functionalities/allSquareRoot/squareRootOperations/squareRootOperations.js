import testExpression from "../../../helpers/testExpression/testExpression.js";
import numberAndSquareRoot from "../numberAndSquareRoot/numberAndSquareRoot.js";
import squareRootAndNumber from "../squareRootAndNumber/squareRootAndNumber.js";
import twoSquareRoot from "../twoSquareRoot/twoSquareRoot.js";

const squareRootOperations = (flag,stateCopy,equal) =>{

    let operation = new String(stateCopy.operation);

    if(testExpression(stateCopy,"ss") === true){twoSquareRoot(stateCopy,operation,equal);}

    if(testExpression(stateCopy,"ns") === true){numberAndSquareRoot(stateCopy,operation,equal);}

    if(testExpression(stateCopy,"sn") === true){squareRootAndNumber(flag,stateCopy,operation,equal);}


}

export default squareRootOperations;