'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var splToken = require('@solana/spl-token');
var TransactionBuilder = require('../../../utils/TransactionBuilder.cjs');

const setAuthorityBuilder = params => {
  const {
    mint,
    currentAuthority,
    authorityType,
    newAuthority,
    multiSigners = [],
    tokenProgram = splToken.TOKEN_PROGRAM_ID,
    instructionKey = 'setAuthority'
  } = params;
  const [currentAuthorityPublicKey, signers] = currentAuthority instanceof web3_js.PublicKey ? [currentAuthority, multiSigners] : [currentAuthority.publicKey, [currentAuthority]];
  return TransactionBuilder.TransactionBuilder.make().add({
    instruction: splToken.createSetAuthorityInstruction(mint, currentAuthorityPublicKey, authorityType, newAuthority, multiSigners, tokenProgram),
    signers,
    key: instructionKey
  });
};

exports.setAuthorityBuilder = setAuthorityBuilder;
//# sourceMappingURL=setAuthorityBuilder.cjs.map
