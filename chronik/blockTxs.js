'use strict';
const { chronikInstances } = require('./config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);


const hashOrHeight = typeof process.argv[2] !== 'undefined' ? process.argv[2] : 800000;
const page = typeof process.argv[3] !== 'undefined' ? parseInt(process.argv[3]) : undefined;
const pageSize = typeof process.argv[4] !== 'undefined' ? parseInt(process.argv[4]) : undefined;

/**
 * Print output from chronik.blockTxs to console
 * @param {string || number} hashOrHeight hash or height of a mined eCash block
 * @param {number} page page to fetch
 * @param {number} pageSize number of txs per page
 */
async function printBlockTxs(hashOrHeight, page, pageSize) {
    let response;
    try {
        response = await chronik.blockTxs(hashOrHeight, page, pageSize);
    } catch (err) {
        console.log(`Error in printBlockTxs`, err);
    }

  //console.log(response)
  console.log(response.txs[response.txs.length - 1]);
  }

printBlockTxs(hashOrHeight, page, pageSize);
