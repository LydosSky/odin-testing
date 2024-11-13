import capitalize from "./capitalize.js";

describe("Capitalize function test", function () {
  test("Capitalize all uppercase", () => {
    const word = "HELLO";
    expect(capitalize(word)).toBe("Hello");
  });

  test("Capitalize all lowercase", () => {
    const word = "hello";
    expect(capitalize(word)).toBe("Hello");
  });

  test("Fail if given is not a string", () => {
    const word = [];
    const wordTwo = 3;

    expect(() => capitalize(word)).toThrow(/^Not a String$/);
    expect(() => capitalize(wordTwo)).toThrow(/^Not a String$/);
  });
});
