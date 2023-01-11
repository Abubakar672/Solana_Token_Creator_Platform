import { chunk } from './common.mjs';

class Postpone {
  constructor(value) {
    this.value = value;
  }

  static make(value) {
    return new this(value);
  }

  asyncPipe(callback) {
    return Postpone.make(async () => callback(this.value()));
  }

  pipe(callback) {
    return this.asyncPipe(async value => callback(await value));
  }

  asyncTap(callback) {
    return this.asyncPipe(async value => {
      callback(value);
      return value;
    });
  }

  tap(callback) {
    return this.asyncTap(async value => callback(await value));
  }

  log() {
    return this.tap(v => console.log(v));
  }

  map(callback) {
    return this.pipe(t => t.map(callback));
  }

  flatMap(callback) {
    return this.pipe(t => t.flatMap(callback));
  }

  chunk(size) {
    return this.pipe(t => chunk(t, size));
  }

  filter(callback) {
    return this.pipe(t => t.filter(callback));
  }

  async run() {
    return this.value();
  }

}

export { Postpone };
//# sourceMappingURL=Postpone.mjs.map
