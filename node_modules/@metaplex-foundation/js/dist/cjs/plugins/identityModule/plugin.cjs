'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var IdentityClient = require('./IdentityClient.cjs');

const identityModule = () => ({
  install(metaplex) {
    const identityClient = new IdentityClient.IdentityClient();

    metaplex.identity = () => identityClient;
  }

});

exports.identityModule = identityModule;
//# sourceMappingURL=plugin.cjs.map
