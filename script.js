// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }

// let a = 1;
// while (a <= 0) {
//   console.log(a);
//   a++;
// }

// let c = 0;
// do {
//   console.log(c);
//   c++;
// } while (c >= 5);

//nested for

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log("----");
// }

// let a = 1;
// while (a <= 5) {
//   b = 1;
//   let str = "";
//   while (b <= 5) {
//     str += b;
//     b++;
//     console.log(str);
//   }
//   a++;
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//     console.log(str);
//   }
// }

// //increment decrement
// let x = 5;
// let y = x++;
// let z = x--;
// console.log(x);
// console.log(y);
// console.log(z);

// let A = 5;
// let B = ++A;
// let Z = --A;
// console.log(A);
// console.log(B);
// console.log(Z);

// for (let i = 1; i <= 6; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
