const operations = (stateCopy,signo,mathExpression,value1,value2,equal) =>{
    let list = document.getElementById("list");
    let result = 0;

    switch (signo) {

        case "+": 
            console.log("Esto es una suma");
            result = value1 + value2;
            break;

        case "-": 
            console.log("Esto es una resta");
            result = value1 - value2;
            break;

        case "x": 
            console.log("Esto es una multiplicacion");
            result = value1 * value2;
            break;

        case "÷": 
            console.log("Esto es una division");
            
            if(value2 === 0){
            alert("no es posible dividir por 0"); 
            stateCopy.operation = "";
            stateCopy.result = "0";
            return};
            result = value1 / value2;
            
            break; 
            
        case "%":
            result = (value1*value2)/100;

            break;
        default:
            break;
    }

    switch(equal){

        case false:
        console.log("result",result);
        stateCopy.operation = `${result}${signo}`;
        stateCopy.result = `${result}`;

        break;

        case true:
        console.log("result",result);
        stateCopy.operation = `${mathExpression}=`;
        stateCopy.result = `${result}`;
        break;
    }

    list.innerHTML += `
    <div class="record-box">
    <p id="mathExpression">${mathExpression}=</p>
    <p id="record-result">${result}</p>
    </div>`;
}

export default operations;