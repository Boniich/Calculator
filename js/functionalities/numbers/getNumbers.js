
const getNumbers = (flag,number,stateCopy) =>{


    if(stateCopy.result === "0" || flag.overWrite === true){
        stateCopy.result = number;
        flag.overWrite = false;
        document.querySelector(".btnComa").disabled = false;
    }else{
        stateCopy.result = stateCopy.result +=number;
    }


}




export default getNumbers;