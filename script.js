// parent node
const child = document.getElementById("child");
console.log(child.parentNode);
console.log(child.parentElement);
console.log(document.parentElement);

//child node
const list = document.getElementById("list");
console.log(list.childNodes);
console.log(list.children);

//first child
const book = document.getElementById("book");
console.log(book.firstChild);
console.log(book.firstElementChild);

//last child
console.log(book.lastChild);
console.log(book.lastElementChild);

//sibling node
//next
const first = document.getElementById("first");
const last = document.getElementById("last");
console.log(first.nextSibling);
console.log(first.nextElementSibling);
//previous
console.log(last.previousSibling);
console.log(last.previousElementSibling);
