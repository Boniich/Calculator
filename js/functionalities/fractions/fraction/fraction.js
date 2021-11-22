import reducingProps from "../../../helpers/reducingProps/reducingProps.js";
import mathExpressions from "../../mathExpressions/mathExpressions.js";

const fraction = (stateCopy,flag) =>{

    let result = stateCopy.result;  
    let validateExpression = reducingProps(stateCopy);

    if(result === "0"){
        alert("No es posible dividir por 0");
        return;
    }

    mathExpressions(stateCopy,flag,validateExpression,`1/(${result})`,1/result);
}

export default fraction;