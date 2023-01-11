'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var BN = require('bn.js');
var SdkError = require('../../errors/SdkError.cjs');
var Amount = require('../../types/Amount.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

const DEFAULT_BASE_URL = 'https://mockstorage.example.com/';
const DEFAULT_COST_PER_BYTE = new BN__default["default"](1);
class MockStorageDriver {
  constructor(options) {
    var _options$baseUrl;

    _rollupPluginBabelHelpers.defineProperty(this, "cache", {});

    this.baseUrl = (_options$baseUrl = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _options$baseUrl !== void 0 ? _options$baseUrl : DEFAULT_BASE_URL;
    this.costPerByte = (options === null || options === void 0 ? void 0 : options.costPerByte) != null ? new BN__default["default"](options === null || options === void 0 ? void 0 : options.costPerByte) : DEFAULT_COST_PER_BYTE;
  }

  async getUploadPrice(bytes) {
    return Amount.lamports(this.costPerByte.muln(bytes));
  }

  async upload(file) {
    const uri = `${this.baseUrl}${file.uniqueName}`;
    this.cache[uri] = file;
    return uri;
  }

  async download(uri) {
    const file = this.cache[uri];

    if (!file) {
      throw new SdkError.AssetNotFoundError(uri);
    }

    return file;
  }

}

exports.MockStorageDriver = MockStorageDriver;
//# sourceMappingURL=MockStorageDriver.cjs.map
