import mathExpressions from "../../mathExpressions/mathExpressions.js";

const fraction = (stateCopy,flag) =>{

    let operation = new String(stateCopy.operation);
    let result = stateCopy.result;  
    // Esta expression regular sirve para casos como "1/(10)+"
    let expression = /(1\/\(\-?[0-9 | .]+\))./g;
    // Esta expression regular sirve para casos como "3+"
    let expression2 = /([0-9 | .]+[\+ | \- | \x | \÷])/g

    let exp1 = expression.test(operation);
    let exp2 = expression2.test(operation);

    if(result === "0"){
        alert("No es posible dividir por 0");
        return;
    }

    mathExpressions(stateCopy,flag,exp1,exp2,`1/(${result})`,1/result);
}

export default fraction;