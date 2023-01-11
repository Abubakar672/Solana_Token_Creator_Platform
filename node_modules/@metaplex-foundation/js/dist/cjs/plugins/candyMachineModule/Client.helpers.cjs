'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var candyMachineInternals = require('../../programs/candyMachine/accounts/candyMachineInternals.cjs');
var CandyMachineError = require('../../errors/CandyMachineError.cjs');

function creatorsToJsonMetadataCreators(creators) {
  return creators.map(creator => ({
    address: creator.address.toBase58(),
    share: creator.share,
    verified: creator.verified
  }));
}
function assertNotFull(candyMachine, index) {
  if (candyMachine.isFull) {
    throw new CandyMachineError.CandyMachineIsFullError(index, candyMachine.maxSupply);
  }
}
function assertCanAdd(candyMachine, index, amount) {
  if (index + amount > candyMachine.maxSupply) {
    throw new CandyMachineError.CandyMachineCannotAddAmountError(index, amount, candyMachine.maxSupply);
  }
}
function assertAllConfigLineConstraints(configLines) {
  for (let i = 0; i < configLines.length; i++) {
    try {
      candyMachineInternals.assertConfigLineConstraints(configLines[i]);
    } catch (err) {
      throw new CandyMachineError.CandyMachineAddConfigConstraintsViolatedError(i, configLines[i], err);
    }
  }
}

exports.assertAllConfigLineConstraints = assertAllConfigLineConstraints;
exports.assertCanAdd = assertCanAdd;
exports.assertNotFull = assertNotFull;
exports.creatorsToJsonMetadataCreators = creatorsToJsonMetadataCreators;
//# sourceMappingURL=Client.helpers.cjs.map
