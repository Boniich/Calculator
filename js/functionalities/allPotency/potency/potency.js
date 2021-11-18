import mathExpressions from "../../mathExpressions/mathExpressions.js";

const potency = (stateCopy,flag) =>{

    let operation = new String(stateCopy.operation);
    let result = stateCopy.result;  

    let expression = /(sqr\([0-9 | .]+\).)/g;
    let expression2 = /([0-9 | .]+[\+ | \- | \* | \÷])/g

    let exp1 = expression.test(operation);
    let exp2 = expression2.test(operation);

    let potencyExpression = `sqr(${result})`;
    let potencySolved = result*result;

    
    console.log(exp1);
    console.log(exp2);


    mathExpressions(stateCopy,flag,exp1,exp2,potencyExpression,potencySolved);

}

export default potency;