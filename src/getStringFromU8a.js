function getStringFromU8a(array, bytes, offset=0) {
  if (!(array instanceof Uint8Array)) {
    throw new Error(
      "Tried to extract a string from something that was not a Uint8Array"
    );
  }

  bytes = bytes ? bytes : array.length;

  let result = '';

  for (let i = 0; i < bytes; i++) {
    const val = array[offset + i];
    if (val > 0) {
      const character = String.fromCharCode(val);
      result += character;
    }
  }

  return result;
}

module.exports = getStringFromU8a;
