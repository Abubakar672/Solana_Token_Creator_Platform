import { createCreateMetadataAccountV2Instruction } from '@metaplex-foundation/mpl-token-metadata';

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
    instruction: createCreateMetadataAccountV2Instruction({
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

export { createCreateMetadataAccountV2InstructionWithSigners };
//# sourceMappingURL=createCreateMetadataAccountV2InstructionWithSigners.mjs.map
