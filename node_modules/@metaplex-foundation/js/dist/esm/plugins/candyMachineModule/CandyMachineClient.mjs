import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import { findByAddress, findAllByWallet, findAllByAuthority, findByAuthorityAndUuid } from './Client.queries.mjs';
import { create, createFromConfig } from './Client.create.mjs';
import { update, updateAuthority } from './Client.update.mjs';
import { uploadAssetForCandyMachine, uploadAssetsForCandyMachine } from './Client.upload.mjs';
import { addAssets } from './Client.add.mjs';

class CandyMachineClient {
  constructor(metaplex) {
    _defineProperty(this, "findByAddress", findByAddress);

    _defineProperty(this, "findAllByWallet", findAllByWallet);

    _defineProperty(this, "findAllByAuthority", findAllByAuthority);

    _defineProperty(this, "findByAuthorityAndUuid", findByAuthorityAndUuid);

    _defineProperty(this, "create", create);

    _defineProperty(this, "createFromConfig", createFromConfig);

    _defineProperty(this, "update", update);

    _defineProperty(this, "updateAuthority", updateAuthority);

    _defineProperty(this, "addAssets", addAssets);

    _defineProperty(this, "uploadAssetForCandyMachine", uploadAssetForCandyMachine);

    _defineProperty(this, "uploadAssetsForCandyMachine", uploadAssetsForCandyMachine);

    this.metaplex = metaplex;
  } // -----------------
  // Queries
  // -----------------


}

export { CandyMachineClient };
//# sourceMappingURL=CandyMachineClient.mjs.map
