'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');
var Signer = require('../../types/Signer.cjs');
var RpcError = require('../../errors/RpcError.cjs');
var common = require('../../utils/common.cjs');
var Amount = require('../../types/Amount.cjs');
var Program = require('../../types/Program.cjs');
var ProgramError = require('../../errors/ProgramError.cjs');
var TransactionBuilder = require('../../utils/TransactionBuilder.cjs');

class RpcClient {
  constructor(metaplex) {
    this.metaplex = metaplex;
  }

  async sendTransaction(transaction, signers = [], sendOptions = {}) {
    var _transaction, _transaction$feePayer, _transaction2, _transaction2$recentB;

    if (transaction instanceof TransactionBuilder.TransactionBuilder) {
      signers = [...transaction.getSigners(), ...signers];
      transaction = transaction.toTransaction();
    }

    (_transaction$feePayer = (_transaction = transaction).feePayer) !== null && _transaction$feePayer !== void 0 ? _transaction$feePayer : _transaction.feePayer = this.getDefaultFeePayer();
    (_transaction2$recentB = (_transaction2 = transaction).recentBlockhash) !== null && _transaction2$recentB !== void 0 ? _transaction2$recentB : _transaction2.recentBlockhash = await this.getLatestBlockhash();

    if (transaction.feePayer && this.metaplex.identity().equals(transaction.feePayer)) {
      signers = [this.metaplex.identity(), ...signers];
    }

    const {
      keypairs,
      identities
    } = Signer.getSignerHistogram(signers);

    if (keypairs.length > 0) {
      transaction.partialSign(...keypairs);
    }

    for (let i = 0; i < identities.length; i++) {
      await identities[i].signTransaction(transaction);
    }

    const rawTransaction = transaction.serialize();

    try {
      return await this.metaplex.connection.sendRawTransaction(rawTransaction, sendOptions);
    } catch (error) {
      throw this.parseProgramError(error, transaction);
    }
  }

  async confirmTransaction(signature, commitment) {
    let rpcResponse;

    try {
      rpcResponse = await this.metaplex.connection.confirmTransaction(signature, commitment);
    } catch (error) {
      throw new RpcError.FailedToConfirmTransactionError(error);
    }

    if (rpcResponse.value.err) {
      throw new RpcError.FailedToConfirmTransactionWithResponseError(rpcResponse);
    }

    return rpcResponse;
  }

  async sendAndConfirmTransaction(transaction, signers, confirmOptions) {
    const signature = await this.sendTransaction(transaction, signers, confirmOptions);
    const confirmResponse = await this.confirmTransaction(signature, confirmOptions === null || confirmOptions === void 0 ? void 0 : confirmOptions.commitment);
    return {
      signature,
      confirmResponse
    };
  }

  async getAccount(publicKey, commitment) {
    const accountInfo = await this.metaplex.connection.getAccountInfo(publicKey, commitment);
    return this.getUnparsedMaybeAccount(publicKey, accountInfo);
  }

  async getMultipleAccounts(publicKeys, commitment) {
    const accountInfos = await this.metaplex.connection.getMultipleAccountsInfo(publicKeys, commitment);
    return common.zipMap(publicKeys, accountInfos, (publicKey, accountInfo) => {
      return this.getUnparsedMaybeAccount(publicKey, accountInfo);
    });
  }

  async getProgramAccounts(programId, configOrCommitment) {
    const accounts = await this.metaplex.connection.getProgramAccounts(programId, configOrCommitment);
    return accounts.map(({
      pubkey,
      account
    }) => ({
      publicKey: pubkey,
      ...account
    }));
  }

  async airdrop(publicKey, amount, commitment) {
    Amount.assertSol(amount);
    const signature = await this.metaplex.connection.requestAirdrop(publicKey, amount.basisPoints.toNumber());
    const confirmResponse = await this.confirmTransaction(signature, commitment);
    return {
      signature,
      confirmResponse
    };
  }

  async getBalance(publicKey, commitment) {
    const balance = await this.metaplex.connection.getBalance(publicKey, commitment);
    return Amount.lamports(balance);
  }

  async getRent(bytes, commitment) {
    const rent = await this.metaplex.connection.getMinimumBalanceForRentExemption(bytes, commitment);
    return Amount.lamports(rent);
  }

  async getLatestBlockhash() {
    return (await this.metaplex.connection.getLatestBlockhash('finalized')).blockhash;
  }

  getDefaultFeePayer() {
    const identity = this.metaplex.identity().publicKey;
    return identity.equals(web3_js.PublicKey.default) ? undefined : identity;
  }

  getUnparsedMaybeAccount(publicKey, accountInfo) {
    if (!accountInfo) {
      return {
        publicKey,
        exists: false
      };
    }

    return {
      publicKey,
      exists: true,
      ...accountInfo
    };
  }

  parseProgramError(error, transaction) {
    var _error$message$match$, _error$message$match, _transaction$instruct, _transaction$instruct2, _transaction$instruct3;

    // Ensure the error as logs.
    if (!Program.isErrorWithLogs(error)) {
      return new RpcError.FailedToSendTransactionError(error);
    } // Parse the instruction number.


    const regex = /Error processing Instruction (\d+):/;
    const instruction = (_error$message$match$ = (_error$message$match = error.message.match(regex)) === null || _error$message$match === void 0 ? void 0 : _error$message$match[1]) !== null && _error$message$match$ !== void 0 ? _error$message$match$ : null; // Ensure there is an instruction number given to find the program.

    if (!instruction) {
      return new RpcError.FailedToSendTransactionError(error);
    } // Get the program ID from the instruction in the transaction.


    const instructionNumber = parseInt(instruction, 10);
    const programId = (_transaction$instruct = (_transaction$instruct2 = transaction.instructions) === null || _transaction$instruct2 === void 0 ? void 0 : (_transaction$instruct3 = _transaction$instruct2[instructionNumber]) === null || _transaction$instruct3 === void 0 ? void 0 : _transaction$instruct3.programId) !== null && _transaction$instruct !== void 0 ? _transaction$instruct : null; // Ensure we were able to find a program ID for the instruction.

    if (!programId) {
      return new RpcError.FailedToSendTransactionError(error);
    } // Find a registered program if any.


    let program;

    try {
      program = this.metaplex.programs().get(programId);
    } catch (_programNotFoundError) {
      return new RpcError.FailedToSendTransactionError(error);
    } // Ensure an error resolver exists on the program.


    if (!program.errorResolver) {
      return new ProgramError.UnknownProgramError(program, error);
    } // Finally, resolve the error.


    const resolvedError = program.errorResolver(error);
    return resolvedError ? new ProgramError.ParsedProgramError(program, resolvedError) : new ProgramError.UnknownProgramError(program, error);
  }

}

exports.RpcClient = RpcClient;
//# sourceMappingURL=RpcClient.cjs.map
