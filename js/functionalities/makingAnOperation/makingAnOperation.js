import fractionsOperations from "../fractions/fractionsOperations/fractionsOperations.js";
import potencyOperations from "../allPotency/potencyOperations/potencyOperations.js";
import squareRootOperations from "../allSquareRoot/squareRootOperations/squareRootOperations.js";
import basicOperations from "../basiOperations/basicOperations.js";
import F_P_Q_Combinated from "../fractionPotencySquareCombined/F_P_Q_Combinated/F_P_Q_combinated.js";
import testExpression from "../../helpers/testExpression/testExpression.js";



const makingAnOperation = (flag,stateCopy,equal) =>{


    if(testExpression(stateCopy,"2f") || testExpression(stateCopy,"nf") || testExpression(stateCopy,"fn") ){
        console.log("fraction")
        fractionsOperations(flag,stateCopy,equal);

       
    }else if(testExpression(stateCopy,"pp")  || testExpression(stateCopy,"np")  || testExpression(stateCopy,"pn") ){
        console.log("potency");
        potencyOperations(flag,stateCopy,equal);
        
       
    }else if(testExpression(stateCopy,"ss")  || testExpression(stateCopy,"ns")  || testExpression(stateCopy,"sn") ){
        console.log("squareRoot");
        squareRootOperations(flag,stateCopy,equal);

    }else if(testExpression(stateCopy,"fp")  || testExpression(stateCopy,"pf")  
    || testExpression(stateCopy,"fs")  || testExpression(stateCopy,"sf") 
    || testExpression(stateCopy,"sp") || testExpression(stateCopy,"ps") ){
        console.log("If de operaciones combinadas");
        console.log("f-p-s")
        F_P_Q_Combinated(stateCopy,equal);
        


    }else{
        basicOperations(stateCopy,equal);
        flag.overWrite = true;

    }
}

export default makingAnOperation;