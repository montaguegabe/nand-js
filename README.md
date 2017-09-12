# nand-js

See https://github.com/juan-esteller/NAND for a description of the language and documentation.

## Installation
`npm install nand-js --save`

or else (if you are using with iJavascript notebooks):

`npm install nand-js -g`

## Usage
```javascript
var nand = require('nand-js');

var program = 
`y_0 := x_0 NAND x_1
 y_1 := x_2 NAND x_3`;

var input = '0111';
var language = 'NAND++';
var syntacticSugar = true;

var result = nand.interpret(program, input, language /* = 'NAND' */, syntacticSugar /* = true */);
console.log(result);

// Prints the unsweetened program to the console
nand.unsweeten(program, language /* = NAND */);
```

## Building
Use `npm run build` to build the OCaml into JS via Bucklescript. The repository simply provides a light wrapper over the functions.
