import { parseOriginalOrPrintEditionAccount } from '../../programs/tokenMetadata/accounts/EditionAccounts.mjs';
import { Task } from '../../utils/Task.mjs';
import { findMasterEditionV2Pda } from '../../programs/tokenMetadata/pdas/findMasterEditionV2Pda.mjs';

const useEditionTask = (metaplex, nft) => new Task(async () => {
  const pda = findMasterEditionV2Pda(nft.mint);
  const edition = parseOriginalOrPrintEditionAccount(await metaplex.rpc().getAccount(pda));
  return edition.exists ? edition : null;
});

export { useEditionTask };
//# sourceMappingURL=useEditionTask.mjs.map
