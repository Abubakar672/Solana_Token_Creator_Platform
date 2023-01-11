'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var BundlrPackage = require('@bundlr-network/client');
var BigNumber = require('bignumber.js');
var BN = require('bn.js');
var MetaplexFile = require('../storageModule/MetaplexFile.cjs');
var BundlrError = require('../../errors/BundlrError.cjs');
var Signer = require('../../types/Signer.cjs');
var Amount = require('../../types/Amount.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var BundlrPackage__namespace = /*#__PURE__*/_interopNamespace(BundlrPackage);
var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);
var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

class BundlrStorageDriver {
  constructor(metaplex, options = {}) {
    _rollupPluginBabelHelpers.defineProperty(this, "_bundlr", null);

    this._metaplex = metaplex;
    this._options = {
      providerUrl: metaplex.connection.rpcEndpoint,
      ...options
    };
  }

  async getUploadPrice(bytes) {
    var _this$_options$priceM;

    const bundlr = await this.bundlr();
    const price = await bundlr.getPrice(bytes);
    return bigNumberToAmount(price.multipliedBy((_this$_options$priceM = this._options.priceMultiplier) !== null && _this$_options$priceM !== void 0 ? _this$_options$priceM : 1.5));
  }

  async upload(file) {
    const [uri] = await this.uploadAll([file]);
    return uri;
  }

  async uploadAll(files) {
    const bundlr = await this.bundlr();
    const amount = await this.getUploadPrice(MetaplexFile.getBytesFromMetaplexFiles(...files));
    await this.fund(amount);
    const promises = files.map(async file => {
      const {
        status,
        data
      } = await bundlr.uploader.upload(file.buffer, getMetaplexFileTagsWithContentType(file));

      if (status >= 300) {
        throw new BundlrError.AssetUploadFailedError(status);
      }

      return `https://arweave.net/${data.id}`;
    });
    return await Promise.all(promises);
  }

  async getBalance() {
    const bundlr = await this.bundlr();
    const balance = await bundlr.getLoadedBalance();
    return bigNumberToAmount(balance);
  }

  async fund(amount, skipBalanceCheck = false) {
    const bundlr = await this.bundlr();
    let toFund = amountToBigNumber(amount);

    if (!skipBalanceCheck) {
      const balance = await bundlr.getLoadedBalance();
      toFund = toFund.isGreaterThan(balance) ? toFund.minus(balance) : new BigNumber__default["default"](0);
    }

    if (toFund.isLessThanOrEqualTo(0)) {
      return;
    } // TODO: Catch errors and wrap in BundlrErrors.


    await bundlr.fund(toFund);
  }

  async withdrawAll() {
    // TODO(loris): Replace with "withdrawAll" when available on Bundlr.
    const bundlr = await this.bundlr();
    const balance = await bundlr.getLoadedBalance();
    const minimumBalance = new BigNumber__default["default"](5000);

    if (balance.isLessThan(minimumBalance)) {
      return;
    }

    const balanceToWithdraw = balance.minus(minimumBalance);
    await this.withdraw(bigNumberToAmount(balanceToWithdraw));
  }

  async withdraw(amount) {
    const bundlr = await this.bundlr();
    const {
      status
    } = await bundlr.withdrawBalance(amountToBigNumber(amount));

    if (status >= 300) {
      throw new BundlrError.BundlrWithdrawError(status);
    }
  }

  async bundlr() {
    if (this._bundlr) {
      return this._bundlr;
    }

    return this._bundlr = await this.initBundlr();
  }

  async initBundlr() {
    var _this$_options$addres, _this$_options, _this$_options$identi;

    const currency = 'solana';
    const address = (_this$_options$addres = (_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.address) !== null && _this$_options$addres !== void 0 ? _this$_options$addres : 'https://node1.bundlr.network';
    const options = {
      timeout: this._options.timeout,
      providerUrl: this._options.providerUrl
    };
    const identity = (_this$_options$identi = this._options.identity) !== null && _this$_options$identi !== void 0 ? _this$_options$identi : this._metaplex.identity();
    const bundlr = Signer.isKeypairSigner(identity) ? this.initNodeBundlr(address, currency, identity, options) : await this.initWebBundlr(address, currency, identity, options);

    try {
      // Check for valid bundlr node.
      await bundlr.utils.getBundlerAddress(currency);
    } catch (error) {
      throw new BundlrError.FailedToConnectToBundlrAddressError(address, error);
    }

    return bundlr;
  }

  initNodeBundlr(address, currency, keypair, options) {
    return new BundlrPackage__namespace.default(address, currency, keypair.secretKey, options);
  }

  async initWebBundlr(address, currency, identity, options) {
    const wallet = {
      publicKey: identity.publicKey,
      signMessage: message => identity.signMessage(message),
      signTransaction: transaction => identity.signTransaction(transaction),
      signAllTransactions: transactions => identity.signAllTransactions(transactions),
      sendTransaction: (transaction, connection, options = {}) => {
        const {
          signers,
          ...sendOptions
        } = options;

        if ('rpc' in this._metaplex) {
          return this._metaplex.rpc().sendTransaction(transaction, signers, sendOptions);
        }

        return connection.sendTransaction(transaction, signers !== null && signers !== void 0 ? signers : [], sendOptions);
      }
    };
    const bundlr = new BundlrPackage__namespace.WebBundlr(address, currency, wallet, options);

    try {
      // Try to initiate bundlr.
      await bundlr.ready();
    } catch (error) {
      throw new BundlrError.FailedToInitializeBundlrError(error);
    }

    return bundlr;
  }

}
const isBundlrStorageDriver = storageDriver => {
  return 'bundlr' in storageDriver && 'getBalance' in storageDriver && 'fund' in storageDriver && 'withdrawAll' in storageDriver;
};

const bigNumberToAmount = bigNumber => {
  return Amount.lamports(new BN__default["default"](bigNumber.decimalPlaces(0).toString()));
};

const amountToBigNumber = amount => {
  return new BigNumber__default["default"](amount.basisPoints.toString());
};

const getMetaplexFileTagsWithContentType = file => {
  if (!file.contentType) {
    return file.tags;
  }

  return [{
    name: 'Content-Type',
    value: file.contentType
  }, ...file.tags];
};

exports.BundlrStorageDriver = BundlrStorageDriver;
exports.isBundlrStorageDriver = isBundlrStorageDriver;
//# sourceMappingURL=BundlrStorageDriver.cjs.map
