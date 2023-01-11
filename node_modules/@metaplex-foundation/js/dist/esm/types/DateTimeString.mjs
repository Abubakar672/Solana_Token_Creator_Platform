import BN from 'bn.js';

/**
 * Synonym for `string` to differentiate strings that should contain a Date/Timestamp
 *
 * @private
 */

/**
 * Tries to convert the {@link dateTimeString} to a big number representing time since epoch in
 * milliseconds. {@see https://www.epoch101.com/}
 *
 * @throws {@link Error} if the {@link dateTimeString} is not a valid date/time string.
 * @private
 */
function convertToMillisecondsSinceEpoch(dateTimeString) {
  const date = new Date(dateTimeString);
  const msSinceEpoch = date.valueOf();
  return new BN(msSinceEpoch);
}

export { convertToMillisecondsSinceEpoch };
//# sourceMappingURL=DateTimeString.mjs.map
