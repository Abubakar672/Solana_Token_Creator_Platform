import BN from 'bn.js';
/**
 * Synonym for `string` to differentiate strings that should contain a Date/Timestamp
 *
 * @private
 */
export declare type DateTimeString = string;
/**
 * Tries to convert the {@link dateTimeString} to a big number representing time since epoch in
 * milliseconds. {@see https://www.epoch101.com/}
 *
 * @throws {@link Error} if the {@link dateTimeString} is not a valid date/time string.
 * @private
 */
export declare function convertToMillisecondsSinceEpoch(dateTimeString: DateTimeString): BN;
