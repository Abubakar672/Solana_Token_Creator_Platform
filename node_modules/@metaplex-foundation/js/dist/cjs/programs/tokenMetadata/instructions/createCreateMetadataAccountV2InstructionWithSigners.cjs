'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');

const createCreateMetadataAccountV2InstructionWithSigners = params => {
  const {
    data,
    isMutable = false,
    mintAuthority,
    payer,
    mint,
    metadata,
    updateAuthority,
    instructionKey = 'createMetadataV2'
  } = params;
  return {
    instruction: mplTokenMetadata.createCreateMetadataAccountV2Instruction({
      metadata,
      mint,
      mintAuthority: mintAuthority.publicKey,
      payer: payer.publicKey,
      updateAuthority
    }, {
      createMetadataAccountArgsV2: {
        data,
        isMutable
      }
    }),
    signers: [payer, mintAuthority],
    key: instructionKey
  };
};

exports.createCreateMetadataAccountV2InstructionWithSigners = createCreateMetadataAccountV2InstructionWithSigners;
//# sourceMappingURL=createCreateMetadataAccountV2InstructionWithSigners.cjs.map
