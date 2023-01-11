'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var addConfigLines = require('./addConfigLines.cjs');
var Client_helpers = require('./Client.helpers.cjs');
var CandyMachineError = require('../../errors/CandyMachineError.cjs');

async function addAssets(params) {
  const currentCandyMachine = await this.findByAddress(params.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineError.CandyMachineToUpdateNotFoundError(params.candyMachineAddress);
  }

  const index = currentCandyMachine.assetsCount;
  Client_helpers.assertNotFull(currentCandyMachine, index);
  Client_helpers.assertCanAdd(currentCandyMachine, index, params.assets.length);
  Client_helpers.assertAllConfigLineConstraints(params.assets);
  const addConfigLinesInput = {
    candyMachineAddress: params.candyMachineAddress,
    authoritySigner: params.authoritySigner,
    index,
    configLines: params.assets
  };
  const addConfigLinesOutput = await this.metaplex.operations().execute(addConfigLines.addConfigLinesOperation(addConfigLinesInput));
  const candyMachine = await this.findByAddress(params.candyMachineAddress);

  if (currentCandyMachine == null) {
    throw new CandyMachineError.UpdatedCandyMachineNotFoundError(params.candyMachineAddress);
  }

  return {
    candyMachine,
    ...addConfigLinesOutput
  };
}

exports.addAssets = addAssets;
//# sourceMappingURL=Client.add.cjs.map
