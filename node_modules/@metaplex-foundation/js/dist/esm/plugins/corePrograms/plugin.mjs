import { SystemProgram } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PROGRAM_ID, cusper } from '@metaplex-foundation/mpl-token-metadata';
import { TokenMetadataGpaBuilder } from '../../programs/tokenMetadata/gpaBuilders/TokenMetadataGpaBuilder.mjs';

const corePrograms = () => ({
  install(metaplex) {
    // System Program.
    metaplex.programs().register({
      name: 'SystemProgram',
      address: SystemProgram.programId
    }); // Token Program.

    metaplex.programs().register({
      name: 'TokenProgram',
      address: TOKEN_PROGRAM_ID
    }); // Token Metadata Program.

    metaplex.programs().register({
      name: 'TokenMetadataProgram',
      address: PROGRAM_ID,
      errorResolver: error => cusper.errorFromProgramLogs(error.logs, false),
      gpaResolver: metaplex => new TokenMetadataGpaBuilder(metaplex, PROGRAM_ID)
    });
  }

});

export { corePrograms };
//# sourceMappingURL=plugin.mjs.map
