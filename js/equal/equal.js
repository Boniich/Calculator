import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import renderOperation from "../render/renderOperation/renderOperation.js";

const equal = (stateCopy) =>{


    for(let i = 0; i<= stateCopy.operation.length;i++){

        if(stateCopy.operation[i] === "*"){


            makingAnOperation(stateCopy,"*");
            break;
        }else if(stateCopy.operation[i] === "/"){

            

            makingAnOperation(stateCopy,"/");
            break;
            

        }else if(stateCopy.operation[i] === "+"){


            makingAnOperation(stateCopy,"+");
            break;
                
        }else if(stateCopy.operation[i] === "-"){

 
            makingAnOperation(stateCopy,"-");
            break;
        }

    }

    // actualizamos el estado
    renderOperation(stateCopy);

}

export default equal;