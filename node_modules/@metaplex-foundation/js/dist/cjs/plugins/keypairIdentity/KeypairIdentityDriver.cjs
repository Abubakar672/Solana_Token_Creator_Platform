'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nacl = require('tweetnacl');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nacl__default = /*#__PURE__*/_interopDefaultLegacy(nacl);

class KeypairIdentityDriver {
  constructor(keypair) {
    this.keypair = keypair;
    this.publicKey = keypair.publicKey;
    this.secretKey = keypair.secretKey;
  }

  async signMessage(message) {
    return nacl__default["default"].sign.detached(message, this.secretKey);
  }

  async signTransaction(transaction) {
    transaction.partialSign(this.keypair);
    return transaction;
  }

  async signAllTransactions(transactions) {
    return Promise.all(transactions.map(transaction => this.signTransaction(transaction)));
  }

}

exports.KeypairIdentityDriver = KeypairIdentityDriver;
//# sourceMappingURL=KeypairIdentityDriver.cjs.map
