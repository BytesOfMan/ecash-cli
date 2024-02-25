'use strict';
const { chronikInstances } = require('../../config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);

const address = typeof process.argv[2] !== 'undefined' ? process.argv[2] : 'ecash:prfhcnyqnl5cgrnmlfmms675w93ld7mvvqd0y8lz07';
const page = typeof process.argv[3] !== 'undefined' ? parseInt(process.argv[3]) : undefined;
const pageSize = typeof process.argv[4] !== 'undefined' ? parseInt(process.argv[4]) : undefined;

/**
 * Print output from chronik.address(address).history(page, pageSize) to console
 * @param {string} address valid eCash address
 * @param {number} page page to fetch
 * @param {number} pageSize number of txs per page
 */
async function printHistory(address, page, pageSize) {
    let response;
    try {
        response = await chronik.address(address).history(page, pageSize);
    } catch (err) {
        console.log(`Error in printHistory`, err);
    }

  console.log(response)
  }

printHistory(address, page, pageSize);
