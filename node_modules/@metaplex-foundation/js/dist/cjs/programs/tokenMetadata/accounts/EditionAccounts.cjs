'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var Account = require('../../../types/Account.cjs');

const parseOriginalOrPrintEditionAccount = Account.getAccountParsingFunction({
  name: 'MasterEditionV1 | MasterEditionV2 | Edition',
  deserialize: (data, offset = 0) => {
    if ((data === null || data === void 0 ? void 0 : data[0]) === mplTokenMetadata.Key.MasterEditionV1) {
      return mplTokenMetadata.MasterEditionV1.deserialize(data, offset);
    } else if ((data === null || data === void 0 ? void 0 : data[0]) === mplTokenMetadata.Key.MasterEditionV2) {
      return mplTokenMetadata.MasterEditionV2.deserialize(data, offset);
    } else {
      return mplTokenMetadata.Edition.deserialize(data, offset);
    }
  }
});
const parseOriginalEditionAccount = Account.getAccountParsingFunction({
  name: 'MasterEditionV1 | MasterEditionV2',
  deserialize: (data, offset = 0) => {
    if ((data === null || data === void 0 ? void 0 : data[0]) === mplTokenMetadata.Key.MasterEditionV1) {
      return mplTokenMetadata.MasterEditionV1.deserialize(data, offset);
    } else {
      return mplTokenMetadata.MasterEditionV2.deserialize(data, offset);
    }
  }
});
const parsePrintEditionAccount = Account.getAccountParsingFunction(mplTokenMetadata.Edition);
const isOriginalEditionAccount = account => {
  return 'maxSupply' in account.data;
};
const isPrintEditionAccount = account => {
  return !isOriginalEditionAccount(account);
};

exports.isOriginalEditionAccount = isOriginalEditionAccount;
exports.isPrintEditionAccount = isPrintEditionAccount;
exports.parseOriginalEditionAccount = parseOriginalEditionAccount;
exports.parseOriginalOrPrintEditionAccount = parseOriginalOrPrintEditionAccount;
exports.parsePrintEditionAccount = parsePrintEditionAccount;
//# sourceMappingURL=EditionAccounts.cjs.map
