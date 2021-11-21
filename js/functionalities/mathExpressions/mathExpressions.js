const mathExpressions = (stateCopy,flag,exp1,exp2,testFraction_potency,renderMathExpression,solveMathExpression) =>{

    if(exp1 === true || exp2 === true || testFraction_potency === true){
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