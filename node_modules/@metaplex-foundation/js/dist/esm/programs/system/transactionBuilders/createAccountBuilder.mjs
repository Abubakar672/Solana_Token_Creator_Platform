import { SystemProgram } from '@solana/web3.js';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const createAccountBuilder = params => {
  const {
    space,
    lamports,
    payer,
    newAccount,
    program = SystemProgram.programId,
    instructionKey = 'createAccount'
  } = params;
  return TransactionBuilder.make().add({
    instruction: SystemProgram.createAccount({
      fromPubkey: payer.publicKey,
      newAccountPubkey: newAccount.publicKey,
      space,
      lamports,
      programId: program
    }),
    signers: [payer, newAccount],
    key: instructionKey
  });
};

export { createAccountBuilder };
//# sourceMappingURL=createAccountBuilder.mjs.map
