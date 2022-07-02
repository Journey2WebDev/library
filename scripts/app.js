
let myLibrary = [];

// Book object constructor
function Book(title, author, genre, haveRead, rating, numPages) {
  this.title = title
  this.author = author
  this.genre = genre
  this.haveRead = haveRead
  this.rating = rating
  this.numPages = numPages
}

// Example Books
// let book1 = new Book("curious george", "some guy", "children", true, 4.5, 50);
// let book2 = new Book("curious george", "some guy", "children", true, 4.5, 50);
// let book3 = new Book("curious george", "some guy", "children", true, 4.5, 50);
// let book4 = new Book("curious george", "some guy", "children", true, 4.5, 50);
// let book5 = new Book("curious george", "some guy", "children", true, 4.5, 50);

function addBookToLibrary() {
  // leet code here
}


// Practice: Remove book from library
let allCloseIcons = document.getElementsByClassName("icon-remove");

Array.prototype.forEach.call(allCloseIcons, function(icon){
  icon.addEventListener("click", removeBook);
});

function removeBook(){
  document.querySelector(`div[data-id="${this.dataset.id}"]`).remove();
}


// Practice: Change 'Have read?' icon
let allReadIcons = document.getElementsByClassName("icon-read");

Array.prototype.forEach.call(allReadIcons, function(icon){
  icon.addEventListener("click", toggleReadIcon);
});

function toggleReadIcon(){
  let pattern = /have-read.png$/;

  if(this.src.search(pattern) >= 0){
    this.src = "./images/have-not-read.png";
  } else {
    this.src = "./images/have-read.png";
  }
}


