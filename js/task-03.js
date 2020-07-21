"use strict";
const findBestEmployee = function (employees) {
  let bestEmployeeValue = 0;
  let bestEmployee;
  const employeesArrays = Object.entries(employees);
  for (const employeesArray of employeesArrays) {
    const [key, value] = employeesArray;
    if (value > bestEmployeeValue) {
      bestEmployeeValue = value;
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
