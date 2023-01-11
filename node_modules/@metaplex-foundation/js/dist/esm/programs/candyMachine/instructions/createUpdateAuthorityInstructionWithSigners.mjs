import { createUpdateAuthorityInstruction } from '@metaplex-foundation/mpl-candy-machine';

function createUpdateAuthorityInstructionWithSigners(params) {
  const {
    candyMachine,
    authority,
    wallet,
    newAuthority,
    instructionKey = 'updateCandyMachineAuthority'
  } = params;
  return {
    instruction: createUpdateAuthorityInstruction({
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

export { createUpdateAuthorityInstructionWithSigners };
//# sourceMappingURL=createUpdateAuthorityInstructionWithSigners.mjs.map
