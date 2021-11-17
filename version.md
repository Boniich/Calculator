



# Version 1.5.2


## New Features


### Fractions
- Added buttons of `1/x`.
- Button of `1/x` divide numerator `1` for denominator `x` and show the result
- It is possible add until two `1/x`, separete by a sing, like `1/(2)-1(32)`.  
- It is possible add expression like `3+1/(10)`.  
- Now it is possible make an operation like `1/(10)*1/(2)` - Need a rework 
- Now is possible make an operation like `5+1(10)`
- Now is possble an operation is as a expression like `1/(3) + 4`
- is possible make negative operation with fractions - still need be teste a lot-

### Potency

- Added button of `x^`.
- Button of potence add a sqr(x) in operation taking the number of `result` and after add the sqr(x) in operation, show the result of potence in `result`.  
- Now it is possible add expression like: `sqr(3) + sqr(3)`, `sqr(3) + 3` and `3 + sqr(3)`
- Now it is possible add operations like `sqr(3) + sqr(3)`, `sqr(3) + ` and `3 + sqr(3)`

### Raiz

- Added buttons of `√`.

## Features in process

- Not added funcionality `√`



## Problems Fixed
- Button `+/-`: Add and quit the sign `-` without give an `undefined`.
- Fixed that was not possible change of denominator when it was a single expression like `1/(3)`

## Current Problems

- Operations with negative numbers: It is not working properly.
- The point is repeting more than 1 time
- When change the sing if the `result` is different to the `operation` it overwrite the value of `operation` with `result`
- If you have the expression `3+1/(3)` and press again `1/x` it add a new `1/(x)` instance of remplace the denominator of orignal `1/(x)`
- If you have the expression `1/(3)+1/(3)` and press again `1/x` it add a new `1/(x)` at operation instance of remplace the denominator of last `1/(x)`

- If you have the expression `3 + sqr(3)` and press again `x^` it add a new `sqr(x)` instance of remplace the denominator of last `sqr(x)`
- If you have the expression `sqr(x) + sqr(x)` and press again `x^` it add a new `sqr(x)` at operation instance of remplace the denominator of last `sqr(x)`



---------------------------------
# version 1.1.1

## Features

- Refactor for deleted useless code

## Current problems

- Button `+/-`: his funcionality is not ready yet.   
- Operations with negative numbers: It is not working properly.   