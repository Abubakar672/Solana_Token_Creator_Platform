'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var updateCandyMachine = require('./updateCandyMachine.cjs');
var updateAuthority$1 = require('./updateAuthority.cjs');
var CandyMachineError = require('../../errors/CandyMachineError.cjs');

async function update(input) {
  const currentCandyMachine = await this.findByAddress(input.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineError.CandyMachineToUpdateNotFoundError(input.candyMachineAddress);
  }

  const updatedData = currentCandyMachine.updatedCandyMachineData(input);
  const operation = updateCandyMachine.updateCandyMachineOperation({ ...input,
    ...updatedData
  });
  const output = await this.metaplex.operations().execute(operation);
  const candyMachine = await this.findByAddress(input.candyMachineAddress);

  if (candyMachine == null) {
    throw new CandyMachineError.UpdatedCandyMachineNotFoundError(input.candyMachineAddress);
  }

  return {
    candyMachine,
    ...output
  };
}
async function updateAuthority(input) {
  const currentCandyMachine = await this.findByAddress(input.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineError.CandyMachineToUpdateNotFoundError(input.candyMachineAddress);
  }

  if (currentCandyMachine.authorityAddress.equals(input.newAuthorityAddress)) {
    throw new CandyMachineError.CandyMachineAlreadyHasThisAuthorityError(input.newAuthorityAddress);
  }

  const operation = updateAuthority$1.updateAuthorityOperation(input);
  const output = await this.metaplex.operations().execute(operation);
  const candyMachine = await this.findByAddress(input.candyMachineAddress);

  if (candyMachine == null) {
    throw new CandyMachineError.UpdatedCandyMachineNotFoundError(input.candyMachineAddress);
  }

  return {
    candyMachine,
    ...output
  };
}

exports.update = update;
exports.updateAuthority = updateAuthority;
//# sourceMappingURL=Client.update.cjs.map
