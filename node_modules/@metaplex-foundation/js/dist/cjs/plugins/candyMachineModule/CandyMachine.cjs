'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var candyMachineInternals = require('../../programs/candyMachine/accounts/candyMachineInternals.cjs');
var Model = require('../../types/Model.cjs');

class CandyMachine extends Model.Model {
  // -----------------
  // Data from CandyMachineAccount
  // -----------------
  // -----------------
  // Addresses from CandyMachineAccount
  // -----------------

  /**
   * Address at which the Candy Machine is stored on chain.
   */
  constructor(candyMachineAccount, rawData) {
    var _accountData$data$goL, _accountData$data$end, _accountData$data$hid, _accountData$data$whi, _accountData$data$gat, _accountData$tokenMin;

    super(); // CandyMachine inner Data

    this.candyMachineAccount = candyMachineAccount;
    this.rawData = rawData;
    const accountData = candyMachineAccount.data;
    this.uuid = accountData.data.uuid;
    this.price = accountData.data.price;
    this.symbol = accountData.data.symbol;
    this.sellerFeeBasisPoints = accountData.data.sellerFeeBasisPoints;
    this.maxSupply = accountData.data.maxSupply;
    this.isMutable = accountData.data.isMutable;
    this.retainAuthority = accountData.data.retainAuthority;
    this.goLiveDate = (_accountData$data$goL = accountData.data.goLiveDate) !== null && _accountData$data$goL !== void 0 ? _accountData$data$goL : undefined;
    this.itemsAvailable = accountData.data.itemsAvailable;
    this.endSettings = (_accountData$data$end = accountData.data.endSettings) !== null && _accountData$data$end !== void 0 ? _accountData$data$end : undefined;
    this.hiddenSettings = (_accountData$data$hid = accountData.data.hiddenSettings) !== null && _accountData$data$hid !== void 0 ? _accountData$data$hid : undefined;
    this.whitelistMintSettings = (_accountData$data$whi = accountData.data.whitelistMintSettings) !== null && _accountData$data$whi !== void 0 ? _accountData$data$whi : undefined;
    this.gatekeeper = (_accountData$data$gat = accountData.data.gatekeeper) !== null && _accountData$data$gat !== void 0 ? _accountData$data$gat : undefined;
    this.creators = accountData.data.creators; // CandyMachine Data

    this.itemsRedeemed = accountData.itemsRedeemed; // CandyMachine Addresses

    this.authorityAddress = accountData.authority;
    this.walletAddress = accountData.wallet;
    this.tokenMintAddress = (_accountData$tokenMin = accountData.tokenMint) !== null && _accountData$tokenMin !== void 0 ? _accountData$tokenMin : undefined;
    this.candyMachineAddress = candyMachineAccount.publicKey;
  }

  get assetsCount() {
    return candyMachineInternals.getConfigLinesCount(this.rawData);
  }

  get assets() {
    return candyMachineInternals.getConfigLines(this.rawData);
  }

  get isFull() {
    return this.assetsCount >= this.maxSupply;
  }

  get candyMachineData() {
    var _this$goLiveDate, _this$endSettings, _this$hiddenSettings, _this$whitelistMintSe, _this$gatekeeper;

    return {
      uuid: this.uuid,
      price: this.price,
      symbol: this.symbol,
      sellerFeeBasisPoints: this.sellerFeeBasisPoints,
      maxSupply: this.maxSupply,
      isMutable: this.isMutable,
      retainAuthority: this.retainAuthority,
      goLiveDate: (_this$goLiveDate = this.goLiveDate) !== null && _this$goLiveDate !== void 0 ? _this$goLiveDate : null,
      itemsAvailable: this.itemsAvailable,
      endSettings: (_this$endSettings = this.endSettings) !== null && _this$endSettings !== void 0 ? _this$endSettings : null,
      hiddenSettings: (_this$hiddenSettings = this.hiddenSettings) !== null && _this$hiddenSettings !== void 0 ? _this$hiddenSettings : null,
      whitelistMintSettings: (_this$whitelistMintSe = this.whitelistMintSettings) !== null && _this$whitelistMintSe !== void 0 ? _this$whitelistMintSe : null,
      gatekeeper: (_this$gatekeeper = this.gatekeeper) !== null && _this$gatekeeper !== void 0 ? _this$gatekeeper : null,
      creators: this.creators
    };
  }

  updatedCandyMachineData(update) {
    const candyUpdate = Object.entries(update).reduce((acc, [key, value]) => {
      if (this.candyMachineData.hasOwnProperty(key)) {
        acc[key] = value;
      }

      return acc;
    }, {});
    return { ...this.candyMachineData,
      ...candyUpdate
    };
  }

  static fromAccount(candyMachineAccount, rawData) {
    return new CandyMachine(candyMachineAccount, rawData);
  }

}

exports.CandyMachine = CandyMachine;
//# sourceMappingURL=CandyMachine.cjs.map
