'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var MetadataV1GpaBuilder = require('./gpaBuilders/MetadataV1GpaBuilder.cjs');

const TokenMetadataProgram = {
  publicKey: mplTokenMetadata.PROGRAM_ID,

  metadataV1Accounts(metaplex) {
    return new MetadataV1GpaBuilder.MetadataV1GpaBuilder(metaplex, this.publicKey);
  }

};

exports.TokenMetadataProgram = TokenMetadataProgram;
//# sourceMappingURL=TokenMetadataProgram.cjs.map
