"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandyMachineProgram = void 0;
const mpl_core_1 = require("@metaplex-foundation/mpl-core");
const errors = __importStar(require("./generated/errors"));
const instructions = __importStar(require("./generated/instructions"));
const accounts = __importStar(require("./generated/accounts"));
const generated_1 = require("./generated");
class CandyMachineProgram extends mpl_core_1.Program {
}
exports.CandyMachineProgram = CandyMachineProgram;
CandyMachineProgram.PREFIX = 'metaplex';
CandyMachineProgram.CONFIG = 'config';
CandyMachineProgram.TOTALS = 'totals';
CandyMachineProgram.PUBKEY = generated_1.PROGRAM_ID;
CandyMachineProgram.instructions = instructions;
CandyMachineProgram.errors = errors;
CandyMachineProgram.accounts = accounts;
//# sourceMappingURL=CandyMachineProgram.js.map