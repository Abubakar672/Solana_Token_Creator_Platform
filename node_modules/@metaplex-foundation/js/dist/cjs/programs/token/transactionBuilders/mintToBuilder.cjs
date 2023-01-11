'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var splToken = require('@solana/spl-token');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const mintToBuilder = params => {
  const {
    mint,
    destination,
    mintAuthority,
    amount,
    multiSigners = [],
    tokenProgram = splToken.TOKEN_PROGRAM_ID,
    instructionKey = 'mintTo'
  } = params;
  const [mintAuthorityPublicKey, signers] = mintAuthority instanceof web3_js.PublicKey ? [mintAuthority, multiSigners] : [mintAuthority.publicKey, [mintAuthority]];
  return TransactionBuilder.TransactionBuilder.make().add({
    instruction: splToken.createMintToInstruction(mint, destination, mintAuthorityPublicKey, amount, multiSigners, tokenProgram),
    signers,
    key: instructionKey
  });
};

exports.mintToBuilder = mintToBuilder;
//# sourceMappingURL=mintToBuilder.cjs.map
