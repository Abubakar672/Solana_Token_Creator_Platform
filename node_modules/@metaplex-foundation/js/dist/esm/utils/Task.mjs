import { defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.mjs';
import AbortController from 'abort-controller';
import EventEmitterPackage from 'eventemitter3';
import { Disposable } from './Disposable.mjs';
import { TaskIsAlreadyRunningError } from '../errors/SdkError.mjs';

class Task {
  constructor(callback, children = [], context = {}) {
    _defineProperty(this, "status", 'pending');

    _defineProperty(this, "result", undefined);

    _defineProperty(this, "error", undefined);

    this.callback = callback;
    this.children = children;
    this.context = context;
    this.eventEmitter = new EventEmitterPackage.EventEmitter();
  }

  async run(options = {}, ...inputs) {
    var _options$force;

    if (this.isRunning()) {
      throw new TaskIsAlreadyRunningError();
    }

    if (this.isPending() || ((_options$force = options.force) !== null && _options$force !== void 0 ? _options$force : false)) {
      return this.forceRun(options, ...inputs);
    }

    if (this.isSuccessful()) {
      return this.getResult();
    }

    throw this.getError();
  }

  async forceRun(options = {}, ...inputs) {
    var _options$signal;

    const disposable = new Disposable((_options$signal = options.signal) !== null && _options$signal !== void 0 ? _options$signal : new AbortController().signal);
    disposable.onCancel(cancelError => {
      this.setStatus('canceled');
      this.error = cancelError;
    });
    return disposable.run(async scope => {
      const {
        isCanceled,
        throwIfCanceled
      } = scope;

      try {
        // Start loading.
        this.setStatus('running');
        this.result = undefined;
        this.error = undefined;
        this.result = await Promise.resolve(this.callback(scope, ...inputs));
        throwIfCanceled();
        this.setStatus('successful'); // Return the loaded result.

        return this.result;
      } catch (newError) {
        // Capture the error and reset the result.
        this.error = newError;
        this.result = undefined;
        this.setStatus(isCanceled() ? 'canceled' : 'failed'); // Re-throw the error.

        throw this.error;
      }
    });
  }

  loadWith(preloadedResult) {
    this.setStatus('successful');
    this.result = preloadedResult;
    this.error = undefined;
    return this;
  }

  reset() {
    this.setStatus('pending');
    this.result = undefined;
    this.error = undefined;
    return this;
  }

  setChildren(children) {
    this.children = children;
    return this;
  }

  getChildren() {
    return this.children;
  }

  getDescendants() {
    return this.children.flatMap(child => [child, ...child.getDescendants()]);
  }

  setContext(context) {
    this.context = context;
    return this;
  }

  getContext() {
    return this.context;
  }

  getStatus() {
    return this.status;
  }

  getResult() {
    return this.result;
  }

  getError() {
    return this.error;
  }

  isPending() {
    return this.status === 'pending';
  }

  isRunning() {
    return this.status === 'running';
  }

  isCompleted() {
    return this.status !== 'pending' && this.status !== 'running';
  }

  isSuccessful() {
    return this.status === 'successful';
  }

  isFailed() {
    return this.status === 'failed';
  }

  isCanceled() {
    return this.status === 'canceled';
  }

  onStatusChange(callback) {
    this.eventEmitter.on('statusChange', callback);
    return this;
  }

  onStatusChangeTo(status, callback) {
    return this.onStatusChange(newStatus => status === newStatus ? callback() : undefined);
  }

  onSuccess(callback) {
    return this.onStatusChangeTo('successful', callback);
  }

  onFailure(callback) {
    return this.onStatusChangeTo('failed', callback);
  }

  onCancel(callback) {
    return this.onStatusChangeTo('canceled', callback);
  }

  setStatus(newStatus) {
    if (this.status === newStatus) return;
    this.status = newStatus;
    this.eventEmitter.emit('statusChange', newStatus);
  }

}

export { Task };
//# sourceMappingURL=Task.mjs.map
