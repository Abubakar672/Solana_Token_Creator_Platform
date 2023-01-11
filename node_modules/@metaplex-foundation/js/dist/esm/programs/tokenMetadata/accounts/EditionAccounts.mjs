import { Key, MasterEditionV1, MasterEditionV2, Edition } from '@metaplex-foundation/mpl-token-metadata';
import { getAccountParsingFunction } from '../../../types/Account.mjs';

const parseOriginalOrPrintEditionAccount = getAccountParsingFunction({
  name: 'MasterEditionV1 | MasterEditionV2 | Edition',
  deserialize: (data, offset = 0) => {
    if ((data === null || data === void 0 ? void 0 : data[0]) === Key.MasterEditionV1) {
      return MasterEditionV1.deserialize(data, offset);
    } else if ((data === null || data === void 0 ? void 0 : data[0]) === Key.MasterEditionV2) {
      return MasterEditionV2.deserialize(data, offset);
    } else {
      return Edition.deserialize(data, offset);
    }
  }
});
const parseOriginalEditionAccount = getAccountParsingFunction({
  name: 'MasterEditionV1 | MasterEditionV2',
  deserialize: (data, offset = 0) => {
    if ((data === null || data === void 0 ? void 0 : data[0]) === Key.MasterEditionV1) {
      return MasterEditionV1.deserialize(data, offset);
    } else {
      return MasterEditionV2.deserialize(data, offset);
    }
  }
});
const parsePrintEditionAccount = getAccountParsingFunction(Edition);
const isOriginalEditionAccount = account => {
  return 'maxSupply' in account.data;
};
const isPrintEditionAccount = account => {
  return !isOriginalEditionAccount(account);
};

export { isOriginalEditionAccount, isPrintEditionAccount, parseOriginalEditionAccount, parseOriginalOrPrintEditionAccount, parsePrintEditionAccount };
//# sourceMappingURL=EditionAccounts.mjs.map
