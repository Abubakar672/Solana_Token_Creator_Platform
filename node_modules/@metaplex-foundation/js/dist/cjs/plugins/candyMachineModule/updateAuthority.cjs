'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createUpdateAuthorityInstructionWithSigners = require('../../programs/candyMachine/instructions/createUpdateAuthorityInstructionWithSigners.cjs');
var Operation = require('../../types/Operation.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');

// Operation
// -----------------

const Key = 'UpdateAuthorityOperation';
const updateAuthorityOperation = Operation.useOperation(Key);
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
    } = await metaplex.rpc().sendAndConfirmTransaction(TransactionBuilder.TransactionBuilder.make().add(createUpdateAuthorityInstructionWithSigners.createUpdateAuthorityInstructionWithSigners({
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

exports.updateAuthorityOperation = updateAuthorityOperation;
exports.updateAuthorityOperationHandler = updateAuthorityOperationHandler;
//# sourceMappingURL=updateAuthority.cjs.map
