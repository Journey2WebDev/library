
let myLibrary = [];

function addBookToLibrary() {
  // leet code here
}


// 
// Frist draft of needed features
// 

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


// Practice: Onclick event for 'add new book' btn
let showFormBtn = document.getElementById("btn-createForm");
showFormBtn.addEventListener("click", showForm);

function showForm(){
  document.getElementById("main-form").style.visibility = "visible";
  document.getElementById("main-form").style.opacity = "1";
}


// Practice: Onclick event to pass form data to book object
// Book object constructor
function Book(title, author, genre, numPages, haveRead, rating) {
  this.title = title
  this.author = author
  this.genre = genre
  this.numPages = numPages
  this.haveRead = haveRead
  this.rating = rating
}

// Example Books
// let book1 = new Book("curious george", "some guy", "children", true, 4.5, 50);

let addToLibraryBtn = document.getElementById("btn-addToLibrary");
addToLibraryBtn.addEventListener("click", formDataToObject);

function formDataToObject(){
  newBook = new Book();

  newBook.title = document.getElementById("bookTitle").value;
  newBook.author = document.getElementById("bookAuthor").value;
  document.getElementById("genreF").checked === true ? newBook.genre = "fiction" : newBook.genre = "non-fiction"
  newBook.numPages = document.getElementById("numPages").value;
  document.getElementById("haveReadY").checked === true ? newBook.haveRead = "have read" : newBook.haveRead = "have NOT read";
  
  return console.log(newBook);
}

// Practice: Create Book layout in Javascript




