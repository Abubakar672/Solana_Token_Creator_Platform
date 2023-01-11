'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');

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
    instruction: mplCandyMachine.createInitializeCandyMachineInstruction({
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

exports.createInitializeCandyMachineInstructionWithSigners = createInitializeCandyMachineInstructionWithSigners;
//# sourceMappingURL=createInitializeCandyMachineInstructionWithSigners.cjs.map
