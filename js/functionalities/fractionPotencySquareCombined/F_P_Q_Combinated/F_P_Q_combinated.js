import fractionPotency from "../fractionPotency/fractionPotency.js";
import fractionSquareRoot from "../fraction_squareRoot/fractionSquareRoot.js";
import potencyFraction from "../potencyFraction/potencyFraction.js";
import potencySquareRoot from "../potencySquareRoot/potencySquareRoot.js";
import squareRootPotency from "../squareRootPotency/squareRootPotency.js";
import squareRootFraction from "../squareRoot_fraction/squareRootFraction.js";

const F_P_Q_Combinated = (flag,stateCopy,fract_potency,potency_fraction,
    fraction_squareRoot,squareRoot_fraction,squareRoot_potency,potency_squareRoot,equal) =>{

    let operation = new String(stateCopy.operation,equal);

    if(fract_potency === true){fractionPotency(stateCopy,operation,equal)};
    if(potency_fraction === true){potencyFraction(stateCopy,operation,equal)};
    if(fraction_squareRoot === true){fractionSquareRoot(stateCopy,operation,equal)};
    if(squareRoot_fraction === true){squareRootFraction(stateCopy,operation,equal)}
    if(squareRoot_potency === true){squareRootPotency(stateCopy,operation,equal)};
    if(potency_squareRoot === true){potencySquareRoot(stateCopy,operation,equal)};
    



}

export default F_P_Q_Combinated;