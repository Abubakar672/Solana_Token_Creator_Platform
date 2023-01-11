'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var setAuthorityBuilder = require('./setAuthorityBuilder.cjs');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const disableMintingBuilder = params => {
  const {
    mint,
    mintAuthority,
    multiSigners,
    tokenProgram,
    instructionKey = 'disableMinting'
  } = params;
  return TransactionBuilder.TransactionBuilder.make().add(setAuthorityBuilder.setAuthorityBuilder({
    mint,
    currentAuthority: mintAuthority,
    authorityType: splToken.AuthorityType.MintTokens,
    newAuthority: null,
    multiSigners,
    tokenProgram,
    instructionKey
  }));
};

exports.disableMintingBuilder = disableMintingBuilder;
//# sourceMappingURL=disableMintingBuilder.cjs.map
