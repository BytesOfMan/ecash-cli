'use strict';
const cashaddr = require('ecashaddrjs')

const outputScript = typeof process.argv[2] !== 'undefined' ? process.argv[2] : 'a914da1745e9b549bd0bfa1a569971c77eba30cd5a4b87';

/**
 * Print output from cashaddr.getTypeAndHashFromOutputScript to console
 * @param {string} outputScript outputScript from an ecash tx
 */
function getTypeAndHashFromOutputScript(outputScript) {
    let response;
    try {
        response = cashaddr.getTypeAndHashFromOutputScript(outputScript);
    } catch (err) {
        console.log(`Error in getOutputScriptFromAddress`, err);
    }
  console.log(response);
  }

getTypeAndHashFromOutputScript(outputScript);
