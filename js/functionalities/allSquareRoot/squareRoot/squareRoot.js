import reducingProps from "../../../helpers/reducingProps/reducingProps.js";
import mathExpressions from "../../mathExpressions/mathExpressions.js";


const squareRoot = (stateCopy,flag) =>{

    let result = stateCopy.result;  
    let validateExpression = reducingProps(stateCopy);


    let negativeNumbers = /(\-[0-9 | .])/g;
    let validate = negativeNumbers.test(result);

    if(validate === true){
        alert("no es posible obtener la raiz de un numero negativo");
        flag.overWrite = true;
        return;
    }

    let potencyExpression = `√(${result})`;
    let potencySolved = Math.sqrt(result);

    mathExpressions(stateCopy,flag,validateExpression,potencyExpression,potencySolved);

}

export default squareRoot;

