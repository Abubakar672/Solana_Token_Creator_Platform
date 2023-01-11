import { createCreateMasterEditionV3Instruction } from '@metaplex-foundation/mpl-token-metadata';

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
    instruction: createCreateMasterEditionV3Instruction({
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

export { createCreateMasterEditionV3InstructionWithSigners };
//# sourceMappingURL=createCreateMasterEditionV3InstructionWithSigners.mjs.map
