let myLibrary = [];

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
addBookToLibrary(book);

function render() {
  myLibrary.forEach(book => {
    let row = document.createElement("tr");
    row.appendChild(createCell("id", book.id));
    row.appendChild(createCell("title", book.title));
    row.appendChild(createCell("author", book.author));
    row.appendChild(createCell("pages", book.pages));
    row.appendChild(createCell("completed", book.isCompleted));

    document.querySelector("tbody").appendChild(row);
  });
}

function createCell(attributeName, value) {
  let cell = document.createElement("td");
  cell.classList.add(attributeName);
  cell.contentEditable = "true";
  cell.textContent = value;
  return cell;
}
