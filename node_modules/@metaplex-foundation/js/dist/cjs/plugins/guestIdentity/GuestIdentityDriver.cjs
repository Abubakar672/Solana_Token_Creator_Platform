'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var SdkError = require('../../errors/SdkError.cjs');

class GuestIdentityDriver {
  constructor() {
    this.publicKey = web3_js.PublicKey.default;
  }

  async signMessage(_message) {
    throw new SdkError.OperationUnauthorizedForGuestsError('signMessage');
  }

  async signTransaction(_transaction) {
    throw new SdkError.OperationUnauthorizedForGuestsError('signTransaction');
  }

  async signAllTransactions(_transactions) {
    throw new SdkError.OperationUnauthorizedForGuestsError('signAllTransactions');
  }

}

exports.GuestIdentityDriver = GuestIdentityDriver;
//# sourceMappingURL=GuestIdentityDriver.cjs.map
