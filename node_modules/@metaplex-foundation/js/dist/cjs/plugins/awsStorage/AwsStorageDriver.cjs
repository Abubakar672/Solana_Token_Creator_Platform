'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clientS3 = require('@aws-sdk/client-s3');
var Amount = require('../../types/Amount.cjs');

class AwsStorageDriver {
  constructor(client, bucketName) {
    this.client = client;
    this.bucketName = bucketName;
  }

  async getUploadPrice(_bytes) {
    return Amount.lamports(0);
  }

  async upload(file) {
    const command = new clientS3.PutObjectCommand({
      Bucket: this.bucketName,
      Key: file.uniqueName,
      Body: file.buffer
    });

    try {
      await this.client.send(command);
      return await this.getUrl(file.uniqueName);
    } catch (err) {
      // TODO: Custom errors.
      throw err;
    }
  }

  async getUrl(key) {
    const region = await this.client.config.region();
    const encodedKey = encodeURIComponent(key);
    return `https://s3.${region}.amazonaws.com/${this.bucketName}/${encodedKey}`;
  }

}

exports.AwsStorageDriver = AwsStorageDriver;
//# sourceMappingURL=AwsStorageDriver.cjs.map
