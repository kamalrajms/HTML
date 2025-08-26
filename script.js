let text = document.getElementById("text");
text.style.color = "red";
text.style.backgroundColor = "yellow";

let area = document.getElementById("textarea");
area.value = "kfugvu 4v hi";

//create element
let newele = document.createElement("div");
newele.textContent = "hello world";
document.getElementById("newelement").appendChild(newele);

//creating text node
let li = document.createElement("li");
let textli = document.createTextNode("Item A");
li.appendChild(textli);
document.getElementById("item").appendChild(li);

//append child
let div = document.createElement("div");
div.textContent = "java script";
document.getElementById("addchild").appendChild(div);

//append()
let append = document.getElementById("append");
append.append("hi", "hello", "bye");
append.append(document.createElement("hr"));

//prepend()
let pre = document.getElementById("pre");
let h2 = document.createElement("h2");
h2.textContent = "how are you";
pre.prepend(h2);

//insertBefore
let item = document.createElement("li");
item.textContent = "before item B";
let list = document.getElementById("list");
let ref = document.getElementById("ref");
list.insertBefore(item, ref);

//  insertAdjacentHtml()
const box = document.getElementById("box");

box.insertAdjacentHTML("beforebegin", "<h2>Before Begin</h2>");
box.insertAdjacentHTML("afterbegin", "<h3>Start</h3>");
box.insertAdjacentHTML("beforeend", "<h3>stop</h3>");
box.insertAdjacentHTML("afterend", "<h2>after end</h2>");

//  remove child()

let child = document.getElementById("child2");

document.getElementById("parent").removeChild(child);

//remove()
document.getElementById("parent").remove();

//replace element

let replace = document.getElementById("replace");
let old = document.getElementById("old");

let new1 = document.createElement("div");
new1.textContent = "new content";
replace.replaceChild(new1, old);
