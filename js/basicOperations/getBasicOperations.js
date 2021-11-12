import deletePoint from "../point/deletePoint/deletePoint.js";
import makingAnOperation from "../makingAnOperation/makingAnOperation.js";

const getBasicOperations = (flag,signo,stateCopy) =>{

    

    if(stateCopy.operation.endsWith(signo)){
        makingAnOperation(stateCopy,signo);
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