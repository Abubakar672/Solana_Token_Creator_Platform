'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var StorageClient = require('./StorageClient.cjs');

const storageModule = () => ({
  install(metaplex) {
    const storageClient = new StorageClient.StorageClient();

    metaplex.storage = () => storageClient;
  }

});

exports.storageModule = storageModule;
//# sourceMappingURL=plugin.cjs.map
