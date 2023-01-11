import { assertConfigLineConstraints } from '../../programs/candyMachine/accounts/candyMachineInternals.mjs';
import { CandyMachineIsFullError, CandyMachineCannotAddAmountError, CandyMachineAddConfigConstraintsViolatedError } from '../../errors/CandyMachineError.mjs';

function creatorsToJsonMetadataCreators(creators) {
  return creators.map(creator => ({
    address: creator.address.toBase58(),
    share: creator.share,
    verified: creator.verified
  }));
}
function assertNotFull(candyMachine, index) {
  if (candyMachine.isFull) {
    throw new CandyMachineIsFullError(index, candyMachine.maxSupply);
  }
}
function assertCanAdd(candyMachine, index, amount) {
  if (index + amount > candyMachine.maxSupply) {
    throw new CandyMachineCannotAddAmountError(index, amount, candyMachine.maxSupply);
  }
}
function assertAllConfigLineConstraints(configLines) {
  for (let i = 0; i < configLines.length; i++) {
    try {
      assertConfigLineConstraints(configLines[i]);
    } catch (err) {
      throw new CandyMachineAddConfigConstraintsViolatedError(i, configLines[i], err);
    }
  }
}

export { assertAllConfigLineConstraints, assertCanAdd, assertNotFull, creatorsToJsonMetadataCreators };
//# sourceMappingURL=Client.helpers.mjs.map
