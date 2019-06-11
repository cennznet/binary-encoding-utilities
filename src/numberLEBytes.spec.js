const {
  numberToLEBytes,
  LEBytesToNumber,
} = require("./numberLEBytes");


describe("numberToLEBytes", () => {
  it("should convert a multi-byte number to LE format, at the given offset and length, within a given Uint8Array", () => {
    const expected = new Uint8Array([0,0,0,0,0,0,0,0,0,0,140,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const number = 54321;
    const array = new Uint8Array(32);
    const offset = 10;
    const bytes = 5;

    expect(array).not.toEqual(expected);

    numberToLEBytes(
      number,
      array,
      bytes,
      offset,
    );

    expect(array).toEqual(expected);
  });
});


describe("LEBytesToNumber", () => {
  it("should convert a multi-byte number in LE format, at the given offset and length in a given Uint8Array, to a number", () => {
    const array = new Uint8Array([0,0,0,0,0,0,0,0,0,0,140,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const expected = 54321;
    const offset = 10;
    const bytes = 5;

    const result = LEBytesToNumber(
      array,
      bytes,
      offset,
    );

    expect(result).toEqual(expected);
  });
});
