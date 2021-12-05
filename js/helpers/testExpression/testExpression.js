const testExpression = (stateCopy,typeOperation) =>{

    let operation = new String(stateCopy.operation)
    let expression;
    let test = false;
    switch (typeOperation) {
        //fractions
        case "2f":
            expression = /(1\/\(\-?[0-9 | .]+\))([\+ | \x |\÷ |\-])(1\/\(\-?[0-9 | .]+\))/g;
            break;
        case "nf":
            expression = /(\-?[0-9 | .]+([\+ | \x |\÷ |\-])1\/\(\-?[0-9 | .]+\))/g;
            break;
        case "fn":
            expression = /(1\/\(\-?[0-9 | .]+\)([\+ | \x |\÷ |\-])$)/g;
            break;
        //potency 
        case "pp":
            expression = /(sqr\(\-?[0-9 | .]+\))([\+ | \x |\÷ |\-])(sqr\(\-?[0-9 | .]+\))/g;
            break;
        case "np":
            expression = /(\-?[0-9 | .]+)([\+ | \x |\÷ |\-])(sqr\(\-?[0-9 | .]+\))/g
            break;
        case "pn":
            expression = /(sqr\(\-?[0-9 | .]+\)([\+ | \x |\÷ |\-])$)/g;
            break;
        //square root
        case "ss":
            expression = /(√\([0-9 | .]+\))([\+ | \x |\÷ |\-])(√\([0-9 | .]+\))/g;
            break;
        case "ns":
            expression = /(\-?[0-9 | .]+)([\+ | \x |\÷ |\-])(√\([0-9 | .]+\))/g
            break;
        case "sn":
            expression = /(√\([0-9 | .]+\)([\+ | \x |\÷ |\-])$)/g
            break;
        // combinated operations with fractions, potency and squareroot
        case "fp":
            expression = /(1\/\(\-?[0-9 | .]+\))([\+ | \x |\÷ |\-])(sqr\(\-?[0-9 | .]+\))/g;
            break;
        case "pf":
            expression = /(sqr\(\-?[0-9 | .]+\))([\+ | \x |\÷ |\-])(1\/\(\-?[0-9 | .]+\))/g;
            break;
        case "fs":
            expression = /(1\/\(\-?[0-9 | .]+\))([\+ | \x |\÷ |\-])(√\([0-9 | .]+\))/g;
            break;
        case "sf":
            expression = /(√\([0-9 | .]+\))([\+ | \x |\÷ |\-])(1\/\(\-?[0-9 | .]+\))/g;
            break;
        case "sp":
            expression = /(√\([0-9 | .]+\))([\+ | \x |\÷ |\-])(sqr\(\-?[0-9 | .]+\))/g;
            break;
        case "ps":
            expression = /(sqr\(\-?[0-9 | .]+\))([\+ | \x |\÷ |\-])(√\([0-9 | .]+\))/g;
            break;
        case "numSign":
            expression = /([0-9 | .]+[\+ | \x | \÷ |\-])/g
            break;
        case "testEqual": 
            expression = /([0-9]+)([\+ | \x |\÷ |\% |\-])([0-9]+)(\=)/g; 
            break;
        case "testSpecial":
            expression = /(1?[\/ | \√ | sqr]*\(?\-?[0-9 | 0.0]+\)?)([\+ | \x |\÷ |\-])(1?[\/ | \√ | sqr]*\(?\-?[0-9 | 0.0]+\)?)/g;
            break;
        
        default:

            break;
    }



    test = expression.test(operation);
    return test;
}

export default testExpression;