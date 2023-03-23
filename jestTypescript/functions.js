function calculateWageJS(
  workerName,
  hoursWorked,
  wagePerHour,
  overtime = 0,
  clt = true
) {
  if (!workerName || typeof workerName !== "string") {
    throw new Error("Worker name is required and must be a string");
  }

  if (
    typeof hoursWorked !== "number" ||
    typeof wagePerHour !== "number" ||
    typeof overtime !== "number"
  ) {
    throw new Error("Hours worked, wage per hour and overtime must be numbers");
  }

  if (hoursWorked < 0 || wagePerHour < 0 || overtime < 0) {
    throw new Error(
      "Hours worked, wage per hour and overtime must be positive numbers"
    );
  }

  const OVERTIME_MULTIPLIER = 2;
  const normalWage = hoursWorked * wagePerHour;
  const overtimeWage = overtime * OVERTIME_MULTIPLIER * wagePerHour;
  const finalWage = normalWage + overtimeWage;

  return {
    workerName,
    clt: clt ? "CLT" : "PJ",
    hoursWorked,
    wagePerHour,
    overtime,
    overtimeWagePerHour: OVERTIME_MULTIPLIER * wagePerHour,
    finalWage,
  };
}

console.log(calculateWageJS("Amanda", 2, 160, 20));

module.exports = {
  calculateWageJS,
};
