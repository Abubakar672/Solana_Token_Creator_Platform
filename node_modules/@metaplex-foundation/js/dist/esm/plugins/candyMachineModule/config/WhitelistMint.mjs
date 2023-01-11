import { WhitelistMintMode } from '@metaplex-foundation/mpl-candy-machine';
import BN from 'bn.js';
import { UnreachableCaseError } from '../../../errors/SdkError.mjs';
import { convertToPublickKey } from '../../../types/PublicKeyString.mjs';

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
      mode = WhitelistMintMode.BurnEveryTime;
      break;

    case NEVER_BURN:
      mode = WhitelistMintMode.NeverBurn;
      break;

    default:
      throw new UnreachableCaseError(config.mode);
  }

  const mint = convertToPublickKey(config.mint);
  const discountPrice = new BN(config.discountPrice);
  return { ...config,
    mode,
    mint,
    discountPrice
  };
}

export { BURN_EVERY_TIME, NEVER_BURN, WhitelistModes, whiteListMintSettingsFromConfig };
//# sourceMappingURL=WhitelistMint.mjs.map
