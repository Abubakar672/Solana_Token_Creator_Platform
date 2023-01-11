'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createAddConfigLinesInstructionWithSigners = require('../../programs/candyMachine/instructions/createAddConfigLinesInstructionWithSigners.cjs');
var Operation = require('../../types/Operation.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');

// Operation
// -----------------

const Key = 'AddConfigLinesOperation';
const addConfigLinesOperation = Operation.useOperation(Key);
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
    } = await metaplex.rpc().sendAndConfirmTransaction(TransactionBuilder.TransactionBuilder.make().add(createAddConfigLinesInstructionWithSigners.createAddConfigLinesInstructionWithSigners({
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

exports.addConfigLinesOperation = addConfigLinesOperation;
exports.addConfigLinesOperationHandler = addConfigLinesOperationHandler;
//# sourceMappingURL=addConfigLines.cjs.map
