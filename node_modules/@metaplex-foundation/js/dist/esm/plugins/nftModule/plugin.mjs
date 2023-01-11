import { NftClient } from './NftClient.mjs';
import { createNftOperation, createNftOperationHandler } from './createNft.mjs';
import { findNftByMintOperation, findNftByMintOnChainOperationHandler } from './findNftByMint.mjs';
import { findNftsByCandyMachineOperation, findNftsByCandyMachineOnChainOperationHandler } from './findNftsByCandyMachine.mjs';
import { findNftsByCreatorOperation, findNftsByCreatorOnChainOperationHandler } from './findNftsByCreator.mjs';
import { findNftsByMintListOperation, findNftsByMintListOnChainOperationHandler } from './findNftsByMintList.mjs';
import { findNftsByOwnerOperation, findNftsByOwnerOnChainOperationHandler } from './findNftsByOwner.mjs';
import { printNewEditionOperation, printNewEditionOperationHandler } from './printNewEdition.mjs';
import { updateNftOperation, updateNftOperationHandler } from './updateNft.mjs';
import { uploadMetadataOperation, uploadMetadataOperationHandler } from './uploadMetadata.mjs';

const nftModule = () => ({
  install(metaplex) {
    const op = metaplex.operations();
    op.register(createNftOperation, createNftOperationHandler);
    op.register(findNftByMintOperation, findNftByMintOnChainOperationHandler);
    op.register(findNftsByCandyMachineOperation, findNftsByCandyMachineOnChainOperationHandler);
    op.register(findNftsByCreatorOperation, findNftsByCreatorOnChainOperationHandler);
    op.register(findNftsByMintListOperation, findNftsByMintListOnChainOperationHandler);
    op.register(findNftsByOwnerOperation, findNftsByOwnerOnChainOperationHandler);
    op.register(printNewEditionOperation, printNewEditionOperationHandler);
    op.register(updateNftOperation, updateNftOperationHandler);
    op.register(uploadMetadataOperation, uploadMetadataOperationHandler);

    metaplex.nfts = function () {
      return new NftClient(this);
    };
  }

});

export { nftModule };
//# sourceMappingURL=plugin.mjs.map
