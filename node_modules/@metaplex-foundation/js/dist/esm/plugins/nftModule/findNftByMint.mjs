import { Nft } from './Nft.mjs';
import { parseMetadataAccount } from '../../programs/tokenMetadata/accounts/MetadataAccount.mjs';
import { NftNotFoundError } from '../../errors/NftError.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { findMetadataPda } from '../../programs/tokenMetadata/pdas/findMetadataPda.mjs';
import { findMasterEditionV2Pda } from '../../programs/tokenMetadata/pdas/findMasterEditionV2Pda.mjs';
import { parseOriginalOrPrintEditionAccount } from '../../programs/tokenMetadata/accounts/EditionAccounts.mjs';

const Key = 'FindNftByMintOperation';
const findNftByMintOperation = useOperation(Key);
const findNftByMintOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const mint = operation.input;
    const [metadata, edition] = await metaplex.rpc().getMultipleAccounts([findMetadataPda(mint), findMasterEditionV2Pda(mint)]);
    const metadataAccount = parseMetadataAccount(metadata);
    const editionAccount = parseOriginalOrPrintEditionAccount(edition);

    if (!metadataAccount.exists) {
      throw new NftNotFoundError(mint);
    }

    const nft = new Nft(metadataAccount, metaplex);

    try {
      await nft.metadataTask.run();
    } catch (e) {// Fail silently...
    }

    nft.editionTask.loadWith(editionAccount.exists ? editionAccount : null);
    return nft;
  }
};

export { findNftByMintOnChainOperationHandler, findNftByMintOperation };
//# sourceMappingURL=findNftByMint.mjs.map
