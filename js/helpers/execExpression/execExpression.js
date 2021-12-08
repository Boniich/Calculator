const execExpression = (stateCopy,typeOperation) =>{

    let operation = new String(stateCopy.operation);
    let expression;
    let exec = [];

    switch (typeOperation) {
        case "endsWithSign":
            console.log("endWithSign");
            expression = /(1?[\/ | \√ | sqr]*\(?\-?[0-9 | 0.0]+\)?)([\+ | \x |\÷ |\% |\= |\-])/g;
            break;
        case "signBetween":
            expression = /(1?[\/ | \√ | sqr]*\(?(\-?[0-9 | 0.0]+)\)?)([\+ | \x |\÷ |\-])(1?[\/ | \√ | sqr]*\(?(\-?[0-9 | 0.0]+)\)?)?/g;;
            break;
    
        default:
            break;
    }

    exec = expression.exec(operation);
    console.log("Exe:",exec);
    return exec;

}

export default execExpression;