import { EndSettingType } from '@metaplex-foundation/mpl-candy-machine';
import BN from 'bn.js';
import { convertToMillisecondsSinceEpoch } from '../../../types/DateTimeString.mjs';

const ENDSETTING_DATE = 'date';
const ENDSETTING_AMOUNT = 'amount';
const EndSettingModes = [ENDSETTING_DATE, ENDSETTING_AMOUNT];
function endSettingsFromConfig(config) {
  if (config == null) return undefined;
  const endSettingType = config.endSettingType === ENDSETTING_DATE ? EndSettingType.Date : EndSettingType.Amount;
  const value = config.endSettingType === ENDSETTING_DATE ? convertToMillisecondsSinceEpoch(config.value) : new BN(config.value);
  return {
    endSettingType,
    number: value
  };
}

export { ENDSETTING_AMOUNT, ENDSETTING_DATE, EndSettingModes, endSettingsFromConfig };
//# sourceMappingURL=EndSettings.mjs.map
