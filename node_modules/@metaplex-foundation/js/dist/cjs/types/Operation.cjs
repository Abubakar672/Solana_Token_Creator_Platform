'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const useOperation = key => {
  const constructor = input => {
    return {
      key,
      input
    };
  };

  constructor.key = key;
  return constructor;
};

exports.useOperation = useOperation;
//# sourceMappingURL=Operation.cjs.map
