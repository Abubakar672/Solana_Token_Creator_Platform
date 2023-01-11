'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var Account = require('../../../types/Account.cjs');

const parseCandyMachineAccount = Account.getAccountParsingFunction(mplCandyMachine.CandyMachine);

exports.parseCandyMachineAccount = parseCandyMachineAccount;
//# sourceMappingURL=CandyMachineAccount.cjs.map
