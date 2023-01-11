'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createMintBuilder = require('./createMintBuilder.cjs');
var createAssociatedTokenAccountBuilder = require('./createAssociatedTokenAccountBuilder.cjs');
var mintToBuilder = require('./mintToBuilder.cjs');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const createMintAndMintToAssociatedTokenBuilder = params => {
  const {
    lamports,
    decimals,
    amount,
    createAssociatedToken = true,
    mint,
    payer,
    mintAuthority,
    owner,
    associatedToken,
    freezeAuthority,
    tokenProgram,
    associatedTokenProgram,
    createAccountInstructionKey,
    initializeMintInstructionKey,
    createAssociatedTokenInstructionKey,
    mintToInstructionKey
  } = params;
  return TransactionBuilder.TransactionBuilder.make() // Create and initialize the mint account.
  .add(createMintBuilder.createMintBuilder({
    lamports,
    decimals,
    mint,
    payer,
    mintAuthority: mintAuthority.publicKey,
    freezeAuthority,
    tokenProgram,
    createAccountInstructionKey,
    initializeMintInstructionKey
  })) // Create the associated account if it does not exists.
  .when(createAssociatedToken, tx => tx.add(createAssociatedTokenAccountBuilder.createAssociatedTokenAccountBuilder({
    payer,
    associatedToken,
    owner,
    mint: mint.publicKey,
    tokenProgram,
    associatedTokenProgram,
    instructionKey: createAssociatedTokenInstructionKey
  }))) // Mint to the associated token.
  .add(mintToBuilder.mintToBuilder({
    mint: mint.publicKey,
    destination: associatedToken,
    mintAuthority,
    amount,
    tokenProgram,
    instructionKey: mintToInstructionKey
  }));
};

exports.createMintAndMintToAssociatedTokenBuilder = createMintAndMintToAssociatedTokenBuilder;
//# sourceMappingURL=createMintAndMintToAssociatedTokenBuilder.cjs.map
