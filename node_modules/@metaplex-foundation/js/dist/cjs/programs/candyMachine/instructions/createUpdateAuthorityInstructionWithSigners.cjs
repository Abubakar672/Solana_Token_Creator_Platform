'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');

function createUpdateAuthorityInstructionWithSigners(params) {
  const {
    candyMachine,
    authority,
    wallet,
    newAuthority,
    instructionKey = 'updateCandyMachineAuthority'
  } = params;
  return {
    instruction: mplCandyMachine.createUpdateAuthorityInstruction({
      candyMachine,
      authority: authority.publicKey,
      wallet
    }, {
      newAuthority
    }),
    signers: [authority],
    key: instructionKey
  };
}

exports.createUpdateAuthorityInstructionWithSigners = createUpdateAuthorityInstructionWithSigners;
//# sourceMappingURL=createUpdateAuthorityInstructionWithSigners.cjs.map
