import { PROGRAM_ID } from '@metaplex-foundation/mpl-candy-machine';
import { CandyMachineGpaBuilder } from './gpaBuilders/CandyMachineGpaBuilder.mjs';

const CandyMachineProgram = {
  publicKey: PROGRAM_ID,

  accounts(metaplex) {
    return new CandyMachineGpaBuilder(metaplex, this.publicKey);
  }

};

export { CandyMachineProgram };
//# sourceMappingURL=CandyMachineProgram.mjs.map
