const negSign = (stateCopy) =>{

    let result = new String(stateCopy.result);

    let expression = /\-([0-9 | .]+)/
    let flagNegSign = expression.test(stateCopy.result);
    let numbers = expression.exec(result);
    console.log(flagNegSign);
    console.log(numbers);


    if(stateCopy.result === "0"){return;}

    if(flagNegSign === false){
        console.log("agregando signo menos");
        stateCopy.result = "-" + stateCopy.result;
    }else{
        console.log("Borrando signo");
        stateCopy.result = numbers[1];
    }

}

export default negSign;