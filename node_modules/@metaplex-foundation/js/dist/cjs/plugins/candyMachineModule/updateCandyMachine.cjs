'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createUpdateCandyMachineInstructionWithSigners = require('../../programs/candyMachine/instructions/createUpdateCandyMachineInstructionWithSigners.cjs');
var Operation = require('../../types/Operation.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');

// Operation
// -----------------

const Key = 'UpdateCandyMachineOperation';
const updateCandyMachineOperation = Operation.useOperation(Key);
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
    } = await metaplex.rpc().sendAndConfirmTransaction(TransactionBuilder.TransactionBuilder.make().add(createUpdateCandyMachineInstructionWithSigners.createUpdateCandyMachineInstructionWithSigners({
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

exports.updateCandyMachineOperation = updateCandyMachineOperation;
exports.updateCandyMachineOperationHandler = updateCandyMachineOperationHandler;
//# sourceMappingURL=updateCandyMachine.cjs.map
