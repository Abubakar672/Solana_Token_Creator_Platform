import { createAddConfigLinesInstruction } from '@metaplex-foundation/mpl-candy-machine';

function createAddConfigLinesInstructionWithSigners(params) {
  const {
    candyMachine,
    authority,
    index,
    configLines,
    instructionKey = 'addConfigLinesToCandyMachine'
  } = params;
  return {
    instruction: createAddConfigLinesInstruction({
      candyMachine,
      authority: authority.publicKey
    }, {
      index,
      configLines
    }),
    signers: [authority],
    key: instructionKey
  };
}

export { createAddConfigLinesInstructionWithSigners };
//# sourceMappingURL=createAddConfigLinesInstructionWithSigners.mjs.map
