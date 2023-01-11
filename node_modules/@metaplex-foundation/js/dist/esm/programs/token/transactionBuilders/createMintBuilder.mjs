import { MINT_SIZE, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { initializeMintBuilder } from './initializeMintBuilder.mjs';
import { createAccountBuilder } from '../../system/transactionBuilders/createAccountBuilder.mjs';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const createMintBuilder = params => {
  const {
    lamports,
    decimals,
    mint,
    payer,
    mintAuthority,
    freezeAuthority,
    tokenProgram = TOKEN_PROGRAM_ID,
    createAccountInstructionKey = 'createAccount',
    initializeMintInstructionKey = 'initializeMint'
  } = params;
  return TransactionBuilder.make() // Allocate space on the blockchain for the mint account.
  .add(createAccountBuilder({
    payer: payer,
    newAccount: mint,
    space: MINT_SIZE,
    lamports,
    program: tokenProgram,
    instructionKey: createAccountInstructionKey
  })) // Initialize the mint account.
  .add(initializeMintBuilder({
    decimals,
    mint,
    mintAuthority,
    freezeAuthority,
    tokenProgram,
    instructionKey: initializeMintInstructionKey
  }));
};

export { createMintBuilder };
//# sourceMappingURL=createMintBuilder.mjs.map
