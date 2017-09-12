var PL_data = require("./lib/js/src/pL_data.js");

function setLanguage(language) {

    var lower = language.toLowerCase();
    if (lower === 'nand') {
        PL_data.nand[/* execute */0] = PL_data.NAND[/* execute */0];
        PL_data.nand[/* addSS */1] = PL_data.NAND_SS[/* addSS */0];
    } else if (lower === 'nand++') {
        PL_data.nand[/* execute */0] = PL_data.NANDPP[/* execute */0];
        PL_data.nand[/* addSS */1] = PL_data.NANDPP_SS[/* addSS */0];
    } else if (lower === 'nand<<') {
        PL_data.nand[/* execute */0] = PL_data.NANDGG[/* execute */0];
        PL_data.nand[/* addSS */1] = PL_data.NANDGG_SS[/* addSS */0];
    } else {
        throw 'Invalid language';
    }
}

function setSugar(val) {
    PL_data.nand[/* ssSwitch */2] = val;
}

function setDry(val) {
    PL_data.nand[/* dryRun */4] = val;
}

exports.setDry = setDry;
exports.setSugar = setSugar;
exports.setLanguage = setLanguage;

/* PL_data Not a pure module */
