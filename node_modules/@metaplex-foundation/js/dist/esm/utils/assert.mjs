/**
 * Error indicating that an assertion failed.
 */
class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AssertionError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}
/**
 * Assserts that the provided condition is true.
 */

function assert(condition, message) {
  if (!condition) {
    throw new AssertionError(message !== null && message !== void 0 ? message : 'Assertion failed');
  }
}
/**
 * Asserts that both values are strictly equal.
 */

assert.equal = function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new AssertionError((message !== null && message !== void 0 ? message : '') + ` ${actual} !== ${expected}`);
  }
};

export { AssertionError, assert as default };
//# sourceMappingURL=assert.mjs.map
