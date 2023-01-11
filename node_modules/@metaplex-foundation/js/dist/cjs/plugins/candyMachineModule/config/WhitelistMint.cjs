'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var BN = require('bn.js');
var SdkError = require('../../../errors/SdkError.cjs');
var PublicKeyString = require('../../../types/PublicKeyString.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

const BURN_EVERY_TIME = 'burnEveryTime';
const NEVER_BURN = 'neverBurn';
const WhitelistModes = [BURN_EVERY_TIME, NEVER_BURN];
/**
 * Whitelist Modes
 *
 * burnEveryTime - Whitelist token is burned after the mint
 * neverBurn - Whitelist token is returned to holder
 */

function whiteListMintSettingsFromConfig(config) {
  if (config == null) return undefined;
  let mode;

  switch (config.mode) {
    case BURN_EVERY_TIME:
      mode = mplCandyMachine.WhitelistMintMode.BurnEveryTime;
      break;

    case NEVER_BURN:
      mode = mplCandyMachine.WhitelistMintMode.NeverBurn;
      break;

    default:
      throw new SdkError.UnreachableCaseError(config.mode);
  }

  const mint = PublicKeyString.convertToPublickKey(config.mint);
  const discountPrice = new BN__default["default"](config.discountPrice);
  return { ...config,
    mode,
    mint,
    discountPrice
  };
}

exports.BURN_EVERY_TIME = BURN_EVERY_TIME;
exports.NEVER_BURN = NEVER_BURN;
exports.WhitelistModes = WhitelistModes;
exports.whiteListMintSettingsFromConfig = whiteListMintSettingsFromConfig;
//# sourceMappingURL=WhitelistMint.cjs.map
