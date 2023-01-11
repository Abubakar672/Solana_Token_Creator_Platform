'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var GuestIdentityDriver = require('./GuestIdentityDriver.cjs');

const guestIdentity = () => ({
  install(metaplex) {
    metaplex.identity().setDriver(new GuestIdentityDriver.GuestIdentityDriver());
  }

});

exports.guestIdentity = guestIdentity;
//# sourceMappingURL=plugin.cjs.map
