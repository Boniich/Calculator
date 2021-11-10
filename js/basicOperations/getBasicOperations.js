import deletePoint from "../point/deletePoint/deletePoint.js";
import equal from "../equal/equal.js";

const getBasicOperations = (flag,signo,stateCopy) =>{

    

    if(stateCopy.operation.endsWith(signo)){

        equal(stateCopy);
        flag.overWrite = true;

    }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

        deletePoint(signo,stateCopy);
    }else{
        stateCopy.operation = stateCopy.result;
        stateCopy.operation += signo;
        flag.overWrite = true;
        
    }




}

export default getBasicOperations;