import mathExpressions from "../../mathExpressions/mathExpressions.js";

const fraction = (stateCopy,flag) =>{

    let operation = new String(stateCopy.operation);
    let result = stateCopy.result;  
    let ValiExpress = false;
    // Esta expression regular sirve para casos como "1/(10)+"
    let expression = /(1\/\(\-?[0-9 | .]+\))./g;
    // Esta expression regular sirve para casos como "3+"
    let expression2 = /([0-9 | .]+[\+ | \- | \x | \÷])/g
    let fraction_potency = /(sqr\(\-?[0-9 | .]+\))./g;
    let fraction_squareRoot = /(√\([0-9 | .]+\))./g;
    let testFraction_potency = fraction_potency.test(operation);
    let testFraction_squareRoot = fraction_squareRoot.test(operation);

    if(testFraction_potency === true || testFraction_squareRoot === true){
        ValiExpress = true;
    }

    let exp1 = expression.test(operation);
    let exp2 = expression2.test(operation);

    if(result === "0"){
        alert("No es posible dividir por 0");
        return;
    }

    mathExpressions(stateCopy,flag,exp1,exp2,ValiExpress,`1/(${result})`,1/result);
}

export default fraction;