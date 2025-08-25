// console.log(document.title);

// id

let head = document.getElementById("head");

head.style.color = "red";

//class

// let para = document.getElementsByClassName("para")[0];
let para = document.getElementsByClassName("para");
for (let p of para) {
  p.style.color = "yellow";
}

//tag selector

let nav = document.getElementsByTagName("nav");
// nav.style.fontWeight = "bold";
console.log(nav.length);

//query selector

let query = document.querySelector("#head");

query.style.backgroundColor = "yellow";

//qurey selector all

let queryall = document.querySelectorAll("#head");
queryall.forEach((e) => {
  e.style.backgroundColor = "yellow";
});
 