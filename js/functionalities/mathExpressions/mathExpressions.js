const mathExpressions = (stateCopy,flag,validarExpression,renderMathExpression,solveMathExpression) =>{

    if(validarExpression === true){
        stateCopy.operation += renderMathExpression;
        stateCopy.result = solveMathExpression;
        flag.overWrite = true;

    }else{
        stateCopy.operation = renderMathExpression;
        stateCopy.result = solveMathExpression;
        flag.overWrite = true;
   }

}

export default mathExpressions;