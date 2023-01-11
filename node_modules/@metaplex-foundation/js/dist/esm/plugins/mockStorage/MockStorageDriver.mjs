import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import BN from 'bn.js';
import { AssetNotFoundError } from '../../errors/SdkError.mjs';
import { lamports } from '../../types/Amount.mjs';

const DEFAULT_BASE_URL = 'https://mockstorage.example.com/';
const DEFAULT_COST_PER_BYTE = new BN(1);
class MockStorageDriver {
  constructor(options) {
    var _options$baseUrl;

    _defineProperty(this, "cache", {});

    this.baseUrl = (_options$baseUrl = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _options$baseUrl !== void 0 ? _options$baseUrl : DEFAULT_BASE_URL;
    this.costPerByte = (options === null || options === void 0 ? void 0 : options.costPerByte) != null ? new BN(options === null || options === void 0 ? void 0 : options.costPerByte) : DEFAULT_COST_PER_BYTE;
  }

  async getUploadPrice(bytes) {
    return lamports(this.costPerByte.muln(bytes));
  }

  async upload(file) {
    const uri = `${this.baseUrl}${file.uniqueName}`;
    this.cache[uri] = file;
    return uri;
  }

  async download(uri) {
    const file = this.cache[uri];

    if (!file) {
      throw new AssetNotFoundError(uri);
    }

    return file;
  }

}

export { MockStorageDriver };
//# sourceMappingURL=MockStorageDriver.mjs.map
