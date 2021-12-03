const renderResult = (stateCopy) =>{

    console.log("Copia: ",stateCopy);
    const result = stateCopy.result,
    $renderResult = document.getElementById("result");
    $renderResult.innerHTML = result;
}

export default renderResult;