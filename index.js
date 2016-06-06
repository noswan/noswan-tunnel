#!/usr/bin/env node
'use strict';

const meow = require('meow');

const lib = require('./lib');

const cli = meow(`
  Usage nwt
    $ nwt <url> <port>
`);

cli.input.push(lib.printqr);

if (cli.input.length !== 3) {
  console.log(cli.help);
  process.exit(1);
}

lib.apply(null, cli.input);
