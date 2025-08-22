let num = [2, 4, 5, 6, 71,2];
let res = num.map((n, ind) => n * n);
console.log(res);

let red = num.reduce((acc, current) => current + acc, 0);
console.log(red);

let find = num.find((n) => n % 2 == 0);
console.log(find);

let filter = num.filter((e) => e % 2 === 0);
console.log(filter);

let findindex = num.findIndex((e) => e >= 10);
console.log(findindex);

let some = num.some((e) => e < 0);
console.log(some);

let every = num.every((e) => e % 2 === 0);
console.log(every);
