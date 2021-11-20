import deletePoint from "../point/deletePoint/deletePoint.js";
import fractionsOperations from "../fractions/fractionsOperations/fractionsOperations.js";
import potencyOperations from "../allPotency/potencyOperations/potencyOperations.js";
import squareRootOperations from "../allSquareRoot/squareRootOperations/squareRootOperations.js";
import basicOperations from "../basiOperations/basicOperations.js";

const makingAnOperation = (flag,stateCopy) =>{

   
    let operation = new String(stateCopy.operation);
    
    // fractions

    let expres = /(1\/\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;
    let expression2 = /([0-9 | .]+.1\/\([0-9 | .]+\))/g
    let expression3 = /(1\/\([0-9 | .]+\).$)/g

    
    let exp1 = expres.test(operation);
    let exp2 = expression2.test(operation);
    let exp3 = expression3.test(operation);


    //potency

    let expression4 = /(sqr\([0-9 | .]+\)).(sqr\([0-9 | .]+\))/g;
    let expression5 = /([0-9 | .]+).(sqr\([0-9 | .]+\))/g
    let expression6 = /(sqr\([0-9 | .]+\).$)/g
    let exp4 = expression4.test(operation);
    let exp5 = expression5.test(operation);
    let exp6 = expression6.test(operation);


    //Square Root

    let expression7 = /(√\([0-9 | .]+\)).(√\([0-9 | .]+\))/g;
    let expression8 = /([0-9 | .]+).(√\([0-9 | .]+\))/g
    let expression9 = /(√\([0-9 | .]+\).$)/g
    let exp7 = expression7.test(operation);
    let exp8 = expression8.test(operation);
    let exp9 = expression9.test(operation);



    if(exp1 === true ||exp2 === true || exp3 === true){

        fractionsOperations(flag,stateCopy,exp1,exp2,exp3);

       
    }else if(exp4 === true || exp5 === true || exp6 === true){

        potencyOperations(flag,stateCopy,operation,exp4,exp5,exp6);

    }else if(exp7 === true || exp8 === true || exp9 === true){

        squareRootOperations(flag,stateCopy,operation,exp7,exp8,exp9);

    }else{
        basicOperations(stateCopy);
        flag.overWrite = true;

    }

}

export default makingAnOperation;