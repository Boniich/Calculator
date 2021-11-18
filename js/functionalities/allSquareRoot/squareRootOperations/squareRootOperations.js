import numberAndSquareRoot from "../numberAndSquareRoot/numberAndSquareRoot.js";
import squareRootAndNumber from "../squareRootAndNumber/squareRootAndNumber.js";
import twoSquareRoot from "../twoSquareRoot/twoSquareRoot.js";

const squareRootOperations = (flag,stateCopy,operation,exp7,exp8,exp9) =>{

    if(exp7 === true){twoSquareRoot(stateCopy,operation);}

    if(exp8 === true){numberAndSquareRoot(stateCopy,operation);}

    if(exp9 === true){squareRootAndNumber(flag,stateCopy,operation);}


}

export default squareRootOperations;