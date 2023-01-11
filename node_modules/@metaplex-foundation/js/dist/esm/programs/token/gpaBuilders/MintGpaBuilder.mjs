import { TOKEN_PROGRAM_ID, MINT_SIZE } from '@solana/spl-token';
import { GpaBuilder } from '../../../utils/GpaBuilder.mjs';

class MintGpaBuilder extends GpaBuilder {
  constructor(metaplex, programId) {
    super(metaplex, programId !== null && programId !== void 0 ? programId : TOKEN_PROGRAM_ID);
    this.whereSize(MINT_SIZE);
  }

  whereDoesntHaveMintAuthority() {
    return this.where(0, 0);
  }

  whereHasMintAuthority() {
    return this.where(0, 1);
  }

  whereMintAuthority(mintAuthority) {
    return this.whereHasMintAuthority().where(4, mintAuthority);
  }

  whereSupply(supply) {
    return this.where(36, supply);
  } // TODO: Map the rest of the layout.
  // https://github.com/solana-labs/solana-program-library/blob/master/token/js/src/state/mint.ts#L43


}

export { MintGpaBuilder };
//# sourceMappingURL=MintGpaBuilder.mjs.map
