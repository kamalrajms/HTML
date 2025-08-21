function greeting() {
  console.log("Hello");
}
greeting();
greeting();
greeting();
greeting();
greeting();
greeting();
greeting();
greeting();

//parameter ,arguments

function person(name) {
  console.log("hi" + name);
}
person("SK");
person("AK");

//return value

function numbers(a, b) {
  return a + b;
}

let ans = numbers(3, 4);
let ans1 = numbers(3, 5);
let ans2 = numbers(3, 8);
console.log(ans);
console.log(ans1);
console.log(ans2);

// function Expression

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

//arrow function

const add = (a, b) => {
  return a * b;
};

console.log(add(1, 1));

