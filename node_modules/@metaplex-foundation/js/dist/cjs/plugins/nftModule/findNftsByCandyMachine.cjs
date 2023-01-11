'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var findNftsByCreator = require('./findNftsByCreator.cjs');
var Operation = require('../../types/Operation.cjs');

const Key = 'FindNftsByCandyMachineOperation';
const findNftsByCandyMachineOperation = Operation.useOperation(Key);
const findNftsByCandyMachineOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      candyMachine,
      version = 2
    } = operation.input;
    let firstCreator = candyMachine;

    if (version === 2) {
      // TODO: Refactor when we have a CandyMachine program in the SDK.
      [firstCreator] = web3_js.PublicKey.findProgramAddressSync([Buffer.from('candy_machine'), candyMachine.toBuffer()], new web3_js.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'));
    }

    return metaplex.operations().execute(findNftsByCreator.findNftsByCreatorOperation({
      creator: firstCreator,
      position: 1
    }));
  }
};

exports.findNftsByCandyMachineOnChainOperationHandler = findNftsByCandyMachineOnChainOperationHandler;
exports.findNftsByCandyMachineOperation = findNftsByCandyMachineOperation;
//# sourceMappingURL=findNftsByCandyMachine.cjs.map
