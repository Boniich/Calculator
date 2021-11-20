
const resets = (e,stateCopy) =>{

    stateCopy.result = "0";
    document.querySelector(".btnComa").disabled = false;
    if(e.target.matches(".btnC")){stateCopy.operation = ""};

}

export default resets;