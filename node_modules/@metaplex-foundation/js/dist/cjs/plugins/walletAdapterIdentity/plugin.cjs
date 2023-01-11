'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WalletAdapterIdentityDriver = require('./WalletAdapterIdentityDriver.cjs');
var GuestIdentityDriver = require('../guestIdentity/GuestIdentityDriver.cjs');

const walletAdapterIdentity = walletAdapter => ({
  install(metaplex) {
    metaplex.identity().setDriver(new WalletAdapterIdentityDriver.WalletAdapterIdentityDriver(walletAdapter));
  }

});
const walletOrGuestIdentity = walletAdapter => ({
  install(metaplex) {
    const identity = walletAdapter ? new WalletAdapterIdentityDriver.WalletAdapterIdentityDriver(walletAdapter) : new GuestIdentityDriver.GuestIdentityDriver();
    metaplex.identity().setDriver(identity);
  }

});

exports.walletAdapterIdentity = walletAdapterIdentity;
exports.walletOrGuestIdentity = walletOrGuestIdentity;
//# sourceMappingURL=plugin.cjs.map
