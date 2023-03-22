function calculateWageJS(
  workerName,
  hoursWorked,
  wagePerHour,
  overtime = 0,
  clt = true
) {
  if (!workerName || typeof workerName !== "string")
    throw new Error("Worker name is required and needs to be a string.");
  const OVERTIME_MULTIPLIER = 2;
  const normalWage = hoursWorked * wagePerHour;
  const overtimeWage = overtime * OVERTIME_MULTIPLIER;
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
