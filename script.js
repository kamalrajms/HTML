// innerHTML
let text = document.getElementById("text");
console.log(text.innerHTML);

text.innerHTML = "<i>Hello</i>";

//inner text

let text2 = document.getElementById("text2");
console.log(text2.innerText);

text2.innerText = "changed text";

//text content

let text3 = document.getElementById("text3");
console.log(text3.textContent);

text3.textContent = "hiiiii....";

//getAttribute

let img = document.getElementById("img");
console.log(img.getAttribute("src"));

//setAttribute

img.setAttribute("src", "./image/MS-Dhoni-Background-images-740x392.jpg");
img.setAttribute("alt", "Dhoni");

//remove attribute

let inp = document.getElementById("inp");

inp.removeAttribute("placeholder");

//changing form
inp.value = "kamal";
