'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var BN = require('bn.js');
var DateTimeString = require('../../../types/DateTimeString.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

const ENDSETTING_DATE = 'date';
const ENDSETTING_AMOUNT = 'amount';
const EndSettingModes = [ENDSETTING_DATE, ENDSETTING_AMOUNT];
function endSettingsFromConfig(config) {
  if (config == null) return undefined;
  const endSettingType = config.endSettingType === ENDSETTING_DATE ? mplCandyMachine.EndSettingType.Date : mplCandyMachine.EndSettingType.Amount;
  const value = config.endSettingType === ENDSETTING_DATE ? DateTimeString.convertToMillisecondsSinceEpoch(config.value) : new BN__default["default"](config.value);
  return {
    endSettingType,
    number: value
  };
}

exports.ENDSETTING_AMOUNT = ENDSETTING_AMOUNT;
exports.ENDSETTING_DATE = ENDSETTING_DATE;
exports.EndSettingModes = EndSettingModes;
exports.endSettingsFromConfig = endSettingsFromConfig;
//# sourceMappingURL=EndSettings.cjs.map
