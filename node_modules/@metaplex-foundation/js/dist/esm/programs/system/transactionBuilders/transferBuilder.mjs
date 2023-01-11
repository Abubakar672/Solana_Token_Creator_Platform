import { SystemProgram } from '@solana/web3.js';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const transferBuilder = params => {
  const {
    from,
    to,
    lamports,
    basePubkey,
    seed,
    program = SystemProgram.programId,
    instructionKey = 'transfer'
  } = params;
  return TransactionBuilder.make().add({
    instruction: SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports,
      ...(seed ? {
        seed,
        basePubkey
      } : {}),
      programId: program
    }),
    signers: [from],
    key: instructionKey
  });
};

export { transferBuilder };
//# sourceMappingURL=transferBuilder.mjs.map
