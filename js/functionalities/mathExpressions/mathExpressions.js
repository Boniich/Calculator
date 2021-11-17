const mathExpressions = (stateCopy,flag,exp1,exp2,renderMathExpression,solveMathExpression) =>{

    if(exp1 === true || exp2 === true){
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