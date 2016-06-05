'use strict';

const url = require('url');

const ip = require('ip');
const qr = require('qrcode-terminal');
const forward = require('http-port-forward');

module.exports = (dest, port) => {
  const parsed = url.parse(dest);
  const from = parsed.port;
  const f = Object.assign({}, parsed, { hostname: ip.address(), port: port, host: null });
  forward(from, port);
  qr.generate(url.format(f));
};
