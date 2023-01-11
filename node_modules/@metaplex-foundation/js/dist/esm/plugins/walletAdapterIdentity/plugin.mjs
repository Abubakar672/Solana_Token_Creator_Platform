import { WalletAdapterIdentityDriver } from './WalletAdapterIdentityDriver.mjs';
import { GuestIdentityDriver } from '../guestIdentity/GuestIdentityDriver.mjs';

const walletAdapterIdentity = walletAdapter => ({
  install(metaplex) {
    metaplex.identity().setDriver(new WalletAdapterIdentityDriver(walletAdapter));
  }

});
const walletOrGuestIdentity = walletAdapter => ({
  install(metaplex) {
    const identity = walletAdapter ? new WalletAdapterIdentityDriver(walletAdapter) : new GuestIdentityDriver();
    metaplex.identity().setDriver(identity);
  }

});

export { walletAdapterIdentity, walletOrGuestIdentity };
//# sourceMappingURL=plugin.mjs.map
