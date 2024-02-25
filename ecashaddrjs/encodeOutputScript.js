'use strict';
const cashaddr = require('ecashaddrjs')

const outputScript = typeof process.argv[2] !== 'undefined' ? process.argv[2] : '76a914da45fd71b76e34c88e97ccbebb454d7cd395e52c88ac';
const prefix = typeof process.argv[3] !== 'undefined' ? process.argv[3] : 'ecash';

/**
 * Print output from cashaddr.encodeOutputScript to console
 * @param {string} outputScript p2pkh or p2sh output script
 * @throws {error} if outputScript is not valid p2pkh or p2sh
 */
function printEncodeOutputScript(outputScript, prefix='ecash') {
    let response;
    try {
        response = cashaddr.encodeOutputScript(outputScript, prefix);
    } catch (err) {
        console.log(`Error in encodeOutputScript`, err);
    }
  console.log(response);
  }

printEncodeOutputScript(outputScript, prefix);
