import getBasicOperations from "./basicOperations/getBasicOperations.js";
import makingAnOperation from "./makingAnOperation/makingAnOperation.js";
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


function standardMode(){
    

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

        //negative sing
        if(e.target.matches(".signoNegativo")){
            
            let result = new String(stateCopy.result);
            
            let expression = /\-[0-9]+/

            if(!expression.test(stateCopy.result)){
                console.log("agregando signo menos");
                stateCopy.result = "-" + stateCopy.result;
            }else{

                let resultFragments = result.split("-");
                stateCopy.result = "0";
                stateCopy.result = resultFragments[1];

            }
        
        }

        //percentage

        if(e.target.matches(".btnPorcentaje")){getBasicOperations(flag,"%",stateCopy);}

        
        // comma
        if(e.target.matches(".btnComa")){getPoint(e,stateCopy)}

        // resets


        if(e.target.matches(".btnCE") || e.target.matches(".btnC")){resets(e,stateCopy);}

        // Operacions


        if(e.target.matches(".multiplicar")){getBasicOperations(flag,"*",stateCopy);}


        if(e.target.matches(".dividir")){getBasicOperations(flag,"÷",stateCopy);}

        
        if(e.target.matches(".mas")){getBasicOperations(flag,"+",stateCopy);}

        if(e.target.matches(".menos")){getBasicOperations(flag,"-",stateCopy);}

        //fracciones
        // Cuando es una suma, se dividen cada "1/result" y se suman entre si

        if(e.target.matches(".fracciones")){

            let operation = new String(stateCopy.operation);
            let result = stateCopy.result;  
            // Esta expression regular sirve para casos como "1/(10)+"
            let expression = /(1\/\(\-?[0-9 | .]+\))./g;
            // Esta expression regular sirve para casos como "3+"
            let expression2 = /([0-9 | .]+[\+ | \- | \* | \÷])/g

            let exp1 = expression.test(operation);
            let exp2 = expression2.test(operation);


            if(result === "0"){
                alert("No es posible dividir por 0");
                return;
            }
            

            if(exp1 === true || exp2 === true){
                stateCopy.operation += `1/(${result})`;
                stateCopy.result = 1/result;
                flag.overWrite = true;

            }else{
                stateCopy.operation = `1/(${result})`;
                stateCopy.result = 1/result;
                flag.overWrite = true;
           }

        }

        if(e.target.matches(".igual")){
            let signo = stateCopy.operation.substr(2);
            console.log(`${signo}`);
            makingAnOperation(stateCopy,signo);
        }

        // Renders

        renderResult(state,stateCopy);
        renderOperation(stateCopy);
    })
  

}

document.addEventListener("DOMContentLoaded", renderResult(state,stateCopy));



export default standardMode;