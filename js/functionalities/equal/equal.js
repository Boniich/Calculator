import makingAnOperation from "../makingAnOperation/makingAnOperation.js";

const equal = (flag,stateCopy) =>{

    if(stateCopy.operation === ""){
        stateCopy.operation = stateCopy.result + "="; 
    }else{
    
    let equal = true;
    makingAnOperation(flag,stateCopy,equal);
    
    }   
}

export default equal;