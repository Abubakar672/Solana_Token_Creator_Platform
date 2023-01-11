import { findNftsByMintListOperation } from './findNftsByMintList.mjs';
import { TokenProgram } from '../../programs/token/TokenProgram.mjs';
import { useOperation } from '../../types/Operation.mjs';

const Key = 'FindNftsByOwnerOperation';
const findNftsByOwnerOperation = useOperation(Key);
const findNftsByOwnerOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const owner = operation.input;
    const mints = await TokenProgram.tokenAccounts(metaplex).selectMint().whereOwner(owner).whereAmount(1).getDataAsPublicKeys();
    const nfts = await metaplex.operations().execute(findNftsByMintListOperation(mints));
    return nfts.filter(nft => nft !== null);
  }
};

export { findNftsByOwnerOnChainOperationHandler, findNftsByOwnerOperation };
//# sourceMappingURL=findNftsByOwner.mjs.map
