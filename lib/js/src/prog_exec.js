// Generated by BUCKLESCRIPT VERSION 1.9.1, PLEASE EDIT WITH CARE
'use strict';

var Block      = require("bs-platform/lib/js/block.js");
var Curry      = require("bs-platform/lib/js/curry.js");
var Format     = require("bs-platform/lib/js/format.js");
var Lexing     = require("bs-platform/lib/js/lexing.js");
var Printf     = require("bs-platform/lib/js/printf.js");
var $$String   = require("bs-platform/lib/js/string.js");
var PL_data    = require("./pL_data.js");
var NANDlexer  = require("../parsing/nANDlexer.js");
var NANDparser = require("../parsing/nANDparser.js");
var PL_functor = require("./pL_functor.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function executeChannel(inputToBuf, prog, input) {
  var lexbuf = Curry._1(inputToBuf, prog);
  var program = NANDparser.parseProg(NANDlexer.token, lexbuf);
  var program$1 = PL_data.nand[/* ssSwitch */2] ? Curry._1(PL_data.nand[/* addSS */1], program) : program;
  if (PL_data.nand[/* dryRun */4]) {
    Curry._1(Printf.printf(/* Format */[
              /* String */Block.__(2, [
                  /* No_padding */0,
                  /* Char_literal */Block.__(12, [
                      /* "\n" */10,
                      /* End_of_format */0
                    ])
                ]),
              "%s\n"
            ]), PL_functor.strOfProg(program$1));
    return "";
  } else {
    return Curry._2(PL_data.nand[/* execute */0], program$1, input);
  }
}

function executeFile(filename, input) {
  var startExt = $$String.rindex(filename, /* "." */46) + 1 | 0;
  var ext = $$String.sub(filename, startExt, filename.length - startExt | 0);
  if (ext !== "nand") {
    Format.printf(/* Format */[
          /* String_literal */Block.__(11, [
              "Must provide a .nand file as input\n",
              /* End_of_format */0
            ]),
          "Must provide a .nand file as input\n"
        ]);
    Pervasives.exit(0);
  }
  return executeChannel(Lexing.from_channel, Pervasives.open_in(filename), input);
}

function executeString(prog, input) {
  return executeChannel(Lexing.from_string, prog, input);
}

exports.executeChannel = executeChannel;
exports.executeFile    = executeFile;
exports.executeString  = executeString;
/* Format Not a pure module */