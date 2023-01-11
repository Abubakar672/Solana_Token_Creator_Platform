import { Buffer } from 'buffer';
import { TokenMetadataProgram } from '../TokenMetadataProgram.mjs';
import { Pda } from '../../../types/Pda.mjs';

const findEditionPda = (mint, programId = TokenMetadataProgram.publicKey) => {
  return Pda.find(programId, [Buffer.from('metadata', 'utf8'), programId.toBuffer(), mint.toBuffer(), Buffer.from('edition', 'utf8')]);
};

export { findEditionPda };
//# sourceMappingURL=findEditionPda.mjs.map
