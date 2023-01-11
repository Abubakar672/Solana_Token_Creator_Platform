'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');

function createAddConfigLinesInstructionWithSigners(params) {
  const {
    candyMachine,
    authority,
    index,
    configLines,
    instructionKey = 'addConfigLinesToCandyMachine'
  } = params;
  return {
    instruction: mplCandyMachine.createAddConfigLinesInstruction({
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

exports.createAddConfigLinesInstructionWithSigners = createAddConfigLinesInstructionWithSigners;
//# sourceMappingURL=createAddConfigLinesInstructionWithSigners.cjs.map
