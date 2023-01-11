'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');

const createMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSigners = params => {
  const {
    edition,
    newMetadata,
    newEdition,
    masterEdition,
    newMint,
    editionMarkPda,
    newMintAuthority,
    payer,
    vaultAuthority,
    safetyDepositStore,
    safetyDepositBox,
    vault,
    newMetadataUpdateAuthority,
    metadata,
    tokenVaultProgram = new web3_js.PublicKey('vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn'),
    instructionKey = 'mintNewEditionFromMasterEditionViaVaultProxy'
  } = params;
  return {
    instruction: mplTokenMetadata.createMintNewEditionFromMasterEditionViaVaultProxyInstruction({
      newMetadata,
      newEdition,
      masterEdition,
      newMint: newMint.publicKey,
      editionMarkPda,
      newMintAuthority: newMintAuthority.publicKey,
      payer: payer.publicKey,
      vaultAuthority: vaultAuthority.publicKey,
      safetyDepositStore,
      safetyDepositBox,
      vault,
      newMetadataUpdateAuthority,
      metadata,
      tokenVaultProgram
    }, {
      mintNewEditionFromMasterEditionViaTokenArgs: {
        edition
      }
    }),
    signers: [newMint, newMintAuthority, payer, vaultAuthority],
    key: instructionKey
  };
};

exports.createMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSigners = createMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSigners;
//# sourceMappingURL=createMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSigners.cjs.map
