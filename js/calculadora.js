import getPoint from "./deletePoint/getPoint.js";
import equal from "./equal/equal.js";
import renderOperation from "./render/renderOperation/renderOperation.js";
import renderResult from "./render/renderResult/renderResult.js";

const state = {
    operation: "",
    result: "0",
}


// obtenemos una copia del estado

const getState = () => JSON.parse(JSON.stringify(state));
const stateCopy = getState();


// const bandera = {
//     flag: false,
// }


// function getNumbers(number){

    

//         if(stateCopy.result === "0" || bandera.flag === true){
//             stateCopy.result = number;
//             bandera.flag = false;
//             document.querySelector(".btnComa").disabled = false;
//         }else{
//             stateCopy.result = stateCopy.result +=number;
//         }



//     // if(e.target.matches(".mas")){

//     //     if(stateCopy.operation.endsWith("+")){

//     //         // igual();
//     //         equal(stateCopy);
//     //         // flag = true;
//     //         bandera.flag = true;

//     //     }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

//     //         getPoint("+",stateCopy);
//     //     }else{
//     //         stateCopy.operation = stateCopy.result;
//     //         stateCopy.operation += "+";
//     //         // flag = true;
//     //         bandera.flag = true;
            
//     //     }

//     // }

// }


function calculadora(){
    
    let flag = false;
    
    // bandera.flag = false;

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
        // if(e.target.matches(".btn1")){
        //     getNumbers("1");
        // }
        

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
                // igual();
                equal(stateCopy);
                flag = true;
            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){
                getPoint("*",stateCopy);

            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "*";
                flag = true; 
            }

            
        }


        if(e.target.matches(".dividir")){
            if(stateCopy.operation.endsWith("/")){
                console.log("Encontre el / en la ultima posicion");
                // igual();
                equal(stateCopy);
                flag = true;
            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){
                getPoint("/",stateCopy);
            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "/";
                flag = true; 
            }

        }




        if(e.target.matches(".mas")){

            if(stateCopy.operation.endsWith("+")){

                // igual();
                equal(stateCopy);
                flag = true;

            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

                getPoint("+",stateCopy);
            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "+";
                flag = true;
                
            }

     
         
            
           

        }

        
        // if(e.target.matches(".mas")){

        //     if(stateCopy.operation.endsWith("+")){

        //         // igual();
        //         equal(stateCopy);
        //         // flag = true;
        //         bandera.flag = true;

        //     }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

        //         getPoint("+",stateCopy);
        //     }else{
        //         stateCopy.operation = stateCopy.result;
        //         stateCopy.operation += "+";
        //         // flag = true;
        //         bandera.flag = true;
                
        //     }

     
        // }

        if(e.target.matches(".menos")){

            if(stateCopy.operation.endsWith("-")){

                // igual();
                equal(stateCopy);
                flag = true;

            }else if(stateCopy.result.endsWith(".") || stateCopy.result.endsWith(".0")){

                getPoint("-",stateCopy);
            }else{
                stateCopy.operation = stateCopy.result;
                stateCopy.operation += "-"; 
                flag = true;
                
            }
        }

        if(e.target.matches(".igual")){
            
            // igual();
            equal(stateCopy);

            
        }

        renderResult(state,stateCopy);
        renderOperation(stateCopy);
    })
  

}

document.addEventListener("DOMContentLoaded", renderResult(state,stateCopy));



export default calculadora;