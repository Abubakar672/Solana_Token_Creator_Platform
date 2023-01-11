'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.cjs');
var web3_js = require('@solana/web3.js');
var buffer = require('buffer');
var base58 = require('bs58');
var BN = require('bn.js');
var GmaBuilder = require('./GmaBuilder.cjs');
var Postpone = require('./Postpone.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var base58__default = /*#__PURE__*/_interopDefaultLegacy(base58);
var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

class GpaBuilder {
  /** The connection instance to use when fetching accounts. */

  /** The public key of the program we want to retrieve accounts from. */

  /** The configs to use when fetching program accounts. */
  constructor(metaplex, programId) {
    _rollupPluginBabelHelpers.defineProperty(this, "config", {});

    this.metaplex = metaplex;
    this.programId = programId;
  }

  mergeConfig(config) {
    this.config = { ...this.config,
      ...config
    };
    return this;
  }

  slice(offset, length) {
    this.config.dataSlice = {
      offset,
      length
    };
    return this;
  }

  withoutData() {
    return this.slice(0, 0);
  }

  addFilter(...filters) {
    if (!this.config.filters) {
      this.config.filters = [];
    }

    this.config.filters.push(...filters);
    return this;
  }

  where(offset, bytes) {
    if (bytes instanceof buffer.Buffer) {
      bytes = base58__default["default"].encode(bytes);
    } else if (bytes instanceof web3_js.PublicKey) {
      bytes = bytes.toBase58();
    } else if (bytes instanceof BN__default["default"]) {
      bytes = base58__default["default"].encode(bytes.toArray());
    } else if (typeof bytes !== 'string') {
      bytes = base58__default["default"].encode(new BN__default["default"](bytes, 'le').toArray());
    }

    return this.addFilter({
      memcmp: {
        offset,
        bytes
      }
    });
  }

  whereSize(dataSize) {
    return this.addFilter({
      dataSize
    });
  }

  sortUsing(callback) {
    this.sortCallback = callback;
    return this;
  }

  async get() {
    const accounts = await this.metaplex.rpc().getProgramAccounts(this.programId, this.config);

    if (this.sortCallback) {
      accounts.sort(this.sortCallback);
    }

    return accounts;
  }

  lazy() {
    return Postpone.Postpone.make(() => this.get());
  }

  async getAndMap(callback) {
    return this.lazy().map(callback).run();
  }

  async getPublicKeys() {
    return this.getAndMap(account => account.publicKey);
  }

  async getDataAsPublicKeys() {
    return this.getAndMap(account => new web3_js.PublicKey(account.data));
  }

  getMultipleAccounts(callback, options) {
    const cb = callback !== null && callback !== void 0 ? callback : account => new web3_js.PublicKey(account.data);
    return Postpone.Postpone.make(async () => {
      return new GmaBuilder.GmaBuilder(this.metaplex, await this.getAndMap(cb), options);
    });
  }

}

exports.GpaBuilder = GpaBuilder;
//# sourceMappingURL=GpaBuilder.cjs.map
