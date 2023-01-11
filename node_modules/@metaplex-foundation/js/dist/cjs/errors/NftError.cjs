'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MetaplexError = require('./MetaplexError.cjs');

class NftError extends MetaplexError.MetaplexError {
  constructor(input) {
    super({ ...input,
      key: `plugin.nft.${input.key}`,
      title: `NFT > ${input.title}`,
      source: 'plugin',
      sourceDetails: 'NFT'
    });
  }

}
class NftNotFoundError extends NftError {
  constructor(mint, cause) {
    super({
      cause,
      key: 'nft_not_found',
      title: 'NFT Not Found',
      problem: 'No Metadata account could be found for the provided mint address: ' + `[${mint.toBase58()}].`,
      solution: 'Ensure the provided mint address is valid and that an associated ' + 'Metadata account exists on the blockchain.'
    });
  }

}

exports.NftError = NftError;
exports.NftNotFoundError = NftNotFoundError;
//# sourceMappingURL=NftError.cjs.map
