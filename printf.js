// TODO: Remove this unused file and achieve functionality through OCaml

var Printf = require("bs-platform/lib/js/printf.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

// HACK: We override output from BS
var buffer = [];
var capturing = false;
var customLog = function (output) {
    buffer.push(output);
};

exports.bufferCaptureMode = function(enabled) {
    capturing = enabled;
}

exports.printf = function(output) {
    
    var result = Printf.printf(output);
    buffer.push(output);
    return result;
}

exports.getPrinted = function() {
    return Pervasives.stdout;
    //return buffer;
}

exports.clearBuffer = function() {
    buffer = [];
}
