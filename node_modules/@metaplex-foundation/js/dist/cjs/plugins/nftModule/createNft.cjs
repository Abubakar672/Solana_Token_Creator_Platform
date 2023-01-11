'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var splToken = require('@solana/spl-token');
var findMetadataPda = require('../../programs/tokenMetadata/pdas/findMetadataPda.cjs');
var findMasterEditionV2Pda = require('../../programs/tokenMetadata/pdas/findMasterEditionV2Pda.cjs');
var createMintAndMintToAssociatedTokenBuilder = require('../../programs/token/transactionBuilders/createMintAndMintToAssociatedTokenBuilder.cjs');
var createCreateMetadataAccountV2InstructionWithSigners = require('../../programs/tokenMetadata/instructions/createCreateMetadataAccountV2InstructionWithSigners.cjs');
var createCreateMasterEditionV3InstructionWithSigners = require('../../programs/tokenMetadata/instructions/createCreateMasterEditionV3InstructionWithSigners.cjs');
var Operation = require('../../types/Operation.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');

const Key = 'CreateNftOperation';
const createNftOperation = Operation.useOperation(Key);
const createNftOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      uri,
      isMutable,
      maxSupply,
      allowHolderOffCurve = false,
      mint = web3_js.Keypair.generate(),
      payer = metaplex.identity(),
      mintAuthority = metaplex.identity(),
      updateAuthority = mintAuthority,
      owner = mintAuthority.publicKey,
      freezeAuthority,
      tokenProgram,
      associatedTokenProgram,
      confirmOptions
    } = operation.input;
    let metadata;

    try {
      metadata = await metaplex.storage().downloadJson(uri);
    } catch (e) {
      metadata = {};
    }

    const data = resolveData(operation.input, metadata, updateAuthority.publicKey);
    const metadataPda = findMetadataPda.findMetadataPda(mint.publicKey);
    const masterEditionPda = findMasterEditionV2Pda.findMasterEditionV2Pda(mint.publicKey);
    const lamports = await splToken.getMinimumBalanceForRentExemptMint(metaplex.connection);
    const associatedToken = await splToken.getAssociatedTokenAddress(mint.publicKey, owner, allowHolderOffCurve, tokenProgram, associatedTokenProgram);
    const {
      signature
    } = await metaplex.rpc().sendAndConfirmTransaction(createNftBuilder({
      lamports,
      data,
      isMutable,
      maxSupply,
      mint,
      payer,
      mintAuthority,
      updateAuthority,
      owner,
      associatedToken,
      freezeAuthority,
      metadata: metadataPda,
      masterEdition: masterEditionPda,
      tokenProgram,
      associatedTokenProgram
    }), undefined, confirmOptions);
    return {
      mint,
      metadata: metadataPda,
      masterEdition: masterEditionPda,
      associatedToken,
      transactionId: signature
    };
  }
};

const resolveData = (input, metadata, updateAuthority) => {
  var _metadata$properties, _metadata$properties$, _ref, _input$creators, _ref2, _input$name, _ref3, _input$symbol, _ref4, _input$sellerFeeBasis, _input$collection, _input$uses;

  const metadataCreators = (_metadata$properties = metadata.properties) === null || _metadata$properties === void 0 ? void 0 : (_metadata$properties$ = _metadata$properties.creators) === null || _metadata$properties$ === void 0 ? void 0 : _metadata$properties$.filter(creator => creator.address).map(creator => {
    var _creator$share;

    return {
      address: new web3_js.PublicKey(creator.address),
      share: (_creator$share = creator.share) !== null && _creator$share !== void 0 ? _creator$share : 0,
      verified: false
    };
  });
  let creators = (_ref = (_input$creators = input.creators) !== null && _input$creators !== void 0 ? _input$creators : metadataCreators) !== null && _ref !== void 0 ? _ref : null;

  if (creators === null) {
    creators = [{
      address: updateAuthority,
      share: 100,
      verified: true
    }];
  } else {
    creators = creators.map(creator => {
      if (creator.address.toBase58() === updateAuthority.toBase58()) {
        return { ...creator,
          verified: true
        };
      } else {
        return creator;
      }
    });
  }

  return {
    name: (_ref2 = (_input$name = input.name) !== null && _input$name !== void 0 ? _input$name : metadata.name) !== null && _ref2 !== void 0 ? _ref2 : '',
    symbol: (_ref3 = (_input$symbol = input.symbol) !== null && _input$symbol !== void 0 ? _input$symbol : metadata.symbol) !== null && _ref3 !== void 0 ? _ref3 : '',
    uri: input.uri,
    sellerFeeBasisPoints: (_ref4 = (_input$sellerFeeBasis = input.sellerFeeBasisPoints) !== null && _input$sellerFeeBasis !== void 0 ? _input$sellerFeeBasis : metadata.seller_fee_basis_points) !== null && _ref4 !== void 0 ? _ref4 : 500,
    creators,
    collection: (_input$collection = input.collection) !== null && _input$collection !== void 0 ? _input$collection : null,
    uses: (_input$uses = input.uses) !== null && _input$uses !== void 0 ? _input$uses : null
  };
};

const createNftBuilder = params => {
  const {
    lamports,
    data,
    isMutable,
    maxSupply,
    mint,
    payer,
    mintAuthority,
    updateAuthority = mintAuthority,
    owner,
    associatedToken,
    freezeAuthority,
    metadata,
    masterEdition,
    tokenProgram,
    associatedTokenProgram,
    createAccountInstructionKey,
    initializeMintInstructionKey,
    createAssociatedTokenInstructionKey,
    mintToInstructionKey,
    createMetadataInstructionKey,
    createMasterEditionInstructionKey
  } = params;
  return TransactionBuilder.TransactionBuilder.make().setFeePayer(payer) // Create the mint account and send one token to the holder.
  .add(createMintAndMintToAssociatedTokenBuilder.createMintAndMintToAssociatedTokenBuilder({
    lamports,
    decimals: 0,
    amount: 1,
    createAssociatedToken: true,
    mint,
    payer,
    mintAuthority,
    owner,
    associatedToken,
    freezeAuthority,
    tokenProgram,
    associatedTokenProgram,
    createAccountInstructionKey,
    initializeMintInstructionKey,
    createAssociatedTokenInstructionKey,
    mintToInstructionKey
  })) // Create metadata account.
  .add(createCreateMetadataAccountV2InstructionWithSigners.createCreateMetadataAccountV2InstructionWithSigners({
    data,
    isMutable,
    mintAuthority,
    payer,
    mint: mint.publicKey,
    metadata,
    updateAuthority: updateAuthority.publicKey,
    instructionKey: createMetadataInstructionKey
  })) // Create master edition account (prevents further minting).
  .add(createCreateMasterEditionV3InstructionWithSigners.createCreateMasterEditionV3InstructionWithSigners({
    maxSupply,
    payer,
    mintAuthority,
    updateAuthority,
    mint: mint.publicKey,
    metadata,
    masterEdition,
    instructionKey: createMasterEditionInstructionKey
  }));
};

exports.createNftBuilder = createNftBuilder;
exports.createNftOperation = createNftOperation;
exports.createNftOperationHandler = createNftOperationHandler;
//# sourceMappingURL=createNft.cjs.map
