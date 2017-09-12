var executeString = require('./lib/js/src/prog_exec.js');
var flags = require('./dynamicFlags.js');
var Printf = require('./printf.js');

// Runs a given NAND program on input
function interpret(program, input, language, sugar) {

    if (language === undefined) {
        language = 'NAND';
    }

    if (sugar === undefined) {
        sugar = true;
    }

    if (input === undefined) {
        throw 'Not enough arguments'; 
    }

    flags.setLanguage(language);
    flags.setSugar(sugar);
    flags.setDry(false);
    return executeString.executeString(program, input);
}

// Unsweetens a program
function unsweetenPrint(program, language) {

    if (language === undefined) {
        language = 'NAND';
    }

    flags.setLanguage(language);
    flags.setSugar(true);
    flags.setDry(true);

    executeString.executeString(program, '0');
}

function unsweeten(program, language) {

    // TODO: Implement
}

exports.interpret = interpret;
exports.unsweeten = unsweetenPrint;