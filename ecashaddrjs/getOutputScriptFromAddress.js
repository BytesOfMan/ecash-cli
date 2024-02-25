'use strict';
const cashaddr = require('ecashaddrjs')

const address = typeof process.argv[2] !== 'undefined' ? process.argv[2] : 'ecregtest:prfhcnyqnl5cgrnmlfmms675w93ld7mvvq9jcw0zsn';

/**
 * Print output from cashaddr.getOutputFromAddress to console
 * @param {string} address a valid eCash address
 */
function printGetOutputFromAddress(address) {
    let response;
    try {
        response = cashaddr.getOutputScriptFromAddress(address);
    } catch (err) {
        console.log(`Error in getOutputScriptFromAddress`, err);
    }
  console.log(response);
  }

printGetOutputFromAddress(address);
