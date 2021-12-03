import getPoint from "./functionalities/point/getPoint/getPoint.js";
import renderOperation from "./functionalities/render/renderOperation/renderOperation.js";
import getNumbers from "./functionalities/numbers/getNumbers.js";
import renderResult from "./functionalities/render/renderResult/renderResult.js";
import resets from "./functionalities/resets/resets.js";
import fraction from "./functionalities/fractions/fraction/fraction.js";
import potency from "./functionalities/allPotency/potency/potency.js";
import squareRoot from "./functionalities/allSquareRoot/squareRoot/squareRoot.js";
import mathSigns from "./functionalities/mathSigns/mathSigns.js";
import negSign from "./helpers/negSign/negSign.js";
import equal from "./functionalities/equal/equal.js";
import recoil from "./helpers/recoil/recoil.js";

const state = {
    operation: "",
    result: "0",
}

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
        if(e.target.matches(".signoNegativo")){negSign(stateCopy);}

        //percentage

        if(e.target.matches(".btnPorcentaje")){mathSigns(flag,stateCopy,"%")};

        
        // comma
        if(e.target.matches(".btnComa")){getPoint(e,stateCopy)}

        // resets


        if(e.target.matches(".btnCE") || e.target.matches(".btnC")){resets(e,stateCopy);}

        // Operacions


        if(e.target.matches(".multiply")){mathSigns(flag,stateCopy,"x")};


        if(e.target.matches(".dividir")){mathSigns(flag,stateCopy,"÷")};

        
    
        if(e.target.matches(".subtract")){mathSigns(flag,stateCopy,"-")};


        if(e.target.matches(".sum")){mathSigns(flag,stateCopy,"+")};

        //fractions
        if(e.target.matches(".fraction")){fraction(stateCopy,flag);}

        // potency

        if(e.target.matches(".potency")){potency(stateCopy,flag);}

        //squareRoot

        if(e.target.matches(".squareRoot")){squareRoot(stateCopy,flag);};


        if(e.target.matches(".igual")){equal(flag,stateCopy);}


        if(e.target.matches(".recoil")){recoil(stateCopy)};

        // Renders

        renderResult(stateCopy);
        renderOperation(stateCopy);
    })
  

}

document.addEventListener("DOMContentLoaded", renderResult(stateCopy));



export default standardMode;