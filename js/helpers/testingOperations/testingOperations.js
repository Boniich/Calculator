import operations from "../operations/operations.js";

const testingOperation = (stateCopy,operation,sum,subtract,multiply,division,value1,value2) =>{

    if(sum.test(operation)){operations(stateCopy,"+",value1,value2);}
            
    if(subtract.test(operation)){operations(stateCopy,"-",value1,value2);}

    if(multiply.test(operation)){operations(stateCopy,"x",value1,value2);}

    if(division.test(operation)){operations(stateCopy,"÷",value1,value2);}

}


export default testingOperation;
