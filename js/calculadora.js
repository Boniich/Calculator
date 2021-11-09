import matches from "./matches/matches.js";


const state = {
    operation: "",
    result: "0",
}


// obtenemos una copia del estado

const getState = () => JSON.parse(JSON.stringify(state));
const stateCopy = getState();

function templateResult(){
    let resultado = stateCopy.result;
    return resultado;
}

function templateOperation(){

    let operation = stateCopy.operation;
    return operation;
}

function renderResult(){
    console.log("Original:",state);
    console.log("Copia: ",stateCopy);
    const $result = document.getElementById("result");
    $result.innerHTML = templateResult();
}

function renderOperation(){
    const $renderOperation = document.getElementById("operation");
    $renderOperation.innerHTML = templateOperation();
}


function darResultado(signoString, resultado){
    // determinamos que signo es y dividimos el string
    let valor = stateCopy.operation.split(signoString);
    console.log(valor[0]);
    console.log(stateCopy.result);

    // comvertimos los string a numeros
    let valor1 = Number.parseFloat(valor[0]);
    let valorR = Number.parseFloat(stateCopy.result);

    if(stateCopy.operation.endsWith("*")){
        console.log("Multiplicar");
        resultado = valor1 * valorR;
        console.log(`valor 1: ${valor1} * Valor: ${valorR} = Resultado`,resultado);
        stateCopy.operation = `${resultado}${signoString}`;
        stateCopy.result = `${resultado}`;
    }

    if(stateCopy.operation.endsWith("/")){
        console.log("Dividir");
        if(valorR === 0) {alert("No es posible dividir por 0"); return;} 
        resultado = valor1 / valorR;
        console.log(`valor 1: ${valor1} / Valor: ${valorR} = Resultado`,resultado);
        stateCopy.operation = `${resultado}${signoString}`;
        stateCopy.result = `${resultado}`;
    }

    if(stateCopy.operation.endsWith("+")){
        console.log("suman");
        resultado = valor1 + valorR;
        console.log(`valor 1: ${valor1} + Valor: ${valorR} = Resultado`,resultado);
        stateCopy.operation = `${resultado}${signoString}`;
        stateCopy.result = `${resultado}`;
    }
    

    if(stateCopy.operation.endsWith("-")){
        console.log("Resta");
        resultado = valor1 - valorR;
        console.log(`valor 1: ${valor1} - Valor: ${valorR} = Resultado`,resultado);
        stateCopy.operation = `${resultado}${signoString}`;
        stateCopy.result = `${resultado}`;
    }

}


function igual(){

    let resultado = 0;


    for(let i = 0; i<= stateCopy.operation.length;i++){

        if(stateCopy.operation[i] === "*"){


            darResultado("*");
            break;
        }else if(stateCopy.operation[i] === "/"){

            
            darResultado("/");
            break;
            

        }else if(stateCopy.operation[i] === "+"){

            darResultado("+", resultado);
            
            break;
                
        }else if(stateCopy.operation[i] === "-"){

            darResultado("-", resultado);
            break;
        }



    }

    // actualizamos el estado
    
    renderOperation();
    return resultado;

}

const getPoint = (signo) =>{
    console.log("Esta coma debe ser borrada");
    let point = stateCopy.result.split(".");
    stateCopy.result = point[0];
    stateCopy.operation = stateCopy.result+signo;
}


function calculadora(){
    
    let flag = false;

    document.addEventListener("click", (e) =>{

        e.preventDefault();

        
        //modificamos el state cuando se hace click en alguno de los botones

        if(e.target.matches(".btn1")){

            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "1";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result +="1";
            }

        }

        if(e.target.matches(".btn2")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "2";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "2";
            }
            
            
        }

        
        if(e.target.matches(".btn3")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "3";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "3";
            }
            
            
        }

        if(e.target.matches(".btn4")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "4";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "4";
            }
            
            
        }

        if(e.target.matches(".btn5")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "5";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "5";
            }
            
            
        }

        if(e.target.matches(".btn6")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "6";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "6";
            }
            
            
        }

        if(e.target.matches(".btn7")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "7";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "7";
            }
            
            
        }

        if(e.target.matches(".btn8")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "8";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "8";
            }
            
            
        }

        if(e.target.matches(".btn9")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "9";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "9";
            }
            
            
        }

        if(e.target.matches(".btn0")){


            if(stateCopy.result === "0" || flag === true){
                stateCopy.result = "0";
                flag = false;
                document.querySelector(".btnComa").disabled = false;
            }else{
                stateCopy.result = stateCopy.result += "0";
            }
            
            
        }

        // coma

        if(e.target.matches(".btnComa")){
            console.log("apretamos la coma");
            // si no hay un numero despues de la coma, si se apreta una operacion, la coma debe desaparecer
            stateCopy.result = stateCopy.result += ".";

            e.target.disabled = true;
        }

        // resets

        if(e.target.matches(".btnCE")){
            console.log("Estoy haciendo click en boton CE");
            stateCopy.result = "0";
            console.log("Reseteado el valor del 'resultado'");
            document.querySelector(".btnComa").disabled = false;

        }

        if(e.target.matches(".btnC")){
            console.log("Estoy haciendo click en boton C");
            stateCopy.operation = "";
            stateCopy.result = "0";
            document.querySelector(".btnComa").disabled = false;
            
        }

        // Operaciones

        if(e.target.matches(".multiplicar")){

            if(stateCopy.operation.endsWith("*")){
                console.log("Encontre el * en la ultima posicion");
                igual();
                flag = true;
            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){
                getPoint("*");

            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "*";
                flag = true; 
            }

            
        }


        if(e.target.matches(".dividir")){
            if(stateCopy.operation.endsWith("/")){
                console.log("Encontre el / en la ultima posicion");
                igual();
                flag = true;
            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){
                getPoint("/");
            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "/";
                flag = true; 
            }

        }




        if(e.target.matches(".mas")){

            if(stateCopy.operation.endsWith("+")){

                igual();
                flag = true;

            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

                getPoint("+");
            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "+";
                flag = true;
                
            }

     
         
            
           

        }

        if(e.target.matches(".menos")){

            if(state.operation.endsWith("-")){

                igual();
                flag = true;

            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

                getPoint("-");
            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "-"; 
                flag = true;
                
            }
        }

        if(e.target.matches(".igual")){
            
            igual();

            
        }

        renderResult();
        renderOperation();
    })
  

}

document.addEventListener("DOMContentLoaded", renderResult);



export default calculadora;