'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AwsStorageDriver = require('./AwsStorageDriver.cjs');

const awsStorage = (client, bucketName) => ({
  install(metaplex) {
    metaplex.storage().setDriver(new AwsStorageDriver.AwsStorageDriver(client, bucketName));
  }

});

exports.awsStorage = awsStorage;
//# sourceMappingURL=plugin.cjs.map
