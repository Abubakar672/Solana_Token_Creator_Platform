'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var assert = require('../utils/assert.cjs');

/**
 * Synonym for `string` to differentiate strings that should contain a base58 representation of
 * a {@link PublicKey}
 *
 * @private
 */

/**
 * Checks if a string is valid base58 Solana via a Regex.
 * @private
 */
function isValidSolanaAddress(address) {
  return /^[0-9a-zA-Z]{43,88}$/.test(address);
}
/**
 * Checks if a string is valid PublicKey address.
 * @private
 */

function isValidPublicKeyAddress(address) {
  if (!isValidSolanaAddress(address) || address.length > 44) return false;

  try {
    new web3_js.PublicKey(address);
    return true;
  } catch (_) {
    return false;
  }
}
/**
 * Checks if the {@link value} is valid base58 string for a PublicKey of a Solana Account.
 * @private
 */

function isPublicKeyString(value) {
  return typeof value === 'string' && isValidPublicKeyAddress(value);
}
/**
 * Tries to convert the {@link value} to a PublicKey.
 *
 * @throws {@link AssertionError} if the {@link value} is not a valid base58 string for a PublicKey of a Solana
 * Account.
 * @private
 * @throws if value is not a valid PublicKey address
 */

function convertToPublickKey(value) {
  assert["default"](isPublicKeyString(value), `${value} is not a valid PublicKey`);
  return new web3_js.PublicKey(value);
}

exports.convertToPublickKey = convertToPublickKey;
exports.isPublicKeyString = isPublicKeyString;
exports.isValidPublicKeyAddress = isValidPublicKeyAddress;
exports.isValidSolanaAddress = isValidSolanaAddress;
//# sourceMappingURL=PublicKeyString.cjs.map
