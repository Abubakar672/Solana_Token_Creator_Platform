'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var web3_js = require('@solana/web3.js');
var nacl = require('tweetnacl');
var buffer = require('buffer');
var errors = require('./errors.cjs');
var transferBuilder = require('../../programs/system/transactionBuilders/transferBuilder.cjs');
var Amount = require('../../types/Amount.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var nacl__default = /*#__PURE__*/_interopDefaultLegacy(nacl);

class DerivedIdentityClient {
  constructor(metaplex) {
    _rollupPluginBabelHelpers.defineProperty(this, "originalSigner", null);

    _rollupPluginBabelHelpers.defineProperty(this, "derivedKeypair", null);

    this.metaplex = metaplex;
  }

  get publicKey() {
    this.assertInitialized();
    return this.derivedKeypair.publicKey;
  }

  get secretKey() {
    this.assertInitialized();
    return this.derivedKeypair.secretKey;
  }

  get originalPublicKey() {
    this.assertInitialized();
    return this.originalSigner.publicKey;
  }

  async deriveFrom(message, originalSigner) {
    this.originalSigner = originalSigner !== null && originalSigner !== void 0 ? originalSigner : this.metaplex.identity().driver();
    const signature = await this.originalSigner.signMessage(buffer.Buffer.from(message));
    const seeds = nacl__default["default"].hash(signature).slice(0, 32);
    this.derivedKeypair = web3_js.Keypair.fromSeed(seeds);
  }

  async fund(amount) {
    this.assertInitialized();
    Amount.assertSol(amount);
    const transfer = transferBuilder.transferBuilder({
      from: this.originalSigner,
      to: this.derivedKeypair.publicKey,
      lamports: amount.basisPoints.toNumber()
    });
    await this.metaplex.rpc().sendAndConfirmTransaction(transfer);
  }

  async withdraw(amount) {
    this.assertInitialized();
    Amount.assertSol(amount);
    const transfer = transferBuilder.transferBuilder({
      from: this.derivedKeypair,
      to: this.originalSigner.publicKey,
      lamports: amount.basisPoints.toNumber()
    });
    await this.metaplex.rpc().sendAndConfirmTransaction(transfer);
  }

  async withdrawAll() {
    this.assertInitialized();
    const balance = await this.metaplex.rpc().getBalance(this.derivedKeypair.publicKey);
    await this.withdraw(balance);
  }

  close() {
    this.originalSigner = null;
    this.derivedKeypair = null;
  }

  async signMessage(message) {
    return nacl__default["default"].sign.detached(message, this.secretKey);
  }

  async signTransaction(transaction) {
    transaction.partialSign(this);
    return transaction;
  }

  async signAllTransactions(transactions) {
    return Promise.all(transactions.map(transaction => this.signTransaction(transaction)));
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

  assertInitialized() {
    if (this.derivedKeypair === null || this.originalSigner === null) {
      throw new errors.UninitializedDerivedIdentityError();
    }
  }

}

exports.DerivedIdentityClient = DerivedIdentityClient;
//# sourceMappingURL=DerivedIdentityClient.cjs.map
