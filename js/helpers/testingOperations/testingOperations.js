import operations from "../operations/operations.js";

const testingOperation = (stateCopy,operation,suma,resta,multiplicacion,division,value1,value2) =>{

    if(suma.test(operation)){operations(stateCopy,"+",value1,value2);}
            
    if(resta.test(operation)){operations(stateCopy,"-",value1,value2);}

    if(multiplicacion.test(operation)){operations(stateCopy,"*",value1,value2);}

    if(division.test(operation)){operations(stateCopy,"÷",value1,value2);}

}


export default testingOperation;
