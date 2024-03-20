const blockoraclehttp = require('blockoraclehttp');
const blockoraclehttp_use = require('blockoraclehttp-use');
const web3_react = require('web3-react');
const ethers = require('ethers');
const axios = require('axios');
const eslint = require('eslint');
const lodash = require('lodash');
const eth_crypto = require('eth-crypto');
const react = require('react');
const jest = require('jest');
const web3 = require('web3');
const underscore = require('underscore');
const redux = require('redux');
const express = require('express');
const chalk = require('chalk');
const moment = require('moment');
const xml2js = require('xml2js');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(3000, 'done').then(value => {
  console.log(value);
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();

process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('Scheduled');

console.log(`Current date and time: ${new Date().toLocaleString()}`);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
eventEmitter.emit('customEvent', 'Hello', 'World');