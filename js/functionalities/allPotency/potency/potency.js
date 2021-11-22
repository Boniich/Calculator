import reducingProps from "../../../helpers/reducingProps/reducingProps.js";
import mathExpressions from "../../mathExpressions/mathExpressions.js";


const potency = (stateCopy,flag) =>{
    
    let result = stateCopy.result;  
    let validateExpression = reducingProps(stateCopy);


    let potencyExpression = `sqr(${result})`;
    let potencySolved = result*result;

    

    mathExpressions(stateCopy,flag,validateExpression,potencyExpression,potencySolved);

}

export default potency;