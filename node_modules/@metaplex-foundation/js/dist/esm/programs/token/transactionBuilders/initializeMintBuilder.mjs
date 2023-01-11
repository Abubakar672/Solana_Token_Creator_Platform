import { createInitializeMintInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const initializeMintBuilder = params => {
  const {
    decimals,
    mint,
    mintAuthority,
    freezeAuthority = null,
    tokenProgram = TOKEN_PROGRAM_ID,
    instructionKey = 'initializeMint'
  } = params;
  return TransactionBuilder.make().add({
    instruction: createInitializeMintInstruction(mint.publicKey, decimals, mintAuthority, freezeAuthority, tokenProgram),
    signers: [mint],
    key: instructionKey
  });
};

export { initializeMintBuilder };
//# sourceMappingURL=initializeMintBuilder.mjs.map
