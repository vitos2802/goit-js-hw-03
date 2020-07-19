"use strict";
const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  let bestEmployee = 0;
  for (const value of values) {
    if (bestEmployee < value) {
      bestEmployee = value;
    }
  }
  for (const key of keys) {
    if (employees[key] === bestEmployee) {
      return key;
    }
  }
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
