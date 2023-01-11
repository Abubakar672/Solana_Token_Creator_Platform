'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var initializeMintBuilder = require('./initializeMintBuilder.cjs');
var createAccountBuilder = require('../../system/transactionBuilders/createAccountBuilder.cjs');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const createMintBuilder = params => {
  const {
    lamports,
    decimals,
    mint,
    payer,
    mintAuthority,
    freezeAuthority,
    tokenProgram = splToken.TOKEN_PROGRAM_ID,
    createAccountInstructionKey = 'createAccount',
    initializeMintInstructionKey = 'initializeMint'
  } = params;
  return TransactionBuilder.TransactionBuilder.make() // Allocate space on the blockchain for the mint account.
  .add(createAccountBuilder.createAccountBuilder({
    payer: payer,
    newAccount: mint,
    space: splToken.MINT_SIZE,
    lamports,
    program: tokenProgram,
    instructionKey: createAccountInstructionKey
  })) // Initialize the mint account.
  .add(initializeMintBuilder.initializeMintBuilder({
    decimals,
    mint,
    mintAuthority,
    freezeAuthority,
    tokenProgram,
    instructionKey: initializeMintInstructionKey
  }));
};

exports.createMintBuilder = createMintBuilder;
//# sourceMappingURL=createMintBuilder.cjs.map
