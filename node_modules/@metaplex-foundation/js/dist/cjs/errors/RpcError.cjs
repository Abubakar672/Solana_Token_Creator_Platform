'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MetaplexError = require('./MetaplexError.cjs');

class RpcError extends MetaplexError.MetaplexError {
  constructor(input) {
    super({ ...input,
      key: `rpc.${input.key}`,
      source: 'rpc'
    });
  }

}
class FailedToSendTransactionError extends RpcError {
  constructor(cause) {
    super({
      cause,
      key: 'failed_to_send_transaction',
      title: 'Failed to Send Transaction',
      problem: `The transaction could not be sent successfully to the network.`,
      solution: 'Check the error below for more information.',
      logs: cause.logs
    });
  }

  asSendTransactionError() {
    return this.cause;
  }

  get error() {
    return this.asSendTransactionError().message;
  }

  get errorLogs() {
    var _this$asSendTransacti;

    return (_this$asSendTransacti = this.asSendTransactionError().logs) !== null && _this$asSendTransacti !== void 0 ? _this$asSendTransacti : [];
  }

}
class FailedToConfirmTransactionError extends RpcError {
  constructor(cause) {
    super({
      cause,
      key: 'failed_to_confirm_transaction',
      title: 'Failed to Confirm Transaction',
      problem: `The transaction could not be confirmed.`,
      solution: 'Check the error below for more information.'
    });
  }

}
class FailedToConfirmTransactionWithResponseError extends FailedToConfirmTransactionError {
  constructor(response) {
    const getMessage = error => {
      if (!error) return 'Unknown error';
      if (typeof error === 'string') return error;

      try {
        return JSON.stringify(error);
      } catch (error) {
        return 'Unknown error';
      }
    };

    super(new Error(getMessage(response.value.err)));
    this.response = response;
  }

  get error() {
    var _this$response$value$;

    return (_this$response$value$ = this.response.value.err) !== null && _this$response$value$ !== void 0 ? _this$response$value$ : 'Unknown error';
  }

}

exports.FailedToConfirmTransactionError = FailedToConfirmTransactionError;
exports.FailedToConfirmTransactionWithResponseError = FailedToConfirmTransactionWithResponseError;
exports.FailedToSendTransactionError = FailedToSendTransactionError;
exports.RpcError = RpcError;
//# sourceMappingURL=RpcError.cjs.map
