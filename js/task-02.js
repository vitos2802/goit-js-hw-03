"use strict";
const countProps = function (obj) {
  const objQuantity = Object.keys(obj).length;
  return objQuantity;
};

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
console.log(countProps({}));
