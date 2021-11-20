import operations from "../operations/operations.js";

const testingOperation = (stateCopy,operation,sum,subtract,multiply,division,mathExpression,value1,value2,equal) =>{

    if(sum.test(operation)){operations(stateCopy,"+",mathExpression,value1,value2,equal);}
            
    if(subtract.test(operation)){operations(stateCopy,"-",mathExpression,value1,value2,equal);}

    if(multiply.test(operation)){operations(stateCopy,"x",mathExpression,value1,value2,equal);}

    if(division.test(operation)){operations(stateCopy,"÷",mathExpression,value1,value2,equal);}

}


export default testingOperation;
