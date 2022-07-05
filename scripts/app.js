
let myLibrary = [];

function addBookToLibrary() {
  // leet code here
}


// 
// Frist draft of needed features
// 

// Practice: Remove book from library
// let allCloseIcons = document.getElementsByClassName("icon-remove");

// Array.prototype.forEach.call(allCloseIcons, function(icon){
//   icon.addEventListener("click", removeBook);
// });

// function removeBook(){
//   document.querySelector(`div[data-id="${this.dataset.id}"]`).remove();
// }


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
let divMain = document.createElement("div");
divMain.classList.add("lib-book");
divMain.setAttribute("data-id", "book1");

// Icon: Remove book
let divIconRemove = document.createElement("div");
divIconRemove.classList.add("book-icon", "icon-remove-div")

let imgIconRemove = document.createElement("img");
imgIconRemove.setAttribute("src", "./images/close-circle-black.png");
imgIconRemove.setAttribute("alt", "black circle with white x");
imgIconRemove.classList.add("icon-remove");
imgIconRemove.setAttribute("data-id", "book1");
imgIconRemove.setAttribute("title", "Remove from library");

divIconRemove.appendChild(imgIconRemove);

// Title
let divTitle = document.createElement("div");
divTitle.classList.add("book-text", "text-title");
divTitle.textContent = "Test Title from JS";

// Author
let divAuthor = document.createElement("div");
divAuthor.classList.add("book-text", "text-author");
divAuthor.textContent = "Some Person";

// HR separator
let divHR = document.createElement("div");
let eleHR = document.createElement("hr");
divHR.classList.add("book-line");
divHR.appendChild(eleHR);

// Icon: (non-) fiction
let divIconGenre = document.createElement("div");
divIconGenre.classList.add("book-icon", "icon-genre-div");
let imgIconGenre = document.createElement("img");
imgIconGenre.setAttribute("src", "./images/fiction.png");
imgIconGenre.setAttribute("alt", "head of stereotypical alien");
imgIconGenre.classList.add("icon-genre");
imgIconGenre.setAttribute("title", "Fiction");

divIconGenre.appendChild(imgIconGenre);

// Icon: Have (not) read
let divIconRead = document.createElement("div");
divIconRead.classList.add("book-icon", "icon-read-div");
let imgIconRead = document.createElement("img");
imgIconRead.setAttribute("src", "./images/have-read.png");
imgIconRead.setAttribute("alt", "book with checkmark in lower-right");
imgIconRead.classList.add("icon-read");
imgIconRead.setAttribute("title", "Read it!");

divIconRead.appendChild(imgIconRead);

// Icon: Number of pages
let divIconPages = document.createElement("div");
divIconPages.classList.add("book-icon", "icon-pages-div");
divIconPages.textContent = "100 pgs";


// Append children to divMain
divMain.appendChild(divIconRemove);
divMain.appendChild(divTitle);
divMain.appendChild(divAuthor);
divMain.appendChild(divHR);
divMain.appendChild(divIconGenre);
divMain.appendChild(divIconRead);
divMain.appendChild(divIconPages);

console.log(divMain);

let gridLib = document.getElementsByClassName("grid-lib")[0];

gridLib.appendChild(divMain);

// console.log(gridLib);




// Practice: Remove book from library
let allCloseIcons = document.getElementsByClassName("icon-remove");

Array.prototype.forEach.call(allCloseIcons, function(icon){
  icon.addEventListener("click", removeBook);
});

function removeBook(){
  document.querySelector(`div[data-id="${this.dataset.id}"]`).remove();
}
