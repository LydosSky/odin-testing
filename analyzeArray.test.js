import analyzeArray from "./analyzeArray";

describe("Analyze Array Test module", function () {
  test("Analyzes the Array", function () {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });

    expect(analyzeArray([])).toEqual({});
  });

  test("Analyze only works on array of numbers", function () {
    expect(() => analyzeArray(["a"])).toThrow(Error);
    expect(() => analyzeArray(["1", "2", "3"])).toThrow(Error);
    expect(() => analyzeArray([[], []])).toThrow(Error);
    expect(() => analyzeArray([{}, {}])).toThrow(Error);
    expect(() => analyzeArray([{}, true, []])).toThrow(Error);
  });
});
