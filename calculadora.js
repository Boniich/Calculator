

const state = {
    result: [0],
}

function template(){

    let resultado = state.result;

    return resultado;
}

function render(){

    console.log(state);
    const $result = document.getElementById("result");
    $result.innerHTML = template();
}


function igual(){

    let valor = state.result[0] + state.result[2];

    return valor;

}

function calculadora(){


    document.addEventListener("click", (e) =>{

        e.preventDefault();
        
        //modificamos el state cuando se hace click en alguno de los botones

        if(e.target.matches(".btn1")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 1 al state");

            if(state.result[0] === 0){
                state.result[0] = 1;
            }else{
                state.result.push(1);
            }
            
   
        }

        if(e.target.matches(".btn2")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");


            if(state.result[0] === 0){
                state.result[0] = 2;
            }else{
                state.result.push(2);
            }
            
     
        }

        if(e.target.matches(".mas")){
            console.log("estado previo del state",state);
            console.log("Agregamos el valor 2 al state");
            state.result.push("+");
        }

        if(e.target.matches(".igual")){
            state.result.push(igual());
            
        }

        render();
    })
  

}

document.addEventListener("DOMContentLoaded", render);



export default calculadora;