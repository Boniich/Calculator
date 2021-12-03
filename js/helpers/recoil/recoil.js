function recoil(stateCopy){

    let result = new String(stateCopy.result);

    if(stateCopy.result === "0"){return}

    if(stateCopy.operation === ""){

        let resultInArray = result.split("");
        console.log(resultInArray);
        
        resultInArray.pop();

        let newResult = resultInArray.join("");
        console.log("newResult", newResult);

        if(newResult === "" || newResult === "-"){
            stateCopy.result = "0";
            return;
        }

        stateCopy.result = `${newResult}`;
    }   

}

export default recoil;