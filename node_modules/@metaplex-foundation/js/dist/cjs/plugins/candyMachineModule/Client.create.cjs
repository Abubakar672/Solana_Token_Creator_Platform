'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var createCandyMachine = require('./createCandyMachine.cjs');
var CandyMachineError = require('../../errors/CandyMachineError.cjs');
var fromConfig = require('./config/fromConfig.cjs');
var PublicKeyString = require('../../types/PublicKeyString.cjs');

async function create(input) {
  const operation = createCandyMachine.createCandyMachineOperation(input);
  const output = await this.metaplex.operations().execute(operation);
  const candyMachine = await this.findByAddress(output.candyMachineSigner.publicKey);

  if (candyMachine === null) {
    throw new CandyMachineError.CreatedCandyMachineNotFoundError(output.candyMachineSigner.publicKey);
  }

  return {
    candyMachine,
    ...output
  };
}
async function createFromConfig(config, opts) {
  const {
    candyMachineSigner = web3_js.Keypair.generate()
  } = opts;
  const candyMachineData = fromConfig.candyMachineDataFromConfig(config, candyMachineSigner.publicKey);
  const walletAddress = PublicKeyString.convertToPublickKey(config.solTreasuryAccount);
  return this.create({
    candyMachineSigner,
    walletAddress,
    authorityAddress: opts.authorityAddress,
    ...candyMachineData
  });
}

exports.create = create;
exports.createFromConfig = createFromConfig;
//# sourceMappingURL=Client.create.cjs.map
