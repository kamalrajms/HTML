let person = {
  name: "Arun",
  age: 23,
  course: "B.E",
  address: "a colony",
  marks: {
    tamil: 88,
    englis: 90,
  },
  greeting: function (name) {
    console.log("hello", this.name);
  },
};
//update
person.course = "M.E";

console.log(person);
//delete
delete person.address;

console.log(person.age);
console.log(person["course"]);
console.log(person);
console.log(person.marks["tamil"]);
console.log(person.marks.tamil);
console.log(person.greeting("AK"));

for (let i in person) {
  console.log(i, ":", person[i]);
}

let num = ["arun", 2, "hgf", 3, 4, 5];
for (let i in num) {
  console.log(i, num[i]);
}

for (let i of num) {
  console.log(i);
}

num.forEach((n, ind) => {
  console.log(n, ind);
});
