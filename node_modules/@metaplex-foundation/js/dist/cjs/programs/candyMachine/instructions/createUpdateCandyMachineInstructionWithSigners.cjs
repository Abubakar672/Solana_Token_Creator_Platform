'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');

function createUpdateCandyMachineInstructionWithSigners(params) {
  const {
    candyMachine,
    authority,
    wallet,
    data,
    instructionKey = 'updateCandyMachine'
  } = params;
  return {
    instruction: mplCandyMachine.createUpdateCandyMachineInstruction({
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

exports.createUpdateCandyMachineInstructionWithSigners = createUpdateCandyMachineInstructionWithSigners;
//# sourceMappingURL=createUpdateCandyMachineInstructionWithSigners.cjs.map
