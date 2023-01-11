"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const web3_js_1 = require("@solana/web3.js");
const accounts_1 = require("./accounts");
const buffer_1 = require("buffer");
class Program {
    static async findProgramAddress(seeds) {
        return (await web3_js_1.PublicKey.findProgramAddress(seeds, this.PUBKEY))[0];
    }
    static async getProgramAccounts(connection, configOrCommitment) {
        const extra = {};
        let commitment;
        if (configOrCommitment) {
            if (typeof configOrCommitment === 'string') {
                commitment = configOrCommitment;
            }
            else {
                commitment = configOrCommitment.commitment;
                if (configOrCommitment.dataSlice) {
                    extra.dataSlice = configOrCommitment.dataSlice;
                }
                if (configOrCommitment.filters) {
                    extra.filters = configOrCommitment.filters;
                }
            }
        }
        const args = connection._buildArgs([this.PUBKEY.toBase58()], commitment, 'base64', extra);
        const unsafeRes = await connection._rpcRequest('getProgramAccounts', args);
        return unsafeRes.result
            .map(({ account: { data, executable, lamports, owner }, pubkey }) => ({
            account: {
                data: buffer_1.Buffer.from(data[0], 'base64'),
                executable,
                lamports,
                owner: new web3_js_1.PublicKey(owner),
            },
            pubkey: new web3_js_1.PublicKey(pubkey),
        }))
            .map(({ pubkey, account }) => new accounts_1.Account(pubkey, account));
    }
}
exports.Program = Program;
//# sourceMappingURL=Program.js.map