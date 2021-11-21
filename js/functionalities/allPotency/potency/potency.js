import mathExpressions from "../../mathExpressions/mathExpressions.js";

const potency = (stateCopy,flag) =>{

    let operation = new String(stateCopy.operation);
    let result = stateCopy.result;  
    let validarCom = false;
    let expression = /(sqr\(\-?[0-9 | .]+\))./g;
    let expression2 = /([0-9 | .]+[\+ | \- | \x | \÷])/g
    let fraction_potency = /(1\/\(\-?[0-9 | .]+\))./g;
    let potency_squareRoot = /(√\([0-9 | .]+\).)/g;

    let exp1 = expression.test(operation);
    let exp2 = expression2.test(operation);
    let testFraction_potency = fraction_potency.test(operation);
    let testPotency_squareRoot = potency_squareRoot.test(operation);

    if(testFraction_potency === true || testPotency_squareRoot === true){
        validarCom = true;
    }

    let potencyExpression = `sqr(${result})`;
    let potencySolved = result*result;

    
    console.log(exp1);
    console.log(exp2);
    console.log(testFraction_potency);


    mathExpressions(stateCopy,flag,exp1,exp2,validarCom,potencyExpression,potencySolved);

}

export default potency;