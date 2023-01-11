import { updateCandyMachineOperation } from './updateCandyMachine.mjs';
import { updateAuthorityOperation } from './updateAuthority.mjs';
import { CandyMachineToUpdateNotFoundError, UpdatedCandyMachineNotFoundError, CandyMachineAlreadyHasThisAuthorityError } from '../../errors/CandyMachineError.mjs';

async function update(input) {
  const currentCandyMachine = await this.findByAddress(input.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineToUpdateNotFoundError(input.candyMachineAddress);
  }

  const updatedData = currentCandyMachine.updatedCandyMachineData(input);
  const operation = updateCandyMachineOperation({ ...input,
    ...updatedData
  });
  const output = await this.metaplex.operations().execute(operation);
  const candyMachine = await this.findByAddress(input.candyMachineAddress);

  if (candyMachine == null) {
    throw new UpdatedCandyMachineNotFoundError(input.candyMachineAddress);
  }

  return {
    candyMachine,
    ...output
  };
}
async function updateAuthority(input) {
  const currentCandyMachine = await this.findByAddress(input.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineToUpdateNotFoundError(input.candyMachineAddress);
  }

  if (currentCandyMachine.authorityAddress.equals(input.newAuthorityAddress)) {
    throw new CandyMachineAlreadyHasThisAuthorityError(input.newAuthorityAddress);
  }

  const operation = updateAuthorityOperation(input);
  const output = await this.metaplex.operations().execute(operation);
  const candyMachine = await this.findByAddress(input.candyMachineAddress);

  if (candyMachine == null) {
    throw new UpdatedCandyMachineNotFoundError(input.candyMachineAddress);
  }

  return {
    candyMachine,
    ...output
  };
}

export { update, updateAuthority };
//# sourceMappingURL=Client.update.mjs.map
