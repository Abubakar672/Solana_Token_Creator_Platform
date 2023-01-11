/// <reference types="node" />
/// <reference types="node" />
import internal, { Transform } from "stream";
export default class SizeChunker extends Transform {
    protected bytesPassed: number;
    protected currentChunk: number;
    protected chunkSize: any;
    protected flushTail: any;
    protected cache: Buffer;
    constructor(options: internal.TransformOptions & {
        chunkSize: number;
        flushTail: boolean;
    });
    _transform(chunk: any, _encoding: BufferEncoding, done: internal.TransformCallback): void;
    _flush(callback: internal.TransformCallback): void;
}
