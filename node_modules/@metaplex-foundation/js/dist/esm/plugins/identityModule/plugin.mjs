import { IdentityClient } from './IdentityClient.mjs';

const identityModule = () => ({
  install(metaplex) {
    const identityClient = new IdentityClient();

    metaplex.identity = () => identityClient;
  }

});

export { identityModule };
//# sourceMappingURL=plugin.mjs.map
