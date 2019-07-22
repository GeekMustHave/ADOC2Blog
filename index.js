// -- ADOC2Blog
//    ASCIIDoctor to Blog Generator  V2.1b
//    GeekMustHave  MIT License

// --- Read dem files
const fs = require('fs');

// --- Terminal UI
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// **********************************************************
// *** Lets get started
// **********************************************************

// -- Console heading
clear();
console.log(
  chalk.yellow(figlet.textSync('ADOC2Blog', { horizontalLayout: 'full' }))
);
console.log('Version: 2.1b  07/19/2019');
console.log('');

let blogArticles = [];
// -- Check for `order.txt` this drives the process
const order = './order.txt';
try {
  blogArticles = fs
    .readFileSync('./order.txt')
    .toString()
    .split('\n');
  // -- Proceed
} catch (err) {
  console.log(
    chalk.red(`Error -> Missing 'order.txt' file, unable to proceed.  ${err}`)
  );
  process.exit(1);
}

for (i in blogArticles) {
  console.log(blogArticles[i]);
}
