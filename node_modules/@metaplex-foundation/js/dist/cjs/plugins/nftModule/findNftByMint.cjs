'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Nft = require('./Nft.cjs');
var MetadataAccount = require('../../programs/tokenMetadata/accounts/MetadataAccount.cjs');
var NftError = require('../../errors/NftError.cjs');
var Operation = require('../../types/Operation.cjs');
var findMetadataPda = require('../../programs/tokenMetadata/pdas/findMetadataPda.cjs');
var findMasterEditionV2Pda = require('../../programs/tokenMetadata/pdas/findMasterEditionV2Pda.cjs');
var EditionAccounts = require('../../programs/tokenMetadata/accounts/EditionAccounts.cjs');

const Key = 'FindNftByMintOperation';
const findNftByMintOperation = Operation.useOperation(Key);
const findNftByMintOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const mint = operation.input;
    const [metadata, edition] = await metaplex.rpc().getMultipleAccounts([findMetadataPda.findMetadataPda(mint), findMasterEditionV2Pda.findMasterEditionV2Pda(mint)]);
    const metadataAccount = MetadataAccount.parseMetadataAccount(metadata);
    const editionAccount = EditionAccounts.parseOriginalOrPrintEditionAccount(edition);

    if (!metadataAccount.exists) {
      throw new NftError.NftNotFoundError(mint);
    }

    const nft = new Nft.Nft(metadataAccount, metaplex);

    try {
      await nft.metadataTask.run();
    } catch (e) {// Fail silently...
    }

    nft.editionTask.loadWith(editionAccount.exists ? editionAccount : null);
    return nft;
  }
};

exports.findNftByMintOnChainOperationHandler = findNftByMintOnChainOperationHandler;
exports.findNftByMintOperation = findNftByMintOperation;
//# sourceMappingURL=findNftByMint.cjs.map
