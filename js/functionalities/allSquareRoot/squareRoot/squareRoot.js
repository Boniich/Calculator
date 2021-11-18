import mathExpressions from "../../mathExpressions/mathExpressions.js";


const squareRoot = (stateCopy,flag) =>{

    let operation = new String(stateCopy.operation);
    let result = stateCopy.result;  

    let expression = /(√\([0-9 | .]+\).)/g;
    let expression2 = /([0-9 | .]+[\+ | \- | \* | \÷])/g

    let exp1 = expression.test(operation);
    let exp2 = expression2.test(operation);

    let negativeNumbers = /(\-[0-9 | .])/g;
    let validate = negativeNumbers.test(result);

    if(validate === true){
        alert("no es posible obtener la raiz de un numero negativo");
        flag.overWrite = true;
        return;
    }

    let potencyExpression = `√(${result})`;
    let potencySolved = Math.sqrt(result);

    mathExpressions(stateCopy,flag,exp1,exp2,potencyExpression,potencySolved);

}

export default squareRoot;
