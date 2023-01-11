'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useJsonMetadataTask = require('./useJsonMetadataTask.cjs');
var useEditionTask = require('./useEditionTask.cjs');
var common = require('../../utils/common.cjs');
var EditionAccounts = require('../../programs/tokenMetadata/accounts/EditionAccounts.cjs');
var Model = require('../../types/Model.cjs');

class Nft extends Model.Model {
  /** The Metadata PDA account defining the NFT. */

  /** Tasks. */

  /** Data from the Metadata account. */
  constructor(metadataAccount, metaplex) {
    super();
    this.metadataAccount = metadataAccount;
    this.metadataTask = useJsonMetadataTask.useJsonMetadataTask(metaplex, this);
    this.editionTask = useEditionTask.useEditionTask(metaplex, this);
    this.updateAuthority = metadataAccount.data.updateAuthority;
    this.mint = metadataAccount.data.mint;
    this.name = common.removeEmptyChars(metadataAccount.data.data.name);
    this.symbol = common.removeEmptyChars(metadataAccount.data.data.symbol);
    this.uri = common.removeEmptyChars(metadataAccount.data.data.uri);
    this.sellerFeeBasisPoints = metadataAccount.data.data.sellerFeeBasisPoints;
    this.creators = metadataAccount.data.data.creators;
    this.primarySaleHappened = metadataAccount.data.primarySaleHappened;
    this.isMutable = metadataAccount.data.isMutable;
    this.editionNonce = metadataAccount.data.editionNonce;
    this.tokenStandard = metadataAccount.data.tokenStandard;
    this.collection = metadataAccount.data.collection;
    this.uses = metadataAccount.data.uses;
  }

  get metadata() {
    var _this$metadataTask$ge;

    return (_this$metadataTask$ge = this.metadataTask.getResult()) !== null && _this$metadataTask$ge !== void 0 ? _this$metadataTask$ge : {};
  }

  get editionAccount() {
    var _this$editionTask$get;

    return (_this$editionTask$get = this.editionTask.getResult()) !== null && _this$editionTask$get !== void 0 ? _this$editionTask$get : null;
  }

  get originalEdition() {
    if (!this.isOriginal()) {
      return null;
    }

    return this.editionAccount.data;
  }

  get printEdition() {
    if (!this.isPrint()) {
      return null;
    }

    return this.editionAccount.data;
  }

  equals(other) {
    const mint = other instanceof Nft ? other.mint : other;
    return this.mint.equals(mint);
  }

  isOriginal() {
    return this.editionAccount != null && EditionAccounts.isOriginalEditionAccount(this.editionAccount);
  }

  isPrint() {
    return this.editionAccount != null && EditionAccounts.isPrintEditionAccount(this.editionAccount);
  }

}

exports.Nft = Nft;
//# sourceMappingURL=Nft.cjs.map
