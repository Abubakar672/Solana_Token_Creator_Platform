import { createUpdateCandyMachineInstructionWithSigners } from '../../programs/candyMachine/instructions/createUpdateCandyMachineInstructionWithSigners.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'UpdateCandyMachineOperation';
const updateCandyMachineOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const updateCandyMachineOperationHandler = {
  async handle(operation, metaplex) {
    const {
      candyMachineAddress,
      walletAddress,
      authoritySigner,
      confirmOptions,
      ...candyMachineData
    } = operation.input;
    const {
      signature,
      confirmResponse
    } = await metaplex.rpc().sendAndConfirmTransaction(TransactionBuilder.make().add(createUpdateCandyMachineInstructionWithSigners({
      candyMachine: candyMachineAddress,
      wallet: walletAddress,
      authority: authoritySigner,
      data: candyMachineData
    })), undefined, confirmOptions);
    return {
      transactionId: signature,
      confirmResponse
    };
  }

};

export { updateCandyMachineOperation, updateCandyMachineOperationHandler };
//# sourceMappingURL=updateCandyMachine.mjs.map
