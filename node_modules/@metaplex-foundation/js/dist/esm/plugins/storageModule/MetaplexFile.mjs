import { Buffer } from 'buffer';
import { randomStr, getContentType, getExtension } from '../../utils/common.mjs';
import { InvalidJsonVariableError } from '../../errors/SdkError.mjs';

const useMetaplexFile = (content, fileName, options = {}) => {
  var _options$displayName, _options$uniqueName, _options$contentType, _options$extension, _options$tags;

  return {
    buffer: parseMetaplexFileContent(content),
    fileName: fileName,
    displayName: (_options$displayName = options.displayName) !== null && _options$displayName !== void 0 ? _options$displayName : fileName,
    uniqueName: (_options$uniqueName = options.uniqueName) !== null && _options$uniqueName !== void 0 ? _options$uniqueName : randomStr(),
    contentType: (_options$contentType = options.contentType) !== null && _options$contentType !== void 0 ? _options$contentType : getContentType(fileName),
    extension: (_options$extension = options.extension) !== null && _options$extension !== void 0 ? _options$extension : getExtension(fileName),
    tags: (_options$tags = options.tags) !== null && _options$tags !== void 0 ? _options$tags : []
  };
};
const useMetaplexFileFromBrowser = async (file, options = {}) => {
  const buffer = await file.arrayBuffer();
  return useMetaplexFile(buffer, file.name, options);
};
const useMetaplexFileFromJson = (json, fileName = 'inline.json', options = {}) => {
  let jsonString;

  try {
    jsonString = JSON.stringify(json);
  } catch (error) {
    throw new InvalidJsonVariableError(error);
  }

  return useMetaplexFile(jsonString, fileName, options);
};
const parseMetaplexFileContent = content => {
  if (content instanceof ArrayBuffer) {
    return Buffer.from(new Uint8Array(content));
  }

  return Buffer.from(content);
};
const getBytesFromMetaplexFiles = (...files) => files.reduce((acc, file) => acc + file.buffer.byteLength, 0);
const getBrowserFileFromMetaplexFile = file => new File([file.buffer], file.fileName);
const isMetaplexFile = metaplexFile => {
  return metaplexFile != null && typeof metaplexFile === 'object' && 'buffer' in metaplexFile && 'fileName' in metaplexFile && 'displayName' in metaplexFile && 'uniqueName' in metaplexFile && 'contentType' in metaplexFile && 'extension' in metaplexFile && 'tags' in metaplexFile;
};

export { getBrowserFileFromMetaplexFile, getBytesFromMetaplexFiles, isMetaplexFile, parseMetaplexFileContent, useMetaplexFile, useMetaplexFileFromBrowser, useMetaplexFileFromJson };
//# sourceMappingURL=MetaplexFile.mjs.map
