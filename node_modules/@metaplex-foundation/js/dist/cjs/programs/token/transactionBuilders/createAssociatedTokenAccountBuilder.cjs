'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const createAssociatedTokenAccountBuilder = params => {
  const {
    payer,
    associatedToken,
    owner,
    mint,
    tokenProgram = splToken.TOKEN_PROGRAM_ID,
    associatedTokenProgram = splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
    instructionKey = 'createAssociatedTokenAccount'
  } = params;
  return TransactionBuilder.TransactionBuilder.make().add({
    instruction: splToken.createAssociatedTokenAccountInstruction(payer.publicKey, associatedToken, owner, mint, tokenProgram, associatedTokenProgram),
    signers: [payer],
    key: instructionKey
  });
};

exports.createAssociatedTokenAccountBuilder = createAssociatedTokenAccountBuilder;
//# sourceMappingURL=createAssociatedTokenAccountBuilder.cjs.map
