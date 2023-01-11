import { createAddConfigLinesInstructionWithSigners } from '../../programs/candyMachine/instructions/createAddConfigLinesInstructionWithSigners.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'AddConfigLinesOperation';
const addConfigLinesOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const addConfigLinesOperationHandler = {
  async handle(operation, metaplex) {
    const {
      candyMachineAddress,
      authoritySigner,
      index,
      configLines,
      confirmOptions
    } = operation.input;
    const {
      signature,
      confirmResponse
    } = await metaplex.rpc().sendAndConfirmTransaction(TransactionBuilder.make().add(createAddConfigLinesInstructionWithSigners({
      candyMachine: candyMachineAddress,
      authority: authoritySigner,
      index,
      configLines
    })), undefined, confirmOptions);
    return {
      transactionId: signature,
      confirmResponse
    };
  }

};

export { addConfigLinesOperation, addConfigLinesOperationHandler };
//# sourceMappingURL=addConfigLines.mjs.map
