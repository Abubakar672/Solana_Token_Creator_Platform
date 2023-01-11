'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var NftClient = require('./NftClient.cjs');
var createNft = require('./createNft.cjs');
var findNftByMint = require('./findNftByMint.cjs');
var findNftsByCandyMachine = require('./findNftsByCandyMachine.cjs');
var findNftsByCreator = require('./findNftsByCreator.cjs');
var findNftsByMintList = require('./findNftsByMintList.cjs');
var findNftsByOwner = require('./findNftsByOwner.cjs');
var printNewEdition = require('./printNewEdition.cjs');
var updateNft = require('./updateNft.cjs');
var uploadMetadata = require('./uploadMetadata.cjs');

const nftModule = () => ({
  install(metaplex) {
    const op = metaplex.operations();
    op.register(createNft.createNftOperation, createNft.createNftOperationHandler);
    op.register(findNftByMint.findNftByMintOperation, findNftByMint.findNftByMintOnChainOperationHandler);
    op.register(findNftsByCandyMachine.findNftsByCandyMachineOperation, findNftsByCandyMachine.findNftsByCandyMachineOnChainOperationHandler);
    op.register(findNftsByCreator.findNftsByCreatorOperation, findNftsByCreator.findNftsByCreatorOnChainOperationHandler);
    op.register(findNftsByMintList.findNftsByMintListOperation, findNftsByMintList.findNftsByMintListOnChainOperationHandler);
    op.register(findNftsByOwner.findNftsByOwnerOperation, findNftsByOwner.findNftsByOwnerOnChainOperationHandler);
    op.register(printNewEdition.printNewEditionOperation, printNewEdition.printNewEditionOperationHandler);
    op.register(updateNft.updateNftOperation, updateNft.updateNftOperationHandler);
    op.register(uploadMetadata.uploadMetadataOperation, uploadMetadata.uploadMetadataOperationHandler);

    metaplex.nfts = function () {
      return new NftClient.NftClient(this);
    };
  }

});

exports.nftModule = nftModule;
//# sourceMappingURL=plugin.cjs.map
