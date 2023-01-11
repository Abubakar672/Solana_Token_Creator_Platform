import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import { Keypair } from '@solana/web3.js';
import nacl from 'tweetnacl';
import { Buffer } from 'buffer';
import { UninitializedDerivedIdentityError } from './errors.mjs';
import { transferBuilder } from '../../programs/system/transactionBuilders/transferBuilder.mjs';
import { assertSol } from '../../types/Amount.mjs';

class DerivedIdentityClient {
  constructor(metaplex) {
    _defineProperty(this, "originalSigner", null);

    _defineProperty(this, "derivedKeypair", null);

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
    const signature = await this.originalSigner.signMessage(Buffer.from(message));
    const seeds = nacl.hash(signature).slice(0, 32);
    this.derivedKeypair = Keypair.fromSeed(seeds);
  }

  async fund(amount) {
    this.assertInitialized();
    assertSol(amount);
    const transfer = transferBuilder({
      from: this.originalSigner,
      to: this.derivedKeypair.publicKey,
      lamports: amount.basisPoints.toNumber()
    });
    await this.metaplex.rpc().sendAndConfirmTransaction(transfer);
  }

  async withdraw(amount) {
    this.assertInitialized();
    assertSol(amount);
    const transfer = transferBuilder({
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
    return nacl.sign.detached(message, this.secretKey);
  }

  async signTransaction(transaction) {
    transaction.partialSign(this);
    return transaction;
  }

  async signAllTransactions(transactions) {
    return Promise.all(transactions.map(transaction => this.signTransaction(transaction)));
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

  assertInitialized() {
    if (this.derivedKeypair === null || this.originalSigner === null) {
      throw new UninitializedDerivedIdentityError();
    }
  }

}

export { DerivedIdentityClient };
//# sourceMappingURL=DerivedIdentityClient.mjs.map
