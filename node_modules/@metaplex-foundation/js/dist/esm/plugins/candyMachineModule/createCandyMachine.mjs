import { Keypair } from '@solana/web3.js';
import { PROGRAM_ID } from '@metaplex-foundation/mpl-candy-machine';
import { getSpaceForCandy } from '../../programs/candyMachine/accounts/candyMachineInternals.mjs';
import { createInitializeCandyMachineInstructionWithSigners } from '../../programs/candyMachine/instructions/createInitializeCandyMachineInstructionWithSigners.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';
import { createAccountBuilder } from '../../programs/system/transactionBuilders/createAccountBuilder.mjs';

const Key = 'CreateCandyMachineOperation';
const createCandyMachineOperation = useOperation(Key);
const createCandyMachineOperationHandler = {
  async handle(operation, metaplex) {
    const {
      candyMachineSigner = Keypair.generate(),
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
  const space = getSpaceForCandy(candyMachineData);
  const lamports = await metaplex.connection.getMinimumBalanceForRentExemption(space);
  return TransactionBuilder.make().add(createAccountBuilder({
    payer: payerSigner,
    newAccount: candyMachineSigner,
    space,
    lamports,
    program: PROGRAM_ID,
    instructionKey: createAccountInstructionKey
  })).add(createInitializeCandyMachineInstructionWithSigners({
    data: candyMachineData,
    candyMachine: candyMachineSigner,
    payer: payerSigner,
    wallet: walletAddress,
    authority: authorityAddress,
    instructionKey: initializeCandyMachineInstructionKey
  }));
};

export { createCandyMachineBuilder, createCandyMachineOperation, createCandyMachineOperationHandler };
//# sourceMappingURL=createCandyMachine.mjs.map
