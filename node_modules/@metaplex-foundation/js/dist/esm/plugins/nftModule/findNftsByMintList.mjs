import { Nft } from './Nft.mjs';
import { GmaBuilder } from '../../utils/GmaBuilder.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { findMetadataPda } from '../../programs/tokenMetadata/pdas/findMetadataPda.mjs';
import { zipMap } from '../../utils/common.mjs';
import { parseMetadataAccount } from '../../programs/tokenMetadata/accounts/MetadataAccount.mjs';

const Key = 'FindNftsByMintListOperation';
const findNftsByMintListOperation = useOperation(Key);
const findNftsByMintListOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const mints = operation.input;
    const metadataPdas = mints.map(mint => findMetadataPda(mint));
    const metadataInfos = await GmaBuilder.make(metaplex, metadataPdas).get();
    return zipMap(metadataPdas, metadataInfos, (metadataPda, metadataInfo) => {
      if (!metadataInfo || !metadataInfo.exists) return null;

      try {
        const metadata = parseMetadataAccount(metadataInfo);
        return new Nft(metadata, metaplex);
      } catch (error) {
        return null;
      }
    });
  }
};

export { findNftsByMintListOnChainOperationHandler, findNftsByMintListOperation };
//# sourceMappingURL=findNftsByMintList.mjs.map
