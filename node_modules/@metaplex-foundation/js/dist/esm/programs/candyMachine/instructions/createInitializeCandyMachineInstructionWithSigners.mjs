import { createInitializeCandyMachineInstruction } from '@metaplex-foundation/mpl-candy-machine';

const createInitializeCandyMachineInstructionWithSigners = params => {
  const {
    data,
    candyMachine,
    wallet,
    authority,
    payer,
    instructionKey = 'initializeCandyMachine'
  } = params;
  return {
    instruction: createInitializeCandyMachineInstruction({
      candyMachine: candyMachine.publicKey,
      wallet,
      authority,
      payer: payer.publicKey
    }, {
      data
    }),
    signers: [candyMachine, payer],
    key: instructionKey
  };
};

export { createInitializeCandyMachineInstructionWithSigners };
//# sourceMappingURL=createInitializeCandyMachineInstructionWithSigners.mjs.map
