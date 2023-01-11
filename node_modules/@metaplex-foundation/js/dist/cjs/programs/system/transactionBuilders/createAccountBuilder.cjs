'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const createAccountBuilder = params => {
  const {
    space,
    lamports,
    payer,
    newAccount,
    program = web3_js.SystemProgram.programId,
    instructionKey = 'createAccount'
  } = params;
  return TransactionBuilder.TransactionBuilder.make().add({
    instruction: web3_js.SystemProgram.createAccount({
      fromPubkey: payer.publicKey,
      newAccountPubkey: newAccount.publicKey,
      space,
      lamports,
      programId: program
    }),
    signers: [payer, newAccount],
    key: instructionKey
  });
};

exports.createAccountBuilder = createAccountBuilder;
//# sourceMappingURL=createAccountBuilder.cjs.map
