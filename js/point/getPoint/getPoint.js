const getPoint = (e,stateCopy) =>{

    console.log("apretamos la coma");
    stateCopy.result = stateCopy.result += ".";
    e.target.disabled = true;

}

export default getPoint;