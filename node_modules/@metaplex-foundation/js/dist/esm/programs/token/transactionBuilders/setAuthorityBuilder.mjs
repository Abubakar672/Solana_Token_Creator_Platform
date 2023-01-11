import { PublicKey } from '@solana/web3.js';
import { createSetAuthorityInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const setAuthorityBuilder = params => {
  const {
    mint,
    currentAuthority,
    authorityType,
    newAuthority,
    multiSigners = [],
    tokenProgram = TOKEN_PROGRAM_ID,
    instructionKey = 'setAuthority'
  } = params;
  const [currentAuthorityPublicKey, signers] = currentAuthority instanceof PublicKey ? [currentAuthority, multiSigners] : [currentAuthority.publicKey, [currentAuthority]];
  return TransactionBuilder.make().add({
    instruction: createSetAuthorityInstruction(mint, currentAuthorityPublicKey, authorityType, newAuthority, multiSigners, tokenProgram),
    signers,
    key: instructionKey
  });
};

export { setAuthorityBuilder };
//# sourceMappingURL=setAuthorityBuilder.mjs.map
