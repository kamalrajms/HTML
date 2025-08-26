let para = document.getElementById("text");
console.log(para.className);
para.className = "new";
console.log(para.className);

let head = document.getElementById("text2");
head.classList.add("bg");
head.classList.remove("head");
head.classList.toggle("underline");
console.log(head.classList.contains("underline"));

let h3 = document.getElementById("h3");
h3.style.cssText = "padding:20px; color:yellow;";
