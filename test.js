'use strict';

var
    assert = require('assert'),
    fs     = require('fs'),
    galen   = require('./');

assert.ok(fs.existsSync(galen.cmd));
assert.ok(fs.existsSync(galen.jar));
