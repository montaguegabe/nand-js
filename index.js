var executeString = require('./lib/js/src/prog_exec.js');
var flags = require('./dynamicFlags.js');

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
function unsweeten(program, language) {

    if (language === undefined) {
        language = 'NAND';
    }

    flags.setLanguage(language);
    flags.setSugar(true);
    flags.setDry(true);

    return executeString.executeString(program, '0');
}

exports.interpret = interpret;
exports.unsweeten = unsweeten;