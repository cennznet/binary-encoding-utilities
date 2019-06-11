const isObject = require("./isObject");


describe("isObject", () => {
  it("should return true if passed an object", () => {
    expect(
      isObject({test: 1})
    ).toEqual(
      true
    );
  });

  it("should return false if passed an array", () => {
    expect(
      isObject(['test', 1])
    ).toEqual(
      false
    );
  });

  it("should return false if passed a string", () => {
    expect(
      isObject('test')
    ).toEqual(
      false
    );
  });

  it("should return false if passed null", () => {
    expect(
      isObject(null)
    ).toEqual(
      false
    );
  });

  it("should return false if passed a boolean", () => {
    expect(
      isObject(true)
    ).toEqual(
      false
    );
  });

  it("should return false if passed a regex", () => {
    expect(
      isObject(/^.+$/)
    ).toEqual(
      false
    );
  });

  it("should return false if passed a function", () => {
    expect(
      isObject(() => {})
    ).toEqual(
      false
    );
  });

  it("should return false if passed a number", () => {
    expect(
      isObject(23)
    ).toEqual(
      false
    );
  });
});
