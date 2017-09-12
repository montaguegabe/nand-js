exports.exec = function (cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}