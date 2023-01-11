'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Client_helpers = require('./Client.helpers.cjs');
var CandyMachineError = require('../../errors/CandyMachineError.cjs');
var common = require('../../utils/common.cjs');

async function uploadAssetForCandyMachine(params) {
  var _rawMetadata$seller_f, _rawMetadata$properti, _rawMetadata$properti2;

  const {
    candyMachineAddress,
    authoritySigner,
    metadata: rawMetadata,
    addToCandyMachine = false,
    confirmOptions
  } = params;
  const candyMachine = await this.findByAddress(candyMachineAddress);

  if (candyMachine == null) {
    throw new CandyMachineError.CandyMachineToUpdateNotFoundError(candyMachineAddress);
  }

  Client_helpers.assertNotFull(candyMachine, candyMachine.assetsCount);
  const {
    uri,
    metadata
  } = await this.metaplex.nfts().uploadMetadata({ ...rawMetadata,
    // TODO(thlorenz): Is this correct?
    seller_fee_basis_points: (_rawMetadata$seller_f = rawMetadata.seller_fee_basis_points) !== null && _rawMetadata$seller_f !== void 0 ? _rawMetadata$seller_f : candyMachine.sellerFeeBasisPoints,
    properties: { ...rawMetadata.properties,
      // Default NFT creators to equal those of the Candy Machine
      creators: (_rawMetadata$properti = (_rawMetadata$properti2 = rawMetadata.properties) === null || _rawMetadata$properti2 === void 0 ? void 0 : _rawMetadata$properti2.creators) !== null && _rawMetadata$properti !== void 0 ? _rawMetadata$properti : Client_helpers.creatorsToJsonMetadataCreators(candyMachine.creators)
    }
  });
  let addAssetsTransactionId;

  if (addToCandyMachine) {
    var _metadata$name;

    const {
      transactionId
    } = await this.addAssets({
      candyMachineAddress: candyMachineAddress,
      authoritySigner: authoritySigner,
      assets: [{
        uri,
        name: (_metadata$name = metadata.name) !== null && _metadata$name !== void 0 ? _metadata$name : common.randomStr()
      }],
      confirmOptions
    });
    addAssetsTransactionId = transactionId;
  }

  return {
    metadata,
    uri,
    addAssetsTransactionId
  };
}
async function uploadAssetsForCandyMachine(params) {
  const {
    candyMachineAddress,
    assets,
    parallel = false,
    addToCandyMachine = false
  } = params;
  const candyMachine = await this.findByAddress(candyMachineAddress);

  if (candyMachine == null) {
    throw new CandyMachineError.CandyMachineToUpdateNotFoundError(candyMachineAddress);
  }

  Client_helpers.assertNotFull(candyMachine, candyMachine.assetsCount);
  Client_helpers.assertCanAdd(candyMachine, candyMachine.assetsCount, assets.length); // TODO(thlorenz): prevent same asset from being uploaded twice, remove once
  // API improves to have clearly separated properties

  const uploadParams = assets.map(file => ({ ...params,
    metadata: {
      image: file,
      name: file.displayName
    },
    // We add them all in one transaction after all assets are uploaded
    addToCandyMachine: false
  }));
  let uploadedAssets = [];
  const errors = [];

  if (parallel) {
    // NOTE: we are uploading in parallel here but if only one upload was to fail
    // all the other ones still happen as we cannot cancel promises
    const promises = uploadParams.map(async assetParam => {
      let uploaded;
      let err;

      try {
        uploaded = await _uploadAssetAndSelectName(this, assetParam);
      } catch (e) {
        errors.push(e);
      }

      return {
        uploaded,
        err
      };
    });
    const results = await Promise.all(promises);

    for (const {
      err,
      uploaded
    } of results) {
      if (err) {
        errors.push(err);
      } else {
        uploadedAssets.push(uploaded);
      }
    }
  } else {
    for (const assetParam of uploadParams) {
      try {
        uploadedAssets.push(await _uploadAssetAndSelectName(this, assetParam));
      } catch (err) {
        errors.push(err);
        continue;
      }
    }
  }

  let addAssetsTransactionId;
  let updatedCandyMachine = candyMachine;

  if (addToCandyMachine && uploadedAssets.length > 0) {
    const configLines = uploadedAssets.map(x => ({
      uri: x.uri,
      name: x.name
    }));
    const {
      transactionId,
      candyMachine
    } = await this.addAssets({ ...params,
      assets: configLines
    });
    addAssetsTransactionId = transactionId;

    if (candyMachine != null) {
      updatedCandyMachine = candyMachine;
    }
  }

  return {
    addAssetsTransactionId,
    uploadedAssets,
    candyMachine: updatedCandyMachine,
    errors
  };
}

async function _uploadAssetAndSelectName(candyMachine, params) {
  var _parseMetadata$name;

  const {
    uri,
    metadata: parseMetadata
  } = await candyMachine.uploadAssetForCandyMachine(params);
  return {
    uri,
    metadata: parseMetadata,
    name: (_parseMetadata$name = parseMetadata.name) !== null && _parseMetadata$name !== void 0 ? _parseMetadata$name : common.randomStr()
  };
}

exports.uploadAssetForCandyMachine = uploadAssetForCandyMachine;
exports.uploadAssetsForCandyMachine = uploadAssetsForCandyMachine;
//# sourceMappingURL=Client.upload.cjs.map
