import { addConfigLinesOperation } from './addConfigLines.mjs';
import { assertNotFull, assertCanAdd, assertAllConfigLineConstraints } from './Client.helpers.mjs';
import { CandyMachineToUpdateNotFoundError, UpdatedCandyMachineNotFoundError } from '../../errors/CandyMachineError.mjs';

async function addAssets(params) {
  const currentCandyMachine = await this.findByAddress(params.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineToUpdateNotFoundError(params.candyMachineAddress);
  }

  const index = currentCandyMachine.assetsCount;
  assertNotFull(currentCandyMachine, index);
  assertCanAdd(currentCandyMachine, index, params.assets.length);
  assertAllConfigLineConstraints(params.assets);
  const addConfigLinesInput = {
    candyMachineAddress: params.candyMachineAddress,
    authoritySigner: params.authoritySigner,
    index,
    configLines: params.assets
  };
  const addConfigLinesOutput = await this.metaplex.operations().execute(addConfigLinesOperation(addConfigLinesInput));
  const candyMachine = await this.findByAddress(params.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new UpdatedCandyMachineNotFoundError(params.candyMachineAddress);
  }

  return {
    candyMachine,
    ...addConfigLinesOutput
  };
}

export { addAssets };
//# sourceMappingURL=Client.add.mjs.map
