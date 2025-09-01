// <!-- addEventListerner removeEventlisterner-->
const btn = document.getElementById("btn");
const al = document.getElementById("alert");

function sayhello() {
  console.log("Hello every one");
  btn.style.color = "red";
  al.textContent = "click button";
}
btn.addEventListener("dblclick", sayhello);

setTimeout(() => {
  //   al.style.display = "none";
  btn.removeEventListener("click", sayhello);
}, 5000);

//mouse

let mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", () => {
  console.log("mouse overed");
});

mouse.addEventListener("mouseout", () => {
  console.log("mouse out");
});

mouse.addEventListener("mousedown", () => {
  console.log("mouse down");
});

mouse.addEventListener("mouseup", () => {
  console.log("mouse up");
});

//keyboard
let input = document.getElementById("input");
input.addEventListener("keydown", () => {
  console.log("key down");
});

input.addEventListener("keyup", () => {
  console.log("key up");
});

input.addEventListener("keypress", () => {
  console.log("key press");
});

//windows event

window.addEventListener("load", () => {
  console.log("reload");
});

window.addEventListener("resize", () => {
  console.log("resize");
});

console.log(eval(342 - 5 / 2));


//form submit

