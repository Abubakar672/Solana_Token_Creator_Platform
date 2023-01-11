'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findNftsByMintList = require('./findNftsByMintList.cjs');
var TokenProgram = require('../../programs/token/TokenProgram.cjs');
var Operation = require('../../types/Operation.cjs');

const Key = 'FindNftsByOwnerOperation';
const findNftsByOwnerOperation = Operation.useOperation(Key);
const findNftsByOwnerOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const owner = operation.input;
    const mints = await TokenProgram.TokenProgram.tokenAccounts(metaplex).selectMint().whereOwner(owner).whereAmount(1).getDataAsPublicKeys();
    const nfts = await metaplex.operations().execute(findNftsByMintList.findNftsByMintListOperation(mints));
    return nfts.filter(nft => nft !== null);
  }
};

exports.findNftsByOwnerOnChainOperationHandler = findNftsByOwnerOnChainOperationHandler;
exports.findNftsByOwnerOperation = findNftsByOwnerOperation;
//# sourceMappingURL=findNftsByOwner.cjs.map
