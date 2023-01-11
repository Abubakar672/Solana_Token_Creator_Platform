import { PublicKey } from '@solana/web3.js';
import { findNftsByCreatorOperation } from './findNftsByCreator.mjs';
import { useOperation } from '../../types/Operation.mjs';

const Key = 'FindNftsByCandyMachineOperation';
const findNftsByCandyMachineOperation = useOperation(Key);
const findNftsByCandyMachineOnChainOperationHandler = {
  handle: async (operation, metaplex) => {
    const {
      candyMachine,
      version = 2
    } = operation.input;
    let firstCreator = candyMachine;

    if (version === 2) {
      // TODO: Refactor when we have a CandyMachine program in the SDK.
      [firstCreator] = PublicKey.findProgramAddressSync([Buffer.from('candy_machine'), candyMachine.toBuffer()], new PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'));
    }

    return metaplex.operations().execute(findNftsByCreatorOperation({
      creator: firstCreator,
      position: 1
    }));
  }
};

export { findNftsByCandyMachineOnChainOperationHandler, findNftsByCandyMachineOperation };
//# sourceMappingURL=findNftsByCandyMachine.mjs.map
