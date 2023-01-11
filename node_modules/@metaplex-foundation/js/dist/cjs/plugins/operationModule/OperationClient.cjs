'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var SdkError = require('../../errors/SdkError.cjs');
var Task = require('../../utils/Task.cjs');

class OperationClient {
  constructor(metaplex) {
    _rollupPluginBabelHelpers.defineProperty(this, "operationHandlers", new Map());

    this.metaplex = metaplex;
  }
  /**
   * Maps the name of an operation with its operation handler.
   * Whilst the types on the Map are relatively loose, we ensure
   * operations match with their handlers when registering them.
   */


  register(operationConstructor, operationHandler) {
    this.operationHandlers.set(operationConstructor.key, operationHandler);
    return this;
  }

  get(operation) {
    const operationHandler = this.operationHandlers.get(operation.key);

    if (!operationHandler) {
      throw new SdkError.OperationHandlerMissingError(operation.key);
    }

    return operationHandler;
  }

  getTask(operation) {
    const operationHandler = this.get(operation);
    return new Task.Task(scope => {
      return operationHandler.handle(operation, this.metaplex, scope);
    });
  }

  execute(operation, options = {}) {
    return this.getTask(operation).run(options);
  }

}

exports.OperationClient = OperationClient;
//# sourceMappingURL=OperationClient.cjs.map
