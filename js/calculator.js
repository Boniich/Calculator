import getBasicOperations from "./basicOperations/getBasicOperations.js";
import equal from "./equal/equal.js";
import getNumbers from "./numbers/getNumbers.js";
import getPoint from "./point/getPoint/getPoint.js";
import renderOperation from "./render/renderOperation/renderOperation.js";
import renderResult from "./render/renderResult/renderResult.js";
import resets from "./resets/resets.js";

const state = {
    operation: "",
    result: "0",
}


// obtenemos una copia del estado

const getState = () => JSON.parse(JSON.stringify(state));
const stateCopy = getState();


const flag = {
    overWrite: false,
}


function calculator(){
    

    document.addEventListener("click", (e) =>{

        e.preventDefault();
      

        
        //Numbers
        

        if(e.target.matches(".btn1")){getNumbers(flag,"1",stateCopy);}

        if(e.target.matches(".btn2")){getNumbers(flag,"2",stateCopy);}

        if(e.target.matches(".btn3")){getNumbers(flag,"3",stateCopy);}

        if(e.target.matches(".btn4")){getNumbers(flag,"4",stateCopy);}

        if(e.target.matches(".btn5")){getNumbers(flag,"5",stateCopy);}

        if(e.target.matches(".btn6")){getNumbers(flag,"6",stateCopy);}

        if(e.target.matches(".btn7")){getNumbers(flag,"7",stateCopy);}

        if(e.target.matches(".btn8")){getNumbers(flag,"8",stateCopy);}

        if(e.target.matches(".btn9")){getNumbers(flag,"9",stateCopy);}

        if(e.target.matches(".btn0")){getNumbers(flag,"0",stateCopy);}

        //percentage

        if(e.target.matches(".btnPorcentaje")){getBasicOperations(flag,"%",stateCopy);}

        
        // comma
        if(e.target.matches(".btnComa")){getPoint(e,stateCopy)}

        // resets


        if(e.target.matches(".btnCE") || e.target.matches(".btnC")){resets(e,stateCopy);}

        // Operacions


        if(e.target.matches(".multiplicar")){getBasicOperations(flag,"*",stateCopy);}


        if(e.target.matches(".dividir")){getBasicOperations(flag,"/",stateCopy);}

        
        if(e.target.matches(".mas")){getBasicOperations(flag,"+",stateCopy);}

        if(e.target.matches(".menos")){getBasicOperations(flag,"-",stateCopy);}

        if(e.target.matches(".igual")){equal(stateCopy);}

        // Renders

        renderResult(state,stateCopy);
        renderOperation(stateCopy);
    })
  

}

document.addEventListener("DOMContentLoaded", renderResult(state,stateCopy));



export default calculator;