import fractionsOperations from "../fractions/fractionsOperations/fractionsOperations.js";
import potencyOperations from "../allPotency/potencyOperations/potencyOperations.js";
import squareRootOperations from "../allSquareRoot/squareRootOperations/squareRootOperations.js";
import basicOperations from "../basiOperations/basicOperations.js";
import F_P_Q_Combinated from "../fractionPotencySquareCombined/F_P_Q_Combinated/F_P_Q_combinated.js";
import testExpression from "../../helpers/testExpression/testExpression.js";



const makingAnOperation = (flag,stateCopy,equal) =>{


    if(testExpression(stateCopy,"2f") === true|| testExpression(stateCopy,"nf") === true|| testExpression(stateCopy,"fn") === true){

        fractionsOperations(flag,stateCopy,equal);

       
    }else if(testExpression(stateCopy,"pp") === true || testExpression(stateCopy,"np") === true || testExpression(stateCopy,"pn") === true){

        potencyOperations(flag,stateCopy,equal);

    }else if(testExpression(stateCopy,"ss") === true || testExpression(stateCopy,"ns") === true || testExpression(stateCopy,"sn") === true){

        squareRootOperations(flag,stateCopy,equal);

    }else if(testExpression(stateCopy,"fp") === true || testExpression(stateCopy,"pf") === true 
        || testExpression(stateCopy,"fs") === true || testExpression(stateCopy,"sf") === true
        || testExpression(stateCopy,"sp")=== true || testExpression(stateCopy,"ps") === true){
        console.log("If de operaciones combinadas");

        F_P_Q_Combinated(stateCopy,equal);
        


    }else{
        basicOperations(stateCopy,equal);
        flag.overWrite = true;

    }

}

export default makingAnOperation;