'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var splToken = require('@solana/spl-token');
var GpaBuilder = require('../../../utils/GpaBuilder.cjs');

class TokenGpaBuilder extends GpaBuilder.GpaBuilder {
  constructor(metaplex, programId) {
    super(metaplex, programId !== null && programId !== void 0 ? programId : splToken.TOKEN_PROGRAM_ID);
    this.whereSize(splToken.ACCOUNT_SIZE);
  }

  selectMint() {
    return this.slice(0, 32);
  }

  whereMint(mint) {
    return this.where(0, mint);
  }

  selectOwner() {
    return this.slice(32, 32);
  }

  whereOwner(owner) {
    return this.where(32, owner);
  }

  selectAmount() {
    return this.slice(64, 8);
  }

  whereAmount(amount) {
    return this.where(64, amount);
  }

  whereDoesntHaveDelegate() {
    return this.where(72, 0);
  }

  whereHasDelegate() {
    return this.where(72, 1);
  }

  whereDelegate(delegate) {
    return this.whereHasDelegate().where(76, delegate);
  } // TODO: Map the rest of the layout.
  // https://github.com/solana-labs/solana-program-library/blob/master/token/js/src/state/account.ts#L59


}

exports.TokenGpaBuilder = TokenGpaBuilder;
//# sourceMappingURL=TokenGpaBuilder.cjs.map
