# nand-js

See https://github.com/juan-esteller/NAND for a description of the language and documentation.

## Usage
Install with `npm install nand-js --save-dev`. Then from your code:

```javascript
var nand = require('nand-js');

var program = 'y_0 := x_0 NAND x_1\n'
            + 'y_1 := x_2 NAND x_3';

var input = '0111';
var language = 'NAND++';
var syntacticSugar = true;

var result = nand.interpret(program, input, language /* = 'NAND' */, syntacticSugar /* = true */);
console.log(result);

// Prints the unsweetened program to the console
nand.unsweeten(program, language /* = NAND */);
```

## Building
`npm run build`
