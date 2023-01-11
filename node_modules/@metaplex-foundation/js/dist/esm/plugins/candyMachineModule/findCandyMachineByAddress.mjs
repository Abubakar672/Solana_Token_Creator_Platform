import { CandyMachine } from './CandyMachine.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { parseCandyMachineAccount } from '../../programs/candyMachine/accounts/CandyMachineAccount.mjs';

// Operation
// -----------------

const Key = 'FindCandyMachineByAdddressOperation';
const findCandyMachineByAdddressOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const findCandyMachineByAdddressOperationHandler = {
  handle: async (operation, metaplex) => {
    const candyMachineAddress = operation.input;
    const unparsedAccount = await metaplex.rpc().getAccount(candyMachineAddress);
    const account = parseCandyMachineAccount(unparsedAccount);
    return unparsedAccount.exists && account.exists ? CandyMachine.fromAccount(account, unparsedAccount.data) : null;
  }
};

export { findCandyMachineByAdddressOperation, findCandyMachineByAdddressOperationHandler };
//# sourceMappingURL=findCandyMachineByAddress.mjs.map
