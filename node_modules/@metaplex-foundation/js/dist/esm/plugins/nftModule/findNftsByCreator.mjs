import { findNftsByMintListOperation } from './findNftsByMintList.mjs';
import { TokenMetadataProgram } from '../../programs/tokenMetadata/TokenMetadataProgram.mjs';
import { useOperation } from '../../types/Operation.mjs';

const Key = 'FindNftsByCreatorOperation';
const findNftsByCreatorOperation = useOperation(Key);
const findNftsByCreatorOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      creator,
      position = 1
    } = operation.input;
    const mints = await TokenMetadataProgram.metadataV1Accounts(metaplex).selectMint().whereCreator(position, creator).getDataAsPublicKeys();
    const nfts = await metaplex.operations().execute(findNftsByMintListOperation(mints));
    return nfts.filter(nft => nft !== null);
  }
};

export { findNftsByCreatorOnChainOperationHandler, findNftsByCreatorOperation };
//# sourceMappingURL=findNftsByCreator.mjs.map
