import testExpression from "../../../helpers/testExpression/testExpression.js";
import numberAndSquareRoot from "../numberAndSquareRoot/numberAndSquareRoot.js";
import squareRootAndNumber from "../squareRootAndNumber/squareRootAndNumber.js";
import twoSquareRoot from "../twoSquareRoot/twoSquareRoot.js";

const squareRootOperations = (flag,stateCopy,equal) =>{

    if(testExpression(stateCopy,"ss")){twoSquareRoot(stateCopy,equal);}

    if(testExpression(stateCopy,"ns")){numberAndSquareRoot(stateCopy,equal);}

    if(testExpression(stateCopy,"sn")){squareRootAndNumber(flag,stateCopy,equal);}


}

export default squareRootOperations;