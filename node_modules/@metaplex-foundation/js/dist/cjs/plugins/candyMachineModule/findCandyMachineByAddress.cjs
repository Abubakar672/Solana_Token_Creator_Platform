'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CandyMachine = require('./CandyMachine.cjs');
var Operation = require('../../types/Operation.cjs');
var CandyMachineAccount = require('../../programs/candyMachine/accounts/CandyMachineAccount.cjs');

// Operation
// -----------------

const Key = 'FindCandyMachineByAdddressOperation';
const findCandyMachineByAdddressOperation = Operation.useOperation(Key);
// -----------------
// Handler
// -----------------
const findCandyMachineByAdddressOperationHandler = {
  handle: async (operation, metaplex) => {
    const candyMachineAddress = operation.input;
    const unparsedAccount = await metaplex.rpc().getAccount(candyMachineAddress);
    const account = CandyMachineAccount.parseCandyMachineAccount(unparsedAccount);
    return unparsedAccount.exists && account.exists ? CandyMachine.CandyMachine.fromAccount(account, unparsedAccount.data) : null;
  }
};

exports.findCandyMachineByAdddressOperation = findCandyMachineByAdddressOperation;
exports.findCandyMachineByAdddressOperationHandler = findCandyMachineByAdddressOperationHandler;
//# sourceMappingURL=findCandyMachineByAddress.cjs.map
