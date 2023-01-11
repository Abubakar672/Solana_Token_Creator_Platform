"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class SizeChunker extends stream_1.Transform {
    constructor(options) {
        var _a, _b;
        super({ ...options, readableObjectMode: true });
        this.bytesPassed = 0;
        this.currentChunk = 0;
        this.cache = Buffer.alloc(0);
        this.chunkSize = (_a = options.chunkSize) !== null && _a !== void 0 ? _a : 10000;
        this.flushTail = (_b = options.flushTail) !== null && _b !== void 0 ? _b : true;
    }
    _transform(chunk, _encoding, done) {
        this.cache = Buffer.concat([this.cache, chunk]);
        while (this.cache.length >= this.chunkSize) {
            this.push({ id: ++this.currentChunk, data: this.cache.slice(0, this.chunkSize), bytesPassed: this.bytesPassed += this.chunkSize });
            this.cache = this.cache.slice(this.chunkSize);
        }
        done();
    }
    _flush(callback) {
        if (this.flushTail && this.cache.length > 0) {
            this.bytesPassed += this.cache.length;
            this.push({ id: ++this.currentChunk, data: this.cache, bytesPassed: this.bytesPassed });
        }
        callback();
    }
}
exports.default = SizeChunker;
//# sourceMappingURL=chunker.js.map