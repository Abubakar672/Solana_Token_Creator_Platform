"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const web3_js_1 = require("@solana/web3.js");
const buffer_1 = require("buffer");
const errors_1 = require("../errors");
class Account {
    constructor(pubkey, info) {
        this.pubkey = new web3_js_1.PublicKey(pubkey);
        this.info = info;
    }
    static from(account) {
        return new Account(account.pubkey, account.info);
    }
    static async load(connection, pubkey) {
        const info = await Account.getInfo(connection, pubkey);
        return new this(pubkey, info);
    }
    static isCompatible(_data) {
        throw new Error(`method 'isCompatible' is not implemented`);
    }
    static async getInfo(connection, pubkey) {
        const info = await connection.getAccountInfo(new web3_js_1.PublicKey(pubkey));
        if (!info) {
            throw (0, errors_1.ERROR_ACCOUNT_NOT_FOUND)(pubkey);
        }
        return { ...info, data: buffer_1.Buffer.from(info === null || info === void 0 ? void 0 : info.data) };
    }
    static async getInfos(connection, pubkeys, commitment = 'recent') {
        const BATCH_SIZE = 99;
        const promises = [];
        for (let i = 0; i < pubkeys.length; i += BATCH_SIZE) {
            promises.push(Account.getMultipleAccounts(connection, pubkeys.slice(i, Math.min(pubkeys.length, i + BATCH_SIZE)), commitment));
        }
        const results = new Map();
        (await Promise.all(promises)).forEach((result) => { var _a; return [...((_a = result === null || result === void 0 ? void 0 : result.entries()) !== null && _a !== void 0 ? _a : [])].forEach(([k, v]) => results.set(k, v)); });
        return results;
    }
    static async getMultipleAccounts(connection, pubkeys, commitment) {
        const args = connection._buildArgs([pubkeys.map((k) => k.toString())], commitment, 'base64');
        const unsafeRes = await connection._rpcRequest('getMultipleAccounts', args);
        if (unsafeRes.error) {
            throw new Error('failed to get info about accounts ' + unsafeRes.error.message);
        }
        if (!unsafeRes.result.value)
            return;
        const unsafeInfos = unsafeRes.result.value;
        return unsafeInfos.reduce((acc, unsafeInfo, index) => {
            if (unsafeInfo) {
                acc.set(pubkeys[index], {
                    ...unsafeInfo,
                    data: buffer_1.Buffer.from(unsafeInfo.data[0], 'base64'),
                });
            }
            return acc;
        }, new Map());
    }
    assertOwner(pubkey) {
        var _a;
        return (_a = this.info) === null || _a === void 0 ? void 0 : _a.owner.equals(new web3_js_1.PublicKey(pubkey));
    }
    toJSON() {
        var _a, _b, _c, _d, _e;
        return {
            pubkey: this.pubkey.toString(),
            info: {
                executable: !!((_a = this.info) === null || _a === void 0 ? void 0 : _a.executable),
                owner: ((_b = this.info) === null || _b === void 0 ? void 0 : _b.owner) ? new web3_js_1.PublicKey((_c = this.info) === null || _c === void 0 ? void 0 : _c.owner) : null,
                lamports: (_d = this.info) === null || _d === void 0 ? void 0 : _d.lamports,
                data: (_e = this.info) === null || _e === void 0 ? void 0 : _e.data.toJSON(),
            },
            data: this.data,
        };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map