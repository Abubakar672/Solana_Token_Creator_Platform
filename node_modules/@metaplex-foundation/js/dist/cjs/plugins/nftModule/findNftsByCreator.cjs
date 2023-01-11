'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findNftsByMintList = require('./findNftsByMintList.cjs');
var TokenMetadataProgram = require('../../programs/tokenMetadata/TokenMetadataProgram.cjs');
var Operation = require('../../types/Operation.cjs');

const Key = 'FindNftsByCreatorOperation';
const findNftsByCreatorOperation = Operation.useOperation(Key);
const findNftsByCreatorOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      creator,
      position = 1
    } = operation.input;
    const mints = await TokenMetadataProgram.TokenMetadataProgram.metadataV1Accounts(metaplex).selectMint().whereCreator(position, creator).getDataAsPublicKeys();
    const nfts = await metaplex.operations().execute(findNftsByMintList.findNftsByMintListOperation(mints));
    return nfts.filter(nft => nft !== null);
  }
};

exports.findNftsByCreatorOnChainOperationHandler = findNftsByCreatorOnChainOperationHandler;
exports.findNftsByCreatorOperation = findNftsByCreatorOperation;
//# sourceMappingURL=findNftsByCreator.cjs.map
