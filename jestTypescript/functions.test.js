const fn = require("./functions");
describe("calculateWageJS", () => {
  it("should return a specific object", () => {
    expect(fn.calculateWageJS("Amanda", 160, 20, 10)).toMatchObject({
      workerName: "Amanda",
      clt: "CLT",
      hoursWorked: 160,
      wagePerHour: 20,
      overtime: 10,
      overtimeWagePerHour: 40,
      finalWage: 3220,
    });
  });
  it("should return an object", () => {
    const result = fn.calculateWageJS("Amanda", 160, 20, 10);
    expect(typeof result).toBe("object");
  });
  it("should throw if workername is false or not a string", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        fn.calculateWageJS(a, 160, 20, 10);
      }).toThrow();
    });
  });
});
