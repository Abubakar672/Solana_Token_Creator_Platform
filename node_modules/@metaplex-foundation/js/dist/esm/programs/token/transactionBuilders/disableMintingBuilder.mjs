import { AuthorityType } from '@solana/spl-token';
import { setAuthorityBuilder } from './setAuthorityBuilder.mjs';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const disableMintingBuilder = params => {
  const {
    mint,
    mintAuthority,
    multiSigners,
    tokenProgram,
    instructionKey = 'disableMinting'
  } = params;
  return TransactionBuilder.make().add(setAuthorityBuilder({
    mint,
    currentAuthority: mintAuthority,
    authorityType: AuthorityType.MintTokens,
    newAuthority: null,
    multiSigners,
    tokenProgram,
    instructionKey
  }));
};

export { disableMintingBuilder };
//# sourceMappingURL=disableMintingBuilder.mjs.map
