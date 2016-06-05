#!/usr/bin/env node
'use strict';

const forward = require('http-port-forward');
const meow = require('meow');

const cli = meow(`
  Usage nwt
    $ nwt -f <from_port> -t [to_port]
`);

forward(cli.flags.f, cli.flags.t);
