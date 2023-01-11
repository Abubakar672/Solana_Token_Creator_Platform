'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');

const createUpdateMetadataAccountV2InstructionWithSigners = params => {
  const {
    data,
    newUpdateAuthority,
    primarySaleHappened,
    isMutable,
    metadata,
    updateAuthority,
    instructionKey = 'updateMetadatav2'
  } = params;
  return {
    instruction: mplTokenMetadata.createUpdateMetadataAccountV2Instruction({
      metadata,
      updateAuthority: updateAuthority.publicKey
    }, {
      updateMetadataAccountArgsV2: {
        data,
        updateAuthority: newUpdateAuthority,
        primarySaleHappened,
        isMutable
      }
    }),
    signers: [updateAuthority],
    key: instructionKey
  };
};

exports.createUpdateMetadataAccountV2InstructionWithSigners = createUpdateMetadataAccountV2InstructionWithSigners;
//# sourceMappingURL=createUpdateMetadataAccountV2InstructionWithSigners.cjs.map
