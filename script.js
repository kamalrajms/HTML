let fruits = ["apple", "banana", "mangeo"];
console.log(fruits);
console.log(fruits[0]);

// Array decleration
let A = new Array("A", "B", "c");
console.log(A);

//array indexing

console.log(A[1]);
console.log(A.length - 1);

// Array methods

let color = ["black", "white", "red", "blue", "green"];

let pop = color.pop();
console.log(pop);
console.log(color);
let push = color.push("pink");
console.log(push);
console.log(color);
let shift = color.shift();
console.log(shift);
console.log(color);
let unshift = color.unshift("violet");
console.log(unshift);
console.log(color);
let slice = color.slice(1, 3);
console.log(slice);
console.log(color);
let splice = color.splice(1, 3, "yellow", "skyblue");
console.log(splice);
console.log(color);
console.log(color.indexOf("blue"));
console.log(color.includes("red"));
console.log(color.reverse());
console.log(color.sort());

// for (let i = 0; i < color.length; i++) {
//   console.log(color[i]);
// }

// for (i of color) {
//   console.log(i);
// }
