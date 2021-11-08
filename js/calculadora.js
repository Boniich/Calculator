import matches from "./matches/matches.js";


const state = {
    operation: "",
    result: "0",
}

function template(){

    let resultado = state.result;

    return resultado;
}

function templateOperation(){

    let operation = state.operation;
    return operation;
}

function render(){

    console.log(state);
    const $result = document.getElementById("result");
    $result.innerHTML = template();
}

function renderOperation(){
    const $renderOperation = document.getElementById("operation");
    $renderOperation.innerHTML = templateOperation();
}


function darResultado(signoString, resultado){
    // determinamos que signo es y dividimos el string
    let valor = state.operation.split(signoString);
    console.log(valor[0]);
    console.log(state.result);

    // comvertimos los string a numeros
    let valor1 = Number.parseFloat(valor[0]);
    let valorR = Number.parseFloat(state.result);

    let signoMas = Number.parseInt(signoString);
    console.log(signoMas);

    console.log("suman");
    console.log("valor 1:",valor1);
    console.log("valor 2:",valorR);

    if(state.operation.endsWith("*")){
        resultado = valor1 * valorR;
        console.log(`valor 1: ${valor1} * Valor: ${valorR} = Resultado`,resultado);
        state.operation = `${resultado}${signoString}`;
        state.result = resultado;
    }

    if(state.operation.endsWith("/")){

        if(valorR === 0) {alert("No es posible dividir por 0"); return;} 
        resultado = valor1 / valorR;
        console.log(`valor 1: ${valor1} / Valor: ${valorR} = Resultado`,resultado);
        state.operation = `${resultado}${signoString}`;
        state.result = resultado;
    }

    if(state.operation.endsWith("+")){
        resultado = valor1 + valorR;
        console.log(`valor 1: ${valor1} + Valor: ${valorR} = Resultado`,resultado);
        state.operation = `${resultado}${signoString}`;
        state.result = resultado;
    }
    

    if(state.operation.endsWith("-")){
        resultado = valor1 - valorR;
        console.log(`valor 1: ${valor1} - Valor: ${valorR} = Resultado`,resultado);
        state.operation = `${resultado}${signoString}`;
        state.result = resultado;
    }

}


function igual(){

    let resultado = 0;


    for(let i = 0; i<= state.operation.length;i++){

        if(state.operation[i] === "*"){


            darResultado("*");
            break;
        }else if(state.operation[i] === "/"){

            
            darResultado("/");
            break;
            

        }else if(state.operation[i] === "+"){

            darResultado("+", resultado);
            
            break;
                
        }else if(state.operation[i] === "-"){

            darResultado("-", resultado);
        }



    }

    // actualizamos el estado
    
    renderOperation();
    return resultado;

}




function calculadora(){

    let flag = false;

    document.addEventListener("click", (e) =>{

        e.preventDefault();

        
        //modificamos el state cuando se hace click en alguno de los botones

        if(e.target.matches(".btn1")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 1 al state");

           
            if(state.result === "0" || flag === true){
                state.result = "1";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "1";
            }

        }

        if(e.target.matches(".btn2")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "2";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "2";
            }
            
            
        }

        
        if(e.target.matches(".btn3")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "3";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "3";
            }
            
            
        }

        if(e.target.matches(".btn4")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "4";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "4";
            }
            
            
        }

        if(e.target.matches(".btn5")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "5";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "5";
            }
            
            
        }

        if(e.target.matches(".btn6")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "6";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "6";
            }
            
            
        }

        if(e.target.matches(".btn7")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "7";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "7";
            }
            
            
        }

        if(e.target.matches(".btn8")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "8";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "8";
            }
            
            
        }

        if(e.target.matches(".btn9")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "9";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "9";
            }
            
            
        }

        if(e.target.matches(".btn0")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(state.result === "0" || flag === true){
                state.result = "0";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                state.result = state.result += "0";
            }
            
            
        }

        // coma

        if(e.target.matches(".btnComa")){
            console.log("apretamos la coma");
            // si no hay un numero despues de la coma, si se apreta una operacion, la coma debe desaparecer
            state.result = state.result += ".";

            e.target.disabled = true;
        }

        // resets

        if(e.target.matches(".btnCE")){
            console.log("Estoy haciendo click en boton CE");
            state.result = "0";
            console.log("Reseteado el valor del 'resultado'");
            document.querySelector(".btnComa").disabled = false;

        }

        if(e.target.matches(".btnC")){
            console.log("Estoy haciendo click en boton C");
            state.operation = "";
            state.result = "0";
            document.querySelector(".btnComa").disabled = false;
            
        }

        // Operaciones

        if(e.target.matches(".multiplicar")){
            console.log("estado previo del state",state);

            if(state.operation.endsWith("*")){
                console.log("Encontre el * en la ultima posicion");
                igual();
                flag = true;
            }else{
                state.operation = state.result;
                state.operation += "*";
                flag = true; 
            }

            
        }


        if(e.target.matches(".dividir")){
            console.log("estado previo del state",state);

            if(state.operation.endsWith("/")){
                console.log("Encontre el / en la ultima posicion");
                igual();
                flag = true;
            }else{
                state.operation = state.result;
                state.operation += "/";
                flag = true; 
            }

        }


        if(e.target.matches(".mas")){
            console.log("estado previo del state",state);

   

            if(state.operation.endsWith("+")){

                console.log("Encontre el + en la ultima posicion");
                igual();
                flag = true;

            }else if(state.result.endsWith(".") || state.result.endsWith(".0")){
                console.log("Esta coma debe ser borrada");
                let valor = state.result.split(".");
                state.result = valor[0];
                state.operation = state.result+"+";
            }else{
                state.operation = state.result;
                state.operation += "+"; 
                flag = true;
                
            }

              
        }

        if(e.target.matches(".menos")){
            console.log("estado previo del state",state);
  
            if(state.operation.endsWith("-")){

                console.log("Encontre el + en la ultima posicion");
                igual();
                flag = true;

            }else{
                state.operation = state.result;
                state.operation += "-"; 
                flag = true;
                
            }
        }

        if(e.target.matches(".igual")){
            
            igual();

            
        }

        render();
        renderOperation();
    })
  

}

document.addEventListener("DOMContentLoaded", render);



export default calculadora;