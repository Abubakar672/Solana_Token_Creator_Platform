import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { MintGpaBuilder } from './gpaBuilders/MintGpaBuilder.mjs';
import { TokenGpaBuilder } from './gpaBuilders/TokenGpaBuilder.mjs';

const TokenProgram = {
  publicKey: TOKEN_PROGRAM_ID,

  mintAccounts(metaplex) {
    return new MintGpaBuilder(metaplex, this.publicKey);
  },

  tokenAccounts(metaplex) {
    return new TokenGpaBuilder(metaplex, this.publicKey);
  }

};

export { TokenProgram };
//# sourceMappingURL=TokenProgram.mjs.map
