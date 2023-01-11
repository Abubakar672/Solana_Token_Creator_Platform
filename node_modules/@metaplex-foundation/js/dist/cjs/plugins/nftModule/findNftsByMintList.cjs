'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Nft = require('./Nft.cjs');
var GmaBuilder = require('../../utils/GmaBuilder.cjs');
var Operation = require('../../types/Operation.cjs');
var findMetadataPda = require('../../programs/tokenMetadata/pdas/findMetadataPda.cjs');
var common = require('../../utils/common.cjs');
var MetadataAccount = require('../../programs/tokenMetadata/accounts/MetadataAccount.cjs');

const Key = 'FindNftsByMintListOperation';
const findNftsByMintListOperation = Operation.useOperation(Key);
const findNftsByMintListOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const mints = operation.input;
    const metadataPdas = mints.map(mint => findMetadataPda.findMetadataPda(mint));
    const metadataInfos = await GmaBuilder.GmaBuilder.make(metaplex, metadataPdas).get();
    return common.zipMap(metadataPdas, metadataInfos, (metadataPda, metadataInfo) => {
      if (!metadataInfo || !metadataInfo.exists) return null;

      try {
        const metadata = MetadataAccount.parseMetadataAccount(metadataInfo);
        return new Nft.Nft(metadata, metaplex);
      } catch (error) {
        return null;
      }
    });
  }
};

exports.findNftsByMintListOnChainOperationHandler = findNftsByMintListOnChainOperationHandler;
exports.findNftsByMintListOperation = findNftsByMintListOperation;
//# sourceMappingURL=findNftsByMintList.cjs.map
