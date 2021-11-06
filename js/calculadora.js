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


function igual(){

    let resultado = 0;


    for(let i = 0; i<= state.operation.length;i++){

        if(state.result[i] === "*"){

            let signo = state.result.split("*");
            let valor1 = Number.parseInt(signo[0]);
            let valor2 = Number.parseInt(signo[1]);

            resultado = valor1*valor2;

        }else if(state.result[i] === "/"){

            let signo = state.result.split("/");
            let valor1 = Number.parseInt(signo[0]);
            let valor2 = Number.parseInt(signo[1]);
            
            if(valor2 === 0){
                alert("No es posible dividir por 0")
            }else{
                resultado = valor1/valor2;
            };
            

        }else if(state.operation[i] === "+"){
            let valor = state.operation.split("+");
            // comvertimos los string a numeros
            let valor1 = Number.parseInt(valor[0]);
            // let valor2 = Number.parseInt(valor[1]);
            let valorR = Number.parseInt(state.result);
            
            // let valor1 = Number.parseInt("22");
            // let valorR = Number.parseInt("2");


            console.log("suman");
            console.log(valor1);
            console.log(valorR);
            resultado = valor1+valorR;
            console.log(resultado);
            state.operation = `${resultado}+`;
            state.result = resultado;
            renderOperation();
            break;
                
        }else if(state.result[i] === "-"){
            let valor = state.result.split("-");
            // comvertimos los string a numeros
            let valor1 = Number.parseInt(valor[0]);
            let valor2 = Number.parseInt(valor[1]);
        
            resultado = valor1-valor2;

        }



    }

    // actualizamos el estado
    
    return resultado;

}




function calculadora(){

    let flag = false;
    let bandera = 0;

    document.addEventListener("click", (e) =>{

        e.preventDefault();

        
        //modificamos el state cuando se hace click en alguno de los botones

        if(e.target.matches(".btn1")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 1 al state");

           
            if(state.result === "0" || flag === true){
                state.result = "1";
                flag = false;
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
            }else{
                state.result = state.result += "0";
            }
            
            
        }

        // Operaciones

        if(e.target.matches(".multiplicar")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            state.result = state.result += "*";
        }


        if(e.target.matches(".dividir")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            state.result = state.result += "/";
        }


        if(e.target.matches(".mas")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            if(bandera === 0 && state.operation.endsWith("+")){

                console.log("Encontre el + en la ultima posicion");
                console.log(igual());
                bandera = 1;
                flag = true;
                // flag2 = 1;
            }else if(state.operation.endsWith("+")){

                console.log("Encontre el + en la ultima posicion");
                console.log(igual());
                flag = true;
                // flag2 = 1;
            
            }else{
                state.operation = state.result;
                state.operation += "+"; 
    
                renderOperation();
                flag = true;
                // flag2 = 1;
                
            }

                          
     

        }

        if(e.target.matches(".menos")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");

            state.result = state.result += "-";
        }

        if(e.target.matches(".igual")){
            
            console.log(igual());

            
        }

        render();
    })
  

}

document.addEventListener("DOMContentLoaded", render);



export default calculadora;