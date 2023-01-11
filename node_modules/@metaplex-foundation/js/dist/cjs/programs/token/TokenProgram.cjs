'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var MintGpaBuilder = require('./gpaBuilders/MintGpaBuilder.cjs');
var TokenGpaBuilder = require('./gpaBuilders/TokenGpaBuilder.cjs');

const TokenProgram = {
  publicKey: splToken.TOKEN_PROGRAM_ID,

  mintAccounts(metaplex) {
    return new MintGpaBuilder.MintGpaBuilder(metaplex, this.publicKey);
  },

  tokenAccounts(metaplex) {
    return new TokenGpaBuilder.TokenGpaBuilder(metaplex, this.publicKey);
  }

};

exports.TokenProgram = TokenProgram;
//# sourceMappingURL=TokenProgram.cjs.map
