'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const transferBuilder = params => {
  const {
    from,
    to,
    lamports,
    basePubkey,
    seed,
    program = web3_js.SystemProgram.programId,
    instructionKey = 'transfer'
  } = params;
  return TransactionBuilder.TransactionBuilder.make().add({
    instruction: web3_js.SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports,
      ...(seed ? {
        seed,
        basePubkey
      } : {}),
      programId: program
    }),
    signers: [from],
    key: instructionKey
  });
};

exports.transferBuilder = transferBuilder;
//# sourceMappingURL=transferBuilder.cjs.map
