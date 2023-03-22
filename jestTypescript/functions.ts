


function calculateWageTS(
  workerName:string,
  hoursWorked:number,
  wagePerHour:number,
  overtime:number = 0,
  clt:boolean = true
) :any{
  if (!workerName || typeof workerName !== "string")
    throw new Error("Worker name is required and needs to be a string.");
  const OVERTIME_MULTIPLIER:number = 2;
  const normalWage:number = hoursWorked * wagePerHour;
  const overtimeWage:number = overtime * OVERTIME_MULTIPLIER;
  const finalWage = normalWage + overtimeWage;

  return{
    workerName,
    clt: clt ? "CLT" : "PJ",
    hoursWorked,
    wagePerHour,
    overtime,
    overtimeWagePerHour: OVERTIME_MULTIPLIER * wagePerHour,
    finalWage,
  };
}

console.log(calculateWageTS("Amanda", 2, 160, 20));

module.exports = {
  calculateWageTS,
};
