'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var CandyMachineGpaBuilder = require('./gpaBuilders/CandyMachineGpaBuilder.cjs');

const CandyMachineProgram = {
  publicKey: mplCandyMachine.PROGRAM_ID,

  accounts(metaplex) {
    return new CandyMachineGpaBuilder.CandyMachineGpaBuilder(metaplex, this.publicKey);
  }

};

exports.CandyMachineProgram = CandyMachineProgram;
//# sourceMappingURL=CandyMachineProgram.cjs.map
