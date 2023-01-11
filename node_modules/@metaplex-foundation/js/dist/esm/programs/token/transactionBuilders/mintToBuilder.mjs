import { PublicKey } from '@solana/web3.js';
import { createMintToInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TransactionBuilder } from '../../../utils/TransactionBuilder.mjs';

const mintToBuilder = params => {
  const {
    mint,
    destination,
    mintAuthority,
    amount,
    multiSigners = [],
    tokenProgram = TOKEN_PROGRAM_ID,
    instructionKey = 'mintTo'
  } = params;
  const [mintAuthorityPublicKey, signers] = mintAuthority instanceof PublicKey ? [mintAuthority, multiSigners] : [mintAuthority.publicKey, [mintAuthority]];
  return TransactionBuilder.make().add({
    instruction: createMintToInstruction(mint, destination, mintAuthorityPublicKey, amount, multiSigners, tokenProgram),
    signers,
    key: instructionKey
  });
};

export { mintToBuilder };
//# sourceMappingURL=mintToBuilder.mjs.map
