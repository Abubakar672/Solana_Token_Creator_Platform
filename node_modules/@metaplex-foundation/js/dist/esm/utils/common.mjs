import mime from 'mime';

const removeEmptyChars = value => value.replace(/\u0000/g, '');
const padEmptyChars = (value, chars) => value.padEnd(chars, '\u0000');
const tryOr = (callback, defaultValue) => {
  try {
    return callback();
  } catch (error) {
    return defaultValue;
  }
};
const tryOrNull = cb => tryOr(cb, null);
const chunk = (array, chunkSize) => array.reduce((accumulator, item, index) => {
  const chunkIndex = Math.floor(index / chunkSize);

  if (!accumulator[chunkIndex]) {
    accumulator[chunkIndex] = [];
  }

  accumulator[chunkIndex].push(item);
  return accumulator;
}, []);
const zipMap = (left, right, fn) => left.map((t, index) => {
  var _right$index;

  return fn(t, (_right$index = right === null || right === void 0 ? void 0 : right[index]) !== null && _right$index !== void 0 ? _right$index : null, index);
});
const randomStr = (length = 20, alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
  let result = '';
  const alphabetLength = alphabet.length;

  for (var i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
  }

  return result;
};
const getContentType = fileName => mime.getType(fileName);
const getExtension = fileName => {
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex < 0 ? null : fileName.slice(lastDotIndex + 1);
};
const walk = (parent, cb, options) => {
  const recursiveWalk = child => walk(child, cb, options);

  if (parent && Array.isArray(parent)) {
    parent.forEach((child, index) => {
      cb(recursiveWalk, child, index, parent);
    });
  } else if (parent && typeof parent === 'object') {
    var _options$sortObjectKe;

    const keys = Object.keys(parent);

    if ((_options$sortObjectKe = options === null || options === void 0 ? void 0 : options.sortObjectKeys) !== null && _options$sortObjectKe !== void 0 ? _options$sortObjectKe : true) {
      keys.sort();
    }

    keys.forEach(key => {
      const child = parent[key];
      cb(recursiveWalk, child, key, parent);
    });
  }
};

export { chunk, getContentType, getExtension, padEmptyChars, randomStr, removeEmptyChars, tryOr, tryOrNull, walk, zipMap };
//# sourceMappingURL=common.mjs.map
