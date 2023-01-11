import { StorageClient } from './StorageClient.mjs';

const storageModule = () => ({
  install(metaplex) {
    const storageClient = new StorageClient();

    metaplex.storage = () => storageClient;
  }

});

export { storageModule };
//# sourceMappingURL=plugin.mjs.map
