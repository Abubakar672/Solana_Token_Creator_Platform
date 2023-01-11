import { WhitelistMintSettings } from '@metaplex-foundation/mpl-candy-machine';
import { PublicKeyString } from "../../../types";
export declare const BURN_EVERY_TIME = "burnEveryTime";
export declare const NEVER_BURN = "neverBurn";
export declare const WhitelistModes: readonly ["burnEveryTime", "neverBurn"];
/**
 * Whitelist Modes
 *
 * burnEveryTime - Whitelist token is burned after the mint
 * neverBurn - Whitelist token is returned to holder
 */
export declare type WhitelistMode = typeof WhitelistModes[number];
/**
 * Whitelist Mint Settings

 * Whitelist settings provide a variety of different use cases and revolve
 * around the idea of using custom SPL tokens to offer special rights to token
 * holders - how said SPL token is distributed is up to you.
 *
 * @property mode - {@link WhitelistMode} (burnEveryTime or neverBurn)
 * @property mint - Mint address of the whitelist token
 * @property presale - Indicates whether whitelist token holders can mint before goLiveDate
 * @property discountPrice - Price for whitelist token holders
 */
export declare type WhitelistMintSettingsConfig = {
    mode: WhitelistMode;
    mint: PublicKeyString;
    presale: boolean;
    discountPrice: number;
};
export declare function whiteListMintSettingsFromConfig(config?: WhitelistMintSettingsConfig): WhitelistMintSettings | undefined;
