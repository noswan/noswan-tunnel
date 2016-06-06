'use strict';

import http from 'http';

import test from 'ava';
import got from 'got';
import lib from '../lib';

test.before(t => {
  http.createServer((req, res) => {
    console.log('incoming request');
    res.end('hoo');
  }).listen(8088, '127.0.0.1');
});

test.cb(t => {
  lib('http://127.0.0.1:8088/haha', 9000, targetUrl => {
    t.falsy(targetUrl.match(/127\.0\.0\.1/));
    got(targetUrl).then(response => {
      t.is(response.body, 'hoo');
      t.end();
    }).catch(reason => t.end(reason));
  });
});

