import { createUpdateMetadataAccountV2Instruction } from '@metaplex-foundation/mpl-token-metadata';

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
    instruction: createUpdateMetadataAccountV2Instruction({
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

export { createUpdateMetadataAccountV2InstructionWithSigners };
//# sourceMappingURL=createUpdateMetadataAccountV2InstructionWithSigners.mjs.map
