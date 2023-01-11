import { PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import { MetadataV1GpaBuilder } from './gpaBuilders/MetadataV1GpaBuilder.mjs';

const TokenMetadataProgram = {
  publicKey: PROGRAM_ID,

  metadataV1Accounts(metaplex) {
    return new MetadataV1GpaBuilder(metaplex, this.publicKey);
  }

};

export { TokenMetadataProgram };
//# sourceMappingURL=TokenMetadataProgram.mjs.map
