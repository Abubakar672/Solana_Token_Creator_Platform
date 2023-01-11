'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EditionAccounts = require('../../programs/tokenMetadata/accounts/EditionAccounts.cjs');
var Task = require('../../utils/Task.cjs');
var findMasterEditionV2Pda = require('../../programs/tokenMetadata/pdas/findMasterEditionV2Pda.cjs');

const useEditionTask = (metaplex, nft) => new Task.Task(async () => {
  const pda = findMasterEditionV2Pda.findMasterEditionV2Pda(nft.mint);
  const edition = EditionAccounts.parseOriginalOrPrintEditionAccount(await metaplex.rpc().getAccount(pda));
  return edition.exists ? edition : null;
});

exports.useEditionTask = useEditionTask;
//# sourceMappingURL=useEditionTask.cjs.map
