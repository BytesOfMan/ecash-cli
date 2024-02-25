'use strict';
const cashaddr = require('ecashaddrjs')

const hash = typeof process.argv[2] !== 'undefined' ? process.argv[2] : '4e532257c01b310b3b5c1fd947c79a72addf8523';

/**
 * Print output from cashaddr.encode('ecash', 'p2pkh', hash) to console
 * @param {string} hash a valid eCash address
 */
function printEncode(hash) {
    let response;
    try {
        response = cashaddr.encode('ecash', 'p2pkh', hash);
    } catch (err) {
        console.log(`Error in printEncode`, err);
    }
  console.log(response);
  }

printEncode(hash);
