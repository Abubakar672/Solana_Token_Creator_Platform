'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var Account = require('../../../types/Account.cjs');

const parseMetadataAccount = Account.getAccountParsingFunction(mplTokenMetadata.Metadata);

exports.parseMetadataAccount = parseMetadataAccount;
//# sourceMappingURL=MetadataAccount.cjs.map
