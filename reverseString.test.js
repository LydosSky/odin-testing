import reverseString from "./reverseString.js";

describe("Test cases for reverseString", () => {
  test("Error out if input is not a string", () => {
    expect(() => reverseString([])).toThrow(Error);
    expect(() => reverseString({})).toThrow("Not a String");
    expect(() => reverseString(3)).toThrow(/^Not a String$/);
  });

  test("Reverses given string", () => {
    const word = "javascript";
    const wordTwo = "iki";
    expect(reverseString(word)).toBe("tpircsavaj");
    expect(reverseString(wordTwo)).toBe("iki");
  });
});
