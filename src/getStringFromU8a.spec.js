const { stringToU8a } = require("@polkadot/util");
const getStringFromU8a = require("./getStringFromU8a");

describe("getStringFromU8a", () => {
  it("should return the correct string from an ascii byte array, ignoring invisible characters", () => {
    const expected = 'hello!';
    const input = new Uint8Array(32);
    input.set(stringToU8a(expected));

    const result = getStringFromU8a(input);

    expect(result).toEqual(expected);
  });

  it("should return a string given an offset and a length, ignoring invisible characters", () => {
    const offset = 10;
    const length = 11;
    const expected = 'hello!';
    const input = new Uint8Array(32);
    input.set(stringToU8a(expected), offset-2, length);

    const result = getStringFromU8a(input);

    expect(result).toEqual(expected);
  });

  it("should return the correct string from an ascii byte array at a give offset, for a given length", () => {
    const expected = 'hello!';
    const input = new Uint8Array(32);
    const offset = 10;
    const length = 11;
    input.set(stringToU8a(expected), offset);

    const result = getStringFromU8a(input, length, offset);

    expect(result).toEqual(expected);
  });
});
