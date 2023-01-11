import { PutObjectCommand } from '@aws-sdk/client-s3';
import { lamports } from '../../types/Amount.mjs';

class AwsStorageDriver {
  constructor(client, bucketName) {
    this.client = client;
    this.bucketName = bucketName;
  }

  async getUploadPrice(_bytes) {
    return lamports(0);
  }

  async upload(file) {
    const command = new PutObjectCommand({
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

export { AwsStorageDriver };
//# sourceMappingURL=AwsStorageDriver.mjs.map
