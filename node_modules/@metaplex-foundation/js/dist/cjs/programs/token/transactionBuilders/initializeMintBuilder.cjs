'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const initializeMintBuilder = params => {
  const {
    decimals,
    mint,
    mintAuthority,
    freezeAuthority = null,
    tokenProgram = splToken.TOKEN_PROGRAM_ID,
    instructionKey = 'initializeMint'
  } = params;
  return TransactionBuilder.TransactionBuilder.make().add({
    instruction: splToken.createInitializeMintInstruction(mint.publicKey, decimals, mintAuthority, freezeAuthority, tokenProgram),
    signers: [mint],
    key: instructionKey
  });
};

exports.initializeMintBuilder = initializeMintBuilder;
//# sourceMappingURL=initializeMintBuilder.cjs.map
