const fn = require("./functions");

describe("calculateWageJS", () => {
  const expected = {
    workerName: "Amanda",
    clt: "CLT",
    hoursWorked: 160,
    wagePerHour: 20,
    overtime: 10,
    overtimeWagePerHour: 40,
    finalWage: 3600,
  };

  it("should return the expected worker wage object when given valid input", () => {
    expect(fn.calculateWageJS("Amanda", 160, 20, 10)).toMatchObject(expected);
  });
  it("should return an object", () => {
    const result = fn.calculateWageJS("Amanda", 160, 20, 10);
    expect(typeof result).toBe("object");
  });
  it("should throw an error when workerName is not a string", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        fn.calculateWageJS(a, 160, 20, 10);
      }).toThrow();
    });
  });
  it("should throw an error when hoursWorked is negative", () => {
    expect(() => {
      fn.calculateWageJS("Amanda", -10, 20, 10);
    }).toThrow();
  });

  it("should not return NaN or Infinity as the final wage", () => {
    const result = fn.calculateWageJS("Amanda", Number.MAX_SAFE_INTEGER, 1, 10);
    expect(isFinite(result.finalWage)).toBe(true);
  });

  it("should return zero final wage when hours worked is zero", () => {
    expect(fn.calculateWageJS("Amanda", 0, 20).finalWage).toBe(0);
  });
});
