'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createUpdateMetadataAccountV2InstructionWithSigners = require('../../programs/tokenMetadata/instructions/createUpdateMetadataAccountV2InstructionWithSigners.cjs');
var Operation = require('../../types/Operation.cjs');
var findMetadataPda = require('../../programs/tokenMetadata/pdas/findMetadataPda.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');

const Key = 'UpdateNftOperation';
const updateNftOperation = Operation.useOperation(Key);
const updateNftOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      nft,
      newUpdateAuthority = nft.updateAuthority,
      primarySaleHappened = nft.primarySaleHappened,
      isMutable = nft.isMutable,
      updateAuthority = metaplex.identity(),
      confirmOptions
    } = operation.input;
    const data = resolveData(operation.input);
    const metadata = findMetadataPda.findMetadataPda(nft.mint);
    const {
      signature
    } = await metaplex.rpc().sendAndConfirmTransaction(updateNftBuilder({
      data,
      newUpdateAuthority,
      primarySaleHappened,
      isMutable,
      updateAuthority,
      metadata
    }), undefined, confirmOptions);
    return {
      transactionId: signature
    };
  }
};

const resolveData = input => {
  var _input$name, _input$symbol, _input$uri, _input$sellerFeeBasis, _input$creators, _input$collection, _input$uses;

  const {
    nft
  } = input;
  return {
    name: (_input$name = input.name) !== null && _input$name !== void 0 ? _input$name : nft.name,
    symbol: (_input$symbol = input.symbol) !== null && _input$symbol !== void 0 ? _input$symbol : nft.symbol,
    uri: (_input$uri = input.uri) !== null && _input$uri !== void 0 ? _input$uri : nft.uri,
    sellerFeeBasisPoints: (_input$sellerFeeBasis = input.sellerFeeBasisPoints) !== null && _input$sellerFeeBasis !== void 0 ? _input$sellerFeeBasis : nft.sellerFeeBasisPoints,
    creators: (_input$creators = input.creators) !== null && _input$creators !== void 0 ? _input$creators : nft.creators,
    collection: (_input$collection = input.collection) !== null && _input$collection !== void 0 ? _input$collection : nft.collection,
    uses: (_input$uses = input.uses) !== null && _input$uses !== void 0 ? _input$uses : nft.uses
  };
};

const updateNftBuilder = params => {
  const {
    data,
    isMutable,
    updateAuthority,
    newUpdateAuthority,
    primarySaleHappened,
    metadata,
    instructionKey
  } = params;
  return TransactionBuilder.TransactionBuilder.make().add(createUpdateMetadataAccountV2InstructionWithSigners.createUpdateMetadataAccountV2InstructionWithSigners({
    data,
    newUpdateAuthority,
    primarySaleHappened,
    isMutable,
    metadata,
    updateAuthority,
    instructionKey
  }));
};

exports.updateNftBuilder = updateNftBuilder;
exports.updateNftOperation = updateNftOperation;
exports.updateNftOperationHandler = updateNftOperationHandler;
//# sourceMappingURL=updateNft.cjs.map
