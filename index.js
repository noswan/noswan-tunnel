#!/usr/bin/env node
'use strict';

const meow = require('meow');

const lib = require('./lib');

const cli = meow(`
  Usage nwt
    $ nwt -u <url> -t [to_port]
`);

lib(cli.flags.u, cli.flags.t, lib.printqr);
