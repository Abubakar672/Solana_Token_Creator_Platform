import { defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import { Transaction } from '@solana/web3.js';

class TransactionBuilder {
  /** The list of all instructions and their respective signers. */

  /** The signer to use to pay for transaction fees. */
  constructor(transactionOptions) {
    _defineProperty(this, "records", []);

    _defineProperty(this, "feePayer", undefined);

    this.transactionOptions = transactionOptions;
  }

  static make(transactionOptions) {
    return new TransactionBuilder(transactionOptions);
  }

  prepend(...txs) {
    const newRecords = txs.flatMap(tx => tx instanceof TransactionBuilder ? tx.getInstructionsWithSigners() : [tx]);
    this.records = [...newRecords, ...this.records];
    return this;
  }

  append(...txs) {
    const newRecords = txs.flatMap(tx => tx instanceof TransactionBuilder ? tx.getInstructionsWithSigners() : [tx]);
    this.records = [...this.records, ...newRecords];
    return this;
  }

  add(...txs) {
    return this.append(...txs);
  }

  splitUsingKey(key, include = true) {
    const firstBuilder = new TransactionBuilder(this.transactionOptions);
    const secondBuilder = new TransactionBuilder(this.transactionOptions);
    let keyPosition = this.records.findIndex(record => record.key === key);

    if (keyPosition > -1) {
      keyPosition += include ? 1 : 0;
      firstBuilder.add(...this.records.slice(0, keyPosition));
      firstBuilder.add(...this.records.slice(keyPosition));
    } else {
      firstBuilder.add(this);
    }

    return [firstBuilder, secondBuilder];
  }

  splitBeforeKey(key) {
    return this.splitUsingKey(key, false);
  }

  splitAfterKey(key) {
    return this.splitUsingKey(key, true);
  }

  getInstructionsWithSigners() {
    return this.records;
  }

  getInstructions() {
    return this.records.map(record => record.instruction);
  }

  getSigners() {
    const feePayer = this.feePayer == null ? [] : [this.feePayer];
    const signers = this.records.flatMap(record => record.signers);
    return [...feePayer, ...signers];
  }

  setTransactionOptions(transactionOptions) {
    this.transactionOptions = transactionOptions;
    return this;
  }

  getTransactionOptions() {
    return this.transactionOptions;
  }

  setFeePayer(feePayer) {
    this.feePayer = feePayer;
    return this;
  }

  getFeePayer() {
    var _this$feePayer;

    return (_this$feePayer = this.feePayer) === null || _this$feePayer === void 0 ? void 0 : _this$feePayer.publicKey;
  }

  when(condition, callback) {
    return condition ? callback(this) : this;
  }

  unless(condition, callback) {
    return this.when(!condition, callback);
  }

  toTransaction() {
    const tx = new Transaction(this.getTransactionOptions());
    tx.add(...this.getInstructions());
    tx.feePayer = this.getFeePayer();
    return tx;
  }

}

export { TransactionBuilder };
//# sourceMappingURL=TransactionBuilder.mjs.map
