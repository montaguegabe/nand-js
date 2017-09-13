process.env.NODE_ENV = 'production';

var path = require('path');
const fs = require('fs-extra');
var utils = require('./utils');
var chalk = require('chalk');

// Clean
fs.removeSync('lib');

// Build OCaml
console.log('Building OCaml...\n');
utils.exec(path.join('$(npm bin)', 'bsb'));

// Truncate lib directory structure
var libDir = path.join('lib', 'js');
var bsOutputDir = path.join(libDir, 'submodules', 'NAND', 'nand-pl', '_build');
var sources = path.join(bsOutputDir, '*');

utils.exec(`mv ${sources} ${libDir}`);
fs.removeSync(path.join(libDir, 'submodules'));

console.log(chalk.cyan('Build complete.\n'));