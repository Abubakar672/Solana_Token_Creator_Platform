'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var Client_queries = require('./Client.queries.cjs');
var Client_create = require('./Client.create.cjs');
var Client_update = require('./Client.update.cjs');
var Client_upload = require('./Client.upload.cjs');
var Client_add = require('./Client.add.cjs');

class CandyMachineClient {
  constructor(metaplex) {
    _rollupPluginBabelHelpers.defineProperty(this, "findByAddress", Client_queries.findByAddress);

    _rollupPluginBabelHelpers.defineProperty(this, "findAllByWallet", Client_queries.findAllByWallet);

    _rollupPluginBabelHelpers.defineProperty(this, "findAllByAuthority", Client_queries.findAllByAuthority);

    _rollupPluginBabelHelpers.defineProperty(this, "findByAuthorityAndUuid", Client_queries.findByAuthorityAndUuid);

    _rollupPluginBabelHelpers.defineProperty(this, "create", Client_create.create);

    _rollupPluginBabelHelpers.defineProperty(this, "createFromConfig", Client_create.createFromConfig);

    _rollupPluginBabelHelpers.defineProperty(this, "update", Client_update.update);

    _rollupPluginBabelHelpers.defineProperty(this, "updateAuthority", Client_update.updateAuthority);

    _rollupPluginBabelHelpers.defineProperty(this, "addAssets", Client_add.addAssets);

    _rollupPluginBabelHelpers.defineProperty(this, "uploadAssetForCandyMachine", Client_upload.uploadAssetForCandyMachine);

    _rollupPluginBabelHelpers.defineProperty(this, "uploadAssetsForCandyMachine", Client_upload.uploadAssetsForCandyMachine);

    this.metaplex = metaplex;
  } // -----------------
  // Queries
  // -----------------


}

exports.CandyMachineClient = CandyMachineClient;
//# sourceMappingURL=CandyMachineClient.cjs.map
