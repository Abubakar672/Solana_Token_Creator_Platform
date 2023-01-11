'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BN = require('bn.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

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
  return new BN__default["default"](msSinceEpoch);
}

exports.convertToMillisecondsSinceEpoch = convertToMillisecondsSinceEpoch;
//# sourceMappingURL=DateTimeString.cjs.map
