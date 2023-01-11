'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var splToken = require('@solana/spl-token');
var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var TokenMetadataGpaBuilder = require('../../programs/tokenMetadata/gpaBuilders/TokenMetadataGpaBuilder.cjs');

const corePrograms = () => ({
  install(metaplex) {
    // System Program.
    metaplex.programs().register({
      name: 'SystemProgram',
      address: web3_js.SystemProgram.programId
    }); // Token Program.

    metaplex.programs().register({
      name: 'TokenProgram',
      address: splToken.TOKEN_PROGRAM_ID
    }); // Token Metadata Program.

    metaplex.programs().register({
      name: 'TokenMetadataProgram',
      address: mplTokenMetadata.PROGRAM_ID,
      errorResolver: error => mplTokenMetadata.cusper.errorFromProgramLogs(error.logs, false),
      gpaResolver: metaplex => new TokenMetadataGpaBuilder.TokenMetadataGpaBuilder(metaplex, mplTokenMetadata.PROGRAM_ID)
    });
  }

});

exports.corePrograms = corePrograms;
//# sourceMappingURL=plugin.cjs.map
