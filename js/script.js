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

function render() {
  while ($(".book-list").firstChild) {
    $(".book-list").removeChild($(".book-list").firstChild);
  }
  myLibrary.forEach(book => {
    let row = document.createElement("tr");
    row.appendChild(createCell("id", book.id));
    row.appendChild(createCell("title", book.title));
    row.appendChild(createCell("author", book.author));
    row.appendChild(createCell("pages", book.pages));
    row.appendChild(createCell("completed", book.isCompleted));
    row.appendChild(createCell("delete", book.id));
    $(".book-list").insertBefore(row, $(".book-list").firstChild);
  });
}

function createCell(attributeName, value) {
  let cell = document.createElement("td");
  if (attributeName === "delete") {
    button = document.createElement("button");
    button.classList.add("delete-book");
    button.setAttribute("data-id", value);
    button.textContent = "X";
    cell.appendChild(button);
  } else {
    cell.classList.add(attributeName);
    cell.contentEditable = "true";
    cell.textContent = value;
  }
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
  $(".new-id").textContent = idCounter;
}
$("#add-new-book-button").addEventListener("click", newBookButtonHandler);

function persistBookButtonHandler() {
  let id = $(".new-id").textContent;
  let title = $("input[name='title']").value;
  let author = $("input[name='author']").value;
  let pages = $("input[name='pages']").value;
  let isCompleted = $("input[name='isCompleted']").checked;
  let book = new Book(id, title, author, pages, isCompleted);
  addBookToLibrary(book);
  render();
  idCounter++;
  $(".new-id").textContent = idCounter;
  $("input[name='title']").value = "";
  $("input[name='author']").value = "";
  $("input[name='pages']").value = "";
  $("input[name='isCompleted']").checked = false;
}
$("#persist-new-book").addEventListener("click", persistBookButtonHandler);

function deleteBookButtonHandler() {}

let idCounter = 3;

let book = new Book("1", "example", "example", "456", true);
let book2 = new Book("2", "example2", "example2", "4569", false);
addBookToLibrary(book);
addBookToLibrary(book2);

render();
