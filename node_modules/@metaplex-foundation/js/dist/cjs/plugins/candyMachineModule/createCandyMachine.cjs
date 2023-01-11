'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var candyMachineInternals = require('../../programs/candyMachine/accounts/candyMachineInternals.cjs');
var createInitializeCandyMachineInstructionWithSigners = require('../../programs/candyMachine/instructions/createInitializeCandyMachineInstructionWithSigners.cjs');
var Operation = require('../../types/Operation.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');
var createAccountBuilder = require('../../programs/system/transactionBuilders/createAccountBuilder.cjs');

const Key = 'CreateCandyMachineOperation';
const createCandyMachineOperation = Operation.useOperation(Key);
const createCandyMachineOperationHandler = {
  async handle(operation, metaplex) {
    const {
      candyMachineSigner = web3_js.Keypair.generate(),
      payerSigner = metaplex.identity(),
      walletAddress = payerSigner.publicKey,
      authorityAddress = payerSigner.publicKey,
      confirmOptions,
      ...candyMachineData
    } = operation.input;
    const {
      signature,
      confirmResponse
    } = await metaplex.rpc().sendAndConfirmTransaction(await createCandyMachineBuilder({
      metaplex,
      payerSigner,
      candyMachineSigner,
      walletAddress,
      authorityAddress,
      confirmOptions,
      ...candyMachineData
    }), undefined, confirmOptions);
    return {
      // Accounts.
      payerSigner,
      candyMachineSigner,
      walletAddress,
      authorityAddress,
      // Transaction Result.
      transactionId: signature,
      confirmResponse
    };
  }

};
const createCandyMachineBuilder = async params => {
  const {
    metaplex,
    candyMachineSigner,
    payerSigner,
    walletAddress,
    authorityAddress,
    createAccountInstructionKey,
    initializeCandyMachineInstructionKey,
    ...candyMachineData
  } = params;
  const space = candyMachineInternals.getSpaceForCandy(candyMachineData);
  const lamports = await metaplex.connection.getMinimumBalanceForRentExemption(space);
  return TransactionBuilder.TransactionBuilder.make().add(createAccountBuilder.createAccountBuilder({
    payer: payerSigner,
    newAccount: candyMachineSigner,
    space,
    lamports,
    program: mplCandyMachine.PROGRAM_ID,
    instructionKey: createAccountInstructionKey
  })).add(createInitializeCandyMachineInstructionWithSigners.createInitializeCandyMachineInstructionWithSigners({
    data: candyMachineData,
    candyMachine: candyMachineSigner,
    payer: payerSigner,
    wallet: walletAddress,
    authority: authorityAddress,
    instructionKey: initializeCandyMachineInstructionKey
  }));
};

exports.createCandyMachineBuilder = createCandyMachineBuilder;
exports.createCandyMachineOperation = createCandyMachineOperation;
exports.createCandyMachineOperationHandler = createCandyMachineOperationHandler;
//# sourceMappingURL=createCandyMachine.cjs.map
