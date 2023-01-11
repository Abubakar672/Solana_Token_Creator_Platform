import { AwsStorageDriver } from './AwsStorageDriver.mjs';

const awsStorage = (client, bucketName) => ({
  install(metaplex) {
    metaplex.storage().setDriver(new AwsStorageDriver(client, bucketName));
  }

});

export { awsStorage };
//# sourceMappingURL=plugin.mjs.map
