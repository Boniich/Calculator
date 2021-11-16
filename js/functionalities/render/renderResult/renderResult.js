const renderResult = (state,stateCopy) =>{

    console.log("Original:",state);
    console.log("Copia: ",stateCopy);
    const result = stateCopy.result,
    $renderResult = document.getElementById("result");
    // $result.innerHTML = templateResult();
    $renderResult.innerHTML = result;
}

export default renderResult;