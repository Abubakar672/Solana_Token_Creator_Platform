'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cloneDeep = require('lodash.clonedeep');
var common = require('../../utils/common.cjs');
var MetaplexFile = require('../storageModule/MetaplexFile.cjs');
var Operation = require('../../types/Operation.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);

const Key = 'UploadMetadataOperation';
const uploadMetadataOperation = Operation.useOperation(Key);
const uploadMetadataOperationHandler = {
  handle: async (operation, metaplex) => {
    const rawMetadata = operation.input;
    const files = getAssetsFromJsonMetadata(rawMetadata);
    const assetUris = await metaplex.storage().uploadAll(files);
    const metadata = replaceAssetsWithUris(rawMetadata, assetUris);
    const uri = await metaplex.storage().uploadJson(metadata);
    return {
      uri,
      metadata,
      assetUris
    };
  }
};
const getAssetsFromJsonMetadata = input => {
  const files = [];
  common.walk(input, (next, value) => {
    if (MetaplexFile.isMetaplexFile(value)) {
      files.push(value);
    } else {
      next(value);
    }
  });
  return files;
};
const replaceAssetsWithUris = (input, replacements) => {
  const clone = cloneDeep__default["default"](input);
  let index = 0;
  common.walk(clone, (next, value, key, parent) => {
    if (MetaplexFile.isMetaplexFile(value) && index < replacements.length) {
      parent[key] = replacements[index++];
    }

    next(value);
  });
  return clone;
};

exports.getAssetsFromJsonMetadata = getAssetsFromJsonMetadata;
exports.replaceAssetsWithUris = replaceAssetsWithUris;
exports.uploadMetadataOperation = uploadMetadataOperation;
exports.uploadMetadataOperationHandler = uploadMetadataOperationHandler;
//# sourceMappingURL=uploadMetadata.cjs.map
