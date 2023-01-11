'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var nacl = require('tweetnacl');
var SdkError = require('../../errors/SdkError.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nacl__default = /*#__PURE__*/_interopDefaultLegacy(nacl);

class IdentityClient {
  constructor() {
    _rollupPluginBabelHelpers.defineProperty(this, "_driver", null);
  }

  driver() {
    if (!this._driver) {
      throw new SdkError.DriverNotProvidedError('IdentityDriver');
    }

    return this._driver;
  }

  setDriver(newDriver) {
    this._driver = newDriver;
  }

  get publicKey() {
    return this.driver().publicKey;
  }

  get secretKey() {
    return this.driver().secretKey;
  }

  signMessage(message) {
    return this.driver().signMessage(message);
  }

  signTransaction(transaction) {
    return this.driver().signTransaction(transaction);
  }

  signAllTransactions(transactions) {
    return this.driver().signAllTransactions(transactions);
  }

  verifyMessage(message, signature) {
    return nacl__default["default"].sign.detached.verify(message, signature, this.publicKey.toBytes());
  }

  equals(that) {
    if ('publicKey' in that) {
      that = that.publicKey;
    }

    return this.publicKey.equals(that);
  }

  hasSecretKey() {
    return this.secretKey != null;
  }

}

exports.IdentityClient = IdentityClient;
//# sourceMappingURL=IdentityClient.cjs.map
