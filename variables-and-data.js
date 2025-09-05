/*
 * Variables, Data Types, and Typing
 */
let wordData = "Word List";
console.log("Word List");

let subTotal = 100;
let tax = subTotal * .07;
let totalWithTax = tax + subTotal;
console.log(totalWithTax);

let obj = {
  key1: "value 1",
  key2: 4,
  boolean: true,
  obj2: {
      obj2Key1: "Internal Object Value",
  }
};
console.log(obj.key1)
console.log(obj.key2);
console.log(obj.obj2.obj2Key1);

/*let variable = "string"; */
let var1 = "2";
let var2 = "5";
let result = var1 + var2;
console.log(result);
/* numbers are actually strings so result is 25 and not 7 */
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;
let string = " String 1 " + "String 2";
console.log(string);