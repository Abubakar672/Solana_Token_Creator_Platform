'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');

const createCreateMasterEditionV3InstructionWithSigners = params => {
  const {
    maxSupply = null,
    payer,
    mintAuthority,
    updateAuthority,
    mint,
    metadata,
    masterEdition,
    instructionKey = 'createMasterEditionV3'
  } = params;
  return {
    instruction: mplTokenMetadata.createCreateMasterEditionV3Instruction({
      edition: masterEdition,
      mint,
      updateAuthority: updateAuthority.publicKey,
      mintAuthority: mintAuthority.publicKey,
      payer: payer.publicKey,
      metadata
    }, {
      createMasterEditionArgs: {
        maxSupply
      }
    }),
    signers: [payer, mintAuthority, updateAuthority],
    key: instructionKey
  };
};

exports.createCreateMasterEditionV3InstructionWithSigners = createCreateMasterEditionV3InstructionWithSigners;
//# sourceMappingURL=createCreateMasterEditionV3InstructionWithSigners.cjs.map
