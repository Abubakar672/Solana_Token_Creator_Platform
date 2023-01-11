'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BN = require('bn.js');
var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var GpaBuilder = require('../../../utils/GpaBuilder.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

class TokenMetadataGpaBuilder extends GpaBuilder.GpaBuilder {
  constructor(metaplex, programId) {
    super(metaplex, programId !== null && programId !== void 0 ? programId : mplTokenMetadata.PROGRAM_ID);
  }

  whereKey(key) {
    return this.where(0, new BN__default["default"](key, 'le'));
  }

}

exports.TokenMetadataGpaBuilder = TokenMetadataGpaBuilder;
//# sourceMappingURL=TokenMetadataGpaBuilder.cjs.map
