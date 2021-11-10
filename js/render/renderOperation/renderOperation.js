const renderOperation = (stateCopy) =>{
    const operation = stateCopy.operation,
    $renderOperation = document.getElementById("operation");
    $renderOperation.innerHTML = operation;
}

export default renderOperation;