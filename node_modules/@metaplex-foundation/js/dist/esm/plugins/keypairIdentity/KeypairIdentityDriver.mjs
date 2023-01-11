import nacl from 'tweetnacl';

class KeypairIdentityDriver {
  constructor(keypair) {
    this.keypair = keypair;
    this.publicKey = keypair.publicKey;
    this.secretKey = keypair.secretKey;
  }

  async signMessage(message) {
    return nacl.sign.detached(message, this.secretKey);
  }

  async signTransaction(transaction) {
    transaction.partialSign(this.keypair);
    return transaction;
  }

  async signAllTransactions(transactions) {
    return Promise.all(transactions.map(transaction => this.signTransaction(transaction)));
  }

}

export { KeypairIdentityDriver };
//# sourceMappingURL=KeypairIdentityDriver.mjs.map
