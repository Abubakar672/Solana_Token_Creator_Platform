import { createUpdateCandyMachineInstruction } from '@metaplex-foundation/mpl-candy-machine';

function createUpdateCandyMachineInstructionWithSigners(params) {
  const {
    candyMachine,
    authority,
    wallet,
    data,
    instructionKey = 'updateCandyMachine'
  } = params;
  return {
    instruction: createUpdateCandyMachineInstruction({
      candyMachine,
      authority: authority.publicKey,
      wallet
    }, {
      data
    }),
    signers: [authority],
    key: instructionKey
  };
}

export { createUpdateCandyMachineInstructionWithSigners };
//# sourceMappingURL=createUpdateCandyMachineInstructionWithSigners.mjs.map
