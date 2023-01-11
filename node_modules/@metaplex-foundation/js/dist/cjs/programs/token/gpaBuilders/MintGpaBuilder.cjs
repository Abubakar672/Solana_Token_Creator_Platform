'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var GpaBuilder = require('../../../utils/GpaBuilder.cjs');

class MintGpaBuilder extends GpaBuilder.GpaBuilder {
  constructor(metaplex, programId) {
    super(metaplex, programId !== null && programId !== void 0 ? programId : splToken.TOKEN_PROGRAM_ID);
    this.whereSize(splToken.MINT_SIZE);
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

exports.MintGpaBuilder = MintGpaBuilder;
//# sourceMappingURL=MintGpaBuilder.cjs.map
