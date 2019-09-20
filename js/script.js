let myLibrary = [];

const $ = document.querySelector.bind(document);
const $$ = Array.from(document.querySelectorAll.bind(document));

function Book(id, title, author, pages, isCompleted) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isCompleted = isCompleted;
}
Book.prototype.info = function() {
  const isCompletedString = this.isCompleted ? "already read" : "not read yet";
  return `${title}, ${author}, ${haveReadString}`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let book = new Book("1", "example", "example", "456", true);
let book2 = new Book("2", "example2", "example2", "4569", false);
addBookToLibrary(book);
addBookToLibrary(book2);

function render() {
  myLibrary.forEach(book => {
    let row = document.createElement("tr");
    row.appendChild(createCell("id", book.id));
    row.appendChild(createCell("title", book.title));
    row.appendChild(createCell("author", book.author));
    row.appendChild(createCell("pages", book.pages));
    row.appendChild(createCell("completed", book.isCompleted));
    let deleteButton = document.createElement("td");
    deleteButton.textContent = "X";
    row.appendChild(deleteButton);
    $("tbody").appendChild(row);
  });
}

function createCell(attributeName, value) {
  let cell = document.createElement("td");
  cell.classList.add(attributeName);
  cell.contentEditable = "true";
  cell.textContent = value;
  return cell;
}

function newBookButtonHandler() {
  let atributesNodeList = $(".add-new").attributes;
  let atributesArray = [];
  for (let i = 0; i < atributesNodeList.length; i++) {
    const element = atributesNodeList[i];
    atributesArray.push(element.nodeName);
  }
  atributesArray.includes("hidden")
    ? $(".add-new").removeAttribute("hidden")
    : $(".add-new").setAttribute("hidden", true);
}
$("#add-new-book-button").addEventListener("click", newBookButtonHandler);
