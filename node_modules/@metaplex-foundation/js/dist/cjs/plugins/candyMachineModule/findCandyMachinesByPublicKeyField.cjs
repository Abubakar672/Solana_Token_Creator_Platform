'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CandyMachine = require('./CandyMachine.cjs');
var CandyMachineProgram = require('../../programs/candyMachine/CandyMachineProgram.cjs');
var Operation = require('../../types/Operation.cjs');
var SdkError = require('../../errors/SdkError.cjs');
var CandyMachineAccount = require('../../programs/candyMachine/accounts/CandyMachineAccount.cjs');

// Operation
// -----------------

const Key = 'FindCandyMachinesByPublicKeyOperation';
const findCandyMachinesByPublicKeyFieldOperation = Operation.useOperation(Key);
// -----------------
// Handler
// -----------------
const findCandyMachinesByPublicKeyFieldOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      type,
      publicKey
    } = operation.input;
    const accounts = CandyMachineProgram.CandyMachineProgram.accounts(metaplex);
    let candyMachineQuery;

    switch (type) {
      case 'authority':
        candyMachineQuery = accounts.candyMachineAccountsForAuthority(publicKey);
        break;

      case 'wallet':
        candyMachineQuery = accounts.candyMachineAccountsForWallet(publicKey);
        break;

      default:
        throw new SdkError.UnreachableCaseError(type);
    }

    const candyMachineUnparseds = await candyMachineQuery.get();
    return candyMachineUnparseds.map(unparsedAccount => {
      const account = CandyMachineAccount.parseCandyMachineAccount(unparsedAccount);
      return CandyMachine.CandyMachine.fromAccount(account, unparsedAccount.data);
    });
  }
};

exports.findCandyMachinesByPublicKeyFieldOnChainOperationHandler = findCandyMachinesByPublicKeyFieldOnChainOperationHandler;
exports.findCandyMachinesByPublicKeyFieldOperation = findCandyMachinesByPublicKeyFieldOperation;
//# sourceMappingURL=findCandyMachinesByPublicKeyField.cjs.map
