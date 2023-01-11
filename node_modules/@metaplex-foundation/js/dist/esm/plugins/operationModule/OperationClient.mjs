import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import { OperationHandlerMissingError } from '../../errors/SdkError.mjs';
import { Task } from '../../utils/Task.mjs';

class OperationClient {
  constructor(metaplex) {
    _defineProperty(this, "operationHandlers", new Map());

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
      throw new OperationHandlerMissingError(operation.key);
    }

    return operationHandler;
  }

  getTask(operation) {
    const operationHandler = this.get(operation);
    return new Task(scope => {
      return operationHandler.handle(operation, this.metaplex, scope);
    });
  }

  execute(operation, options = {}) {
    return this.getTask(operation).run(options);
  }

}

export { OperationClient };
//# sourceMappingURL=OperationClient.mjs.map
