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

// TODO: Remove
// Swap printf for our own hook
// utils.exec("export LANG=C; export LC_CTYPE=C; find ./lib/js/src -type f -print0 | xargs -0 sed -i '' 's/bs-platform\\/lib\\/js\\/printf.js/..\\/..\\/..\\/printf.js/g'");

console.log(chalk.cyan('Build complete.\n'));