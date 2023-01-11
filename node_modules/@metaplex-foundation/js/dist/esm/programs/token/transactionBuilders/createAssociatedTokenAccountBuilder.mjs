import { createAssociatedTokenAccountInstruction, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const createAssociatedTokenAccountBuilder = params => {
  const {
    payer,
    associatedToken,
    owner,
    mint,
    tokenProgram = TOKEN_PROGRAM_ID,
    associatedTokenProgram = ASSOCIATED_TOKEN_PROGRAM_ID,
    instructionKey = 'createAssociatedTokenAccount'
  } = params;
  return TransactionBuilder.make().add({
    instruction: createAssociatedTokenAccountInstruction(payer.publicKey, associatedToken, owner, mint, tokenProgram, associatedTokenProgram),
    signers: [payer],
    key: instructionKey
  });
};

export { createAssociatedTokenAccountBuilder };
//# sourceMappingURL=createAssociatedTokenAccountBuilder.mjs.map
