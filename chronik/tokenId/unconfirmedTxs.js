'use strict';
const { chronikInstances } = require('../../config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);


const tokenId = typeof process.argv[2] !== 'undefined' ? process.argv[2] : '50d8292c6255cda7afc6c8566fed3cf42a2794e9619740fe8f4c95431271410e';
const page = typeof process.argv[3] !== 'undefined' ? parseInt(process.argv[3]) : undefined;
const pageSize = typeof process.argv[4] !== 'undefined' ? parseInt(process.argv[4]) : undefined;

/**
 * Print output from chronik.tokenId(tokenId).confirmedTxs(page, pageSize) to console
 * @param {string} tokenId valid tokenId
 * @param {number} page page to fetch
 * @param {number} pageSize number of txs per page
 */
async function printUnconfirmedTxHistory(tokenId, page, pageSize) {
    let response;
    try {
        response = await chronik.tokenId(tokenId).unconfirmedTxs(page, pageSize);
    } catch (err) {
        console.log(`Error in printHistory`, err);
    }

  console.log(response)
  }

printUnconfirmedTxHistory(tokenId, page, pageSize);
