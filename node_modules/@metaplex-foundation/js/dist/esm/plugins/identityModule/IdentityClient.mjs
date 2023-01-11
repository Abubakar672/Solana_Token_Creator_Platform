import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import nacl from 'tweetnacl';
import { DriverNotProvidedError } from '../../errors/SdkError.mjs';

class IdentityClient {
  constructor() {
    _defineProperty(this, "_driver", null);
  }

  driver() {
    if (!this._driver) {
      throw new DriverNotProvidedError('IdentityDriver');
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
    return nacl.sign.detached.verify(message, signature, this.publicKey.toBytes());
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

export { IdentityClient };
//# sourceMappingURL=IdentityClient.mjs.map
