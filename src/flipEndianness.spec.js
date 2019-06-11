const flipEndianness = require("./flipEndianness");

describe("when flipping the endianness of a single number", () => {
  it("should flip endianess with bit representation", () => {
    let input = 0b00101000;
    let expected = 0b00010100;
    let result = flipEndianness(input);

    expect(result).toEqual(expected);
  });

  it("should flip endianess with bit ", () => {
    const input = 0b00000100;
    const result = flipEndianness(input);

    const expected = 0b00100000;
    expect(result).toEqual(expected);
  });
});
