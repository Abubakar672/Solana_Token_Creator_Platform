import { Keypair } from '@solana/web3.js';
import { createCandyMachineOperation } from './createCandyMachine.mjs';
import { CreatedCandyMachineNotFoundError } from '../../errors/CandyMachineError.mjs';
import { candyMachineDataFromConfig } from './config/fromConfig.mjs';
import { convertToPublickKey } from '../../types/PublicKeyString.mjs';

async function create(input) {
  const operation = createCandyMachineOperation(input);
  const output = await this.metaplex.operations().execute(operation);
  const candyMachine = await this.findByAddress(output.candyMachineSigner.publicKey);

  if (candyMachine === null) {
    throw new CreatedCandyMachineNotFoundError(output.candyMachineSigner.publicKey);
  }

  return {
    candyMachine,
    ...output
  };
}
async function createFromConfig(config, opts) {
  const {
    candyMachineSigner = Keypair.generate()
  } = opts;
  const candyMachineData = candyMachineDataFromConfig(config, candyMachineSigner.publicKey);
  const walletAddress = convertToPublickKey(config.solTreasuryAccount);
  return this.create({
    candyMachineSigner,
    walletAddress,
    authorityAddress: opts.authorityAddress,
    ...candyMachineData
  });
}

export { create, createFromConfig };
//# sourceMappingURL=Client.create.mjs.map
