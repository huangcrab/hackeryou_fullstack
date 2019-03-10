//do this, but this is anomynous function, it makes a litter harder to debug when the function blow up
exports.add = (a, b) => a + b;
exports.substract = (a, b) => a - b;

//other
// const substract = (a, b) => a - b;

// exports.substract = substract;

// const a = Number(process.argv[2]);
// const operator = process.argv[3];
// const b = Number(process.argv[4]);

// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;

// let result;
// switch (operator) {
//   case "+":
//     result = add(a, b);
//     break;
//   case "-":
//     result = substract(a, b);
//     break;
//   default:
//     break;
// }

// module.exports = {
//   add,
//   substract
// };
