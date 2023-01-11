import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import * as BundlrPackage from '@bundlr-network/client';
import BigNumber from 'bignumber.js';
import BN from 'bn.js';
import { getBytesFromMetaplexFiles } from '../storageModule/MetaplexFile.mjs';
import { AssetUploadFailedError, BundlrWithdrawError, FailedToConnectToBundlrAddressError, FailedToInitializeBundlrError } from '../../errors/BundlrError.mjs';
import { isKeypairSigner } from '../../types/Signer.mjs';
import { lamports } from '../../types/Amount.mjs';

class BundlrStorageDriver {
  constructor(metaplex, options = {}) {
    _defineProperty(this, "_bundlr", null);

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
    const amount = await this.getUploadPrice(getBytesFromMetaplexFiles(...files));
    await this.fund(amount);
    const promises = files.map(async file => {
      const {
        status,
        data
      } = await bundlr.uploader.upload(file.buffer, getMetaplexFileTagsWithContentType(file));

      if (status >= 300) {
        throw new AssetUploadFailedError(status);
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
      toFund = toFund.isGreaterThan(balance) ? toFund.minus(balance) : new BigNumber(0);
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
    const minimumBalance = new BigNumber(5000);

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
      throw new BundlrWithdrawError(status);
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
    const bundlr = isKeypairSigner(identity) ? this.initNodeBundlr(address, currency, identity, options) : await this.initWebBundlr(address, currency, identity, options);

    try {
      // Check for valid bundlr node.
      await bundlr.utils.getBundlerAddress(currency);
    } catch (error) {
      throw new FailedToConnectToBundlrAddressError(address, error);
    }

    return bundlr;
  }

  initNodeBundlr(address, currency, keypair, options) {
    return new BundlrPackage.default(address, currency, keypair.secretKey, options);
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
    const bundlr = new BundlrPackage.WebBundlr(address, currency, wallet, options);

    try {
      // Try to initiate bundlr.
      await bundlr.ready();
    } catch (error) {
      throw new FailedToInitializeBundlrError(error);
    }

    return bundlr;
  }

}
const isBundlrStorageDriver = storageDriver => {
  return 'bundlr' in storageDriver && 'getBalance' in storageDriver && 'fund' in storageDriver && 'withdrawAll' in storageDriver;
};

const bigNumberToAmount = bigNumber => {
  return lamports(new BN(bigNumber.decimalPlaces(0).toString()));
};

const amountToBigNumber = amount => {
  return new BigNumber(amount.basisPoints.toString());
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

export { BundlrStorageDriver, isBundlrStorageDriver };
//# sourceMappingURL=BundlrStorageDriver.mjs.map
