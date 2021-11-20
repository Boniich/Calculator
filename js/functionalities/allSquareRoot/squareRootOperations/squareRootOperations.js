import numberAndSquareRoot from "../numberAndSquareRoot/numberAndSquareRoot.js";
import squareRootAndNumber from "../squareRootAndNumber/squareRootAndNumber.js";
import twoSquareRoot from "../twoSquareRoot/twoSquareRoot.js";

const squareRootOperations = (flag,stateCopy,operation,exp7,exp8,exp9,equal) =>{

    if(exp7 === true){twoSquareRoot(stateCopy,operation,equal);}

    if(exp8 === true){numberAndSquareRoot(stateCopy,operation,equal);}

    if(exp9 === true){squareRootAndNumber(flag,stateCopy,operation,equal);}


}

export default squareRootOperations;