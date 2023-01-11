import { PublicKey } from '@solana/web3.js';
/**
 * Synonym for `string` to differentiate strings that should contain a base58 representation of
 * a {@link PublicKey}
 *
 * @private
 */
export declare type PublicKeyString = string;
/**
 * Checks if a string is valid base58 Solana via a Regex.
 * @private
 */
export declare function isValidSolanaAddress(address: string): boolean;
/**
 * Checks if a string is valid PublicKey address.
 * @private
 */
export declare function isValidPublicKeyAddress(address: string): boolean;
/**
 * Checks if the {@link value} is valid base58 string for a PublicKey of a Solana Account.
 * @private
 */
export declare function isPublicKeyString(value: string): value is PublicKeyString;
/**
 * Tries to convert the {@link value} to a PublicKey.
 *
 * @throws {@link AssertionError} if the {@link value} is not a valid base58 string for a PublicKey of a Solana
 * Account.
 * @private
 * @throws if value is not a valid PublicKey address
 */
export declare function convertToPublickKey(value: PublicKeyString): PublicKey;
