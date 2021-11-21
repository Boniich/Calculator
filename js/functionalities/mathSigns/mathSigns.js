import makingAnOperation from "../makingAnOperation/makingAnOperation.js";
import deletePoint from "../point/deletePoint/deletePoint.js";

const mathSigns = (flag,stateCopy,sign) =>{

    let equal = false;
    let operation = new String(stateCopy.operation);
    let result = new String(stateCopy.result);
    let endParentesis = operation.endsWith(")");
    let point = result.endsWith(".");
    let pointAndZero = result.endsWith(".0");

    // let determineSign = /([\+ | \x |\÷ |\% |\= |\-])$/g
    // let thisSignIs = determineSign.exec(operation);
    // console.log("array",thisSignIs);


    //fractions

    let expres = /(1\/\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;
    let expression2 = /(\-?[0-9 | .]+.1\/\(\-?[0-9 | .]+\))/g
    let exp1 = expres.test(operation);
    let exp2 = expression2.test(operation);
   

    //potency

    let expression4 = /(sqr\(\-?[0-9 | .]+\)).(sqr\(\-?[0-9 | .]+\))/g;
    let expression5 = /(\-?[0-9 | .]+).(sqr\(\-?[0-9 | .]+\))/g
    let exp4 = expression4.test(operation);
    let exp5 = expression5.test(operation);

    //squareRoot

    let expression7 = /(√\([0-9 | .]+\)).(√\([0-9 | .]+\))/g;
    let expression8 = /(\-?[0-9 | .]+).(√\([0-9 | .]+\))/g
    let exp7 = expression7.test(operation);
    let exp8 = expression8.test(operation);

    // Combinate of fraction, potency and squareRoot

    let fraction_potency = /(1\/\(\-?[0-9 | .]+\)).(sqr\(\-?[0-9 | .]+\))/g;
    let potency_fraction = /(sqr\(\-?[0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;

    let fraction_squareRoot = /(1\/\(\-?[0-9 | .]+\)).(√\([0-9 | .]+\))/g;
    let squareRoot_fraction = /(√\([0-9 | .]+\)).(1\/\(\-?[0-9 | .]+\))/g;

    let squareRoot_potency = /(√\([0-9 | .]+\)).(sqr\(\-?[0-9 | .]+\))/g;
    let potency_squareRoot = /(sqr\(\-?[0-9 | .]+\)).(√\([0-9 | .]+\))/g;

    let testFraction_potency = fraction_potency.test(operation);
    let testPotency_fraction = potency_fraction.test(operation);
    let testFraction_squareRoot = fraction_squareRoot.test(operation);
    let testSquareRoot_fraction = squareRoot_fraction.test(operation);
    let testSquareRoot_potency = squareRoot_potency.test(operation);
    let testPotency_squareRoot = potency_squareRoot.test(operation);

    
    if(point === true || pointAndZero === true){
        console.log("boorando coma")
        deletePoint(sign,stateCopy);

    }else if(stateCopy.operation === ""){

        stateCopy.operation = stateCopy.result;
        stateCopy.operation += sign;
        flag.overWrite = true;
    }else if(sign === "%" && endParentesis === true){

        stateCopy.operation = "";
        stateCopy.result = "0";
    }else if(endParentesis === true && exp1 === false && exp2 === false && exp4 === false
        && exp5 === false && exp7 === false && exp8 === false && testFraction_potency === false
        && testPotency_fraction === false && testFraction_squareRoot === false && 
        testSquareRoot_fraction === false && testSquareRoot_potency === false
        && testPotency_squareRoot === false){

        console.log("Agregar signo si termina en parentesis")
        stateCopy.operation += sign;

    }else{

        console.log("test desde sum")
        makingAnOperation(flag,stateCopy,equal);
    }

    //doesnt work
    // else if(sign !== thisSignIs[1]){

    //     console.log("Aca vamos a cambiar el signos");
    //     let separateOperation = operation.split(thisSignIs[1]);
    //     console.log(separateOperation);
    //     stateCopy.operation = separateOperation[0] + sign;

    // }

}

export default mathSigns;