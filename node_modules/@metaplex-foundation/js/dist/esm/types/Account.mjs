import { UnexpectedAccountError } from '../errors/SdkError.mjs';

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
      throw new UnexpectedAccountError(account.publicKey, parser.name, error);
    }
  }

  return parse;
}

export { getAccountParsingFunction, parseAccount };
//# sourceMappingURL=Account.mjs.map
