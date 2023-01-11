import { createUpdateAuthorityInstructionWithSigners } from '../../programs/candyMachine/instructions/createUpdateAuthorityInstructionWithSigners.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'UpdateAuthorityOperation';
const updateAuthorityOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const updateAuthorityOperationHandler = {
  async handle(operation, metaplex) {
    const {
      candyMachineAddress,
      walletAddress,
      authoritySigner,
      confirmOptions,
      newAuthorityAddress
    } = operation.input;
    const {
      signature,
      confirmResponse
    } = await metaplex.rpc().sendAndConfirmTransaction(TransactionBuilder.make().add(createUpdateAuthorityInstructionWithSigners({
      candyMachine: candyMachineAddress,
      wallet: walletAddress,
      authority: authoritySigner,
      newAuthority: newAuthorityAddress
    })), undefined, confirmOptions);
    return {
      transactionId: signature,
      confirmResponse
    };
  }

};

export { updateAuthorityOperation, updateAuthorityOperationHandler };
//# sourceMappingURL=updateAuthority.mjs.map
