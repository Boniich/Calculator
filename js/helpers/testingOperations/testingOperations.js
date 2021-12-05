import operations from "../operations/operations.js";
import testExpression from "../testExpression/testExpression.js";

const testingOperation = (stateCopy,mathExpression,value1,value2,equal) =>{

    if(testExpression(stateCopy,"sum")){operations(stateCopy,"+",mathExpression,value1,value2,equal);}
            
    if(testExpression(stateCopy,"substract")){operations(stateCopy,"-",mathExpression,value1,value2,equal);}

    if(testExpression(stateCopy,"multiply")){operations(stateCopy,"x",mathExpression,value1,value2,equal);}

    if(testExpression(stateCopy,"division")){operations(stateCopy,"÷",mathExpression,value1,value2,equal);}

}


export default testingOperation;
