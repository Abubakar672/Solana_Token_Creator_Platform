import { CandyMachineClient } from './CandyMachineClient.mjs';
import { addConfigLinesOperation, addConfigLinesOperationHandler } from './addConfigLines.mjs';
import { createCandyMachineOperation, createCandyMachineOperationHandler } from './createCandyMachine.mjs';
import { findCandyMachineByAdddressOperation, findCandyMachineByAdddressOperationHandler } from './findCandyMachineByAddress.mjs';
import { findCandyMachinesByPublicKeyFieldOperation, findCandyMachinesByPublicKeyFieldOnChainOperationHandler } from './findCandyMachinesByPublicKeyField.mjs';
import { updateAuthorityOperation, updateAuthorityOperationHandler } from './updateAuthority.mjs';
import { updateCandyMachineOperation, updateCandyMachineOperationHandler } from './updateCandyMachine.mjs';

const candyMachineModule = () => ({
  install(metaplex) {
    const op = metaplex.operations();
    op.register(createCandyMachineOperation, createCandyMachineOperationHandler);
    op.register(findCandyMachineByAdddressOperation, findCandyMachineByAdddressOperationHandler);
    op.register(findCandyMachinesByPublicKeyFieldOperation, findCandyMachinesByPublicKeyFieldOnChainOperationHandler);
    op.register(updateCandyMachineOperation, updateCandyMachineOperationHandler);
    op.register(updateAuthorityOperation, updateAuthorityOperationHandler);
    op.register(addConfigLinesOperation, addConfigLinesOperationHandler);

    metaplex.candyMachines = function () {
      return new CandyMachineClient(this);
    };
  }

});

export { candyMachineModule };
//# sourceMappingURL=plugin.mjs.map
