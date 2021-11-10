
const getNumbers = (flag,number,stateCopy) =>{

    const flagComma = document.querySelector(".btnComa").disabled = false;


    if(stateCopy.result === "0" || flag.overWrite === true){
        stateCopy.result = number;
        flag.overWrite = false;
        flagComma;
    }else{
        stateCopy.result = stateCopy.result +=number;
    }


}




export default getNumbers;