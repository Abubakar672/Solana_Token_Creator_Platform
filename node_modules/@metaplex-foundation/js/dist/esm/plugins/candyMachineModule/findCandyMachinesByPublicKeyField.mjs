import { CandyMachine } from './CandyMachine.mjs';
import { CandyMachineProgram } from '../../programs/candyMachine/CandyMachineProgram.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { UnreachableCaseError } from '../../errors/SdkError.mjs';
import { parseCandyMachineAccount } from '../../programs/candyMachine/accounts/CandyMachineAccount.mjs';

// Operation
// -----------------

const Key = 'FindCandyMachinesByPublicKeyOperation';
const findCandyMachinesByPublicKeyFieldOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const findCandyMachinesByPublicKeyFieldOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      type,
      publicKey
    } = operation.input;
    const accounts = CandyMachineProgram.accounts(metaplex);
    let candyMachineQuery;

    switch (type) {
      case 'authority':
        candyMachineQuery = accounts.candyMachineAccountsForAuthority(publicKey);
        break;

      case 'wallet':
        candyMachineQuery = accounts.candyMachineAccountsForWallet(publicKey);
        break;

      default:
        throw new UnreachableCaseError(type);
    }

    const candyMachineUnparseds = await candyMachineQuery.get();
    return candyMachineUnparseds.map(unparsedAccount => {
      const account = parseCandyMachineAccount(unparsedAccount);
      return CandyMachine.fromAccount(account, unparsedAccount.data);
    });
  }
};

export { findCandyMachinesByPublicKeyFieldOnChainOperationHandler, findCandyMachinesByPublicKeyFieldOperation };
//# sourceMappingURL=findCandyMachinesByPublicKeyField.mjs.map
