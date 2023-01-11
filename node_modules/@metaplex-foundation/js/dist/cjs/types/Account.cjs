'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SdkError = require('../errors/SdkError.cjs');

function parseAccount(account, parser) {
  if ('exists' in account && !account.exists) {
    return account;
  }

  return getAccountParsingFunction(parser)(account);
}
function getAccountParsingFunction(parser) {
  function parse(account) {
    if ('exists' in account && !account.exists) {
      return account;
    }

    try {
      const data = parser.deserialize(account.data)[0];
      return { ...account,
        data
      };
    } catch (error) {
      throw new SdkError.UnexpectedAccountError(account.publicKey, parser.name, error);
    }
  }

  return parse;
}

exports.getAccountParsingFunction = getAccountParsingFunction;
exports.parseAccount = parseAccount;
//# sourceMappingURL=Account.cjs.map
