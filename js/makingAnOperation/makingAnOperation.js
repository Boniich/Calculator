import renderOperation from "../render/renderOperation/renderOperation.js";

const makingAnOperation = (stateCopy,signoString) =>{
    // determinamos que signo es y dividimos el string
    let result = 0,
    valor = stateCopy.operation.split(signoString);
    console.log(valor);
    console.log(valor[0]);
    console.log(stateCopy.result);


    // comvertimos los string a numeros
    let valor1 = Number.parseFloat(valor[0]);
    let valorR = Number.parseFloat(stateCopy.result);

    if(valor[0] === ""){
        valor1 = Number.parseFloat(`-${valor[1]}`);
    }
    
    if(stateCopy.operation.endsWith("*")){
        console.log("Multiplicar");
        result = valor1 * valorR;
        console.log(`valor 1: ${valor1} * Valor: ${valorR} = Resultado`,result);
        stateCopy.operation = `${result}${signoString}`;
        stateCopy.result = `${result}`;
    }

    if(stateCopy.operation.endsWith("÷")){
        console.log("Dividir");
        if(valorR === 0) {alert("No es posible dividir por 0"); return;} 
        result = valor1 / valorR;
        console.log(`valor 1: ${valor1} ÷ Valor: ${valorR} = Resultado`,result);
        stateCopy.operation = `${result}${signoString}`;
        stateCopy.result = `${result}`;
    }

    if(stateCopy.operation.endsWith("+")){
        console.log("suman");
        result = valor1 + valorR;
        console.log(`valor 1: ${valor1} + Valor: ${valorR} = Resultado`,result);
        stateCopy.operation = `${result}${signoString}`;
        stateCopy.result = `${result}`;
    }
    

    if(stateCopy.operation.endsWith("-")){
        console.log("Resta");
        result = valor1 - valorR;
        console.log(`valor 1: ${valor1} - Valor: ${valorR} = Resultado`,result);
        stateCopy.operation = `${result}${signoString}`;
        stateCopy.result = `${result}`;
    }

    if(stateCopy.operation.endsWith("%")){
        console.log("Porcentaje");
        result = (valor1*valorR)/100;
        console.log("Resultado del porcentaje es: ",result);
        stateCopy.operation = `${result}${signoString}`;
        stateCopy.result = `${result}`;
    }

    renderOperation(stateCopy);

}

export default makingAnOperation;