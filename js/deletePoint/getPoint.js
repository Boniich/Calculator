const getPoint = (signo, stateCopy) =>{
    let point = stateCopy.result.split(".");
    stateCopy.result = point[0];
    stateCopy.operation = stateCopy.result+signo;
}

export default getPoint;