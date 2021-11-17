import getBasicOperations from "./functionalities/basicOperations/getBasicOperations.js";
import makingAnOperation from "./functionalities/makingAnOperation/makingAnOperation.js";
import getPoint from "./functionalities/point/getPoint/getPoint.js";
import renderOperation from "./functionalities/render/renderOperation/renderOperation.js";
import getNumbers from "./functionalities/numbers/getNumbers.js";
import renderResult from "./functionalities/render/renderResult/renderResult.js";
import resets from "./functionalities/resets/resets.js";
import fraction from "./functionalities/fractions/fraction/fraction.js";

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
        if(e.target.matches(".fracciones")){fraction(stateCopy,flag);}

        // potencia

        if(e.target.matches(".potencia")){

            let operation = new String(stateCopy.operation);
            let result = stateCopy.result;  

            let expression = /(sqr\([0-9 | .]+\).)/g;
            let expression2 = /([0-9 | .]+[\+ | \- | \* | \÷])/g

            let exp1 = expression.test(operation);
            let exp2 = expression2.test(operation);

            
            console.log(exp1);
            console.log(exp2);


            let potencyOperation = `sqr(${result})`;
            let potencyResult = result*result;


            specialOperations(exp1,exp2,potencyOperation,potencyResult);
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