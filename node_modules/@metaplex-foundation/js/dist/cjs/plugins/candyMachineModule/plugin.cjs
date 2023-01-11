'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CandyMachineClient = require('./CandyMachineClient.cjs');
var addConfigLines = require('./addConfigLines.cjs');
var createCandyMachine = require('./createCandyMachine.cjs');
var findCandyMachineByAddress = require('./findCandyMachineByAddress.cjs');
var findCandyMachinesByPublicKeyField = require('./findCandyMachinesByPublicKeyField.cjs');
var updateAuthority = require('./updateAuthority.cjs');
var updateCandyMachine = require('./updateCandyMachine.cjs');

const candyMachineModule = () => ({
  install(metaplex) {
    const op = metaplex.operations();
    op.register(createCandyMachine.createCandyMachineOperation, createCandyMachine.createCandyMachineOperationHandler);
    op.register(findCandyMachineByAddress.findCandyMachineByAdddressOperation, findCandyMachineByAddress.findCandyMachineByAdddressOperationHandler);
    op.register(findCandyMachinesByPublicKeyField.findCandyMachinesByPublicKeyFieldOperation, findCandyMachinesByPublicKeyField.findCandyMachinesByPublicKeyFieldOnChainOperationHandler);
    op.register(updateCandyMachine.updateCandyMachineOperation, updateCandyMachine.updateCandyMachineOperationHandler);
    op.register(updateAuthority.updateAuthorityOperation, updateAuthority.updateAuthorityOperationHandler);
    op.register(addConfigLines.addConfigLinesOperation, addConfigLines.addConfigLinesOperationHandler);

    metaplex.candyMachines = function () {
      return new CandyMachineClient.CandyMachineClient(this);
    };
  }

});

exports.candyMachineModule = candyMachineModule;
//# sourceMappingURL=plugin.cjs.map
