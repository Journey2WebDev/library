let myLibrary = [];
let bookCount = 0;

// Book object generator
function Book(title, author, genre, numPages, haveRead) {
  this.title = title
  this.author = author
  this.genre = genre
  this.numPages = numPages
  this.haveRead = haveRead
}

// Button: 'Click here to start!' => make form appear
let showFormBtn = document.getElementById("btn-createForm");
showFormBtn.addEventListener("click", showForm);

function showForm(){
  document.getElementById("main-form").style.visibility = "visible";
  document.getElementById("main-form").style.opacity = "1";
}

// Button: 'Create Book' => Add book to RHS
let createBookBtn = document.getElementById("btn-createBook");
createBookBtn.addEventListener("click", checkFormValidation);

function checkFormValidation(event){
  // Prevents page from refreshing when form submits (which erases any book that just appeared in library...)
  event.preventDefault();

  let formIsValid = true;
  let bookTitle = document.getElementById("bookTitle");
  let bookAuthor = document.getElementById("bookAuthor");
  let genreF = document.getElementById("genreF");
  let numPages = document.getElementById("numPages");
  let haveReadY = document.getElementById("haveReadY");

  if(bookTitle.validity.tooShort | bookTitle.validity.tooLong | bookTitle.value == ""){
    bookTitle.reportValidity();
    formIsValid = false;
  }else if(bookAuthor.validity.tooShort | bookAuthor.validity.tooLong | bookAuthor.value == ""){
    bookAuthor.reportValidity();
    formIsValid = false;
  }else if(!genreF.validity.valid){
    genreF.reportValidity();
    formIsValid = false;
  }else if(!numPages.validity.valid){
    numPages.reportValidity();
    formIsValid = false;
  }else if(!haveReadY.validity.valid){
    haveReadY.reportValidity();
    formIsValid = false;
  }

  if(formIsValid){
    updateLibrary();
  }

}

function updateLibrary(){
  // Increment bookCount; to be used in data-id attribute
  bookCount++

  // Add form data to Book object instance
  formDataToBookInstance();

  // This draws DOM elements for book image on RHS, using values from obj instance
  drawBook(myLibrary[myLibrary.length - 1]);
}

function formDataToBookInstance(){
  newBook = new Book();

  newBook.title = document.getElementById("bookTitle").value;
  newBook.author = document.getElementById("bookAuthor").value;
  document.getElementById("genreF").checked === true ? newBook.genre = document.getElementById("genreF").value : newBook.genre = document.getElementById("genreNF").value;
  newBook.numPages = document.getElementById("numPages").value;
  document.getElementById("haveReadY").checked === true ? newBook.haveRead = document.getElementById("haveReadY").value : newBook.haveRead = document.getElementById("haveReadN").value;
  newBook.index = bookCount;

  myLibrary.push(newBook);
}

function drawBook(newBook){
  let divMain = document.createElement("div");
  divMain.classList.add("lib-book");
  divMain.setAttribute("data-id", "book" + newBook.index);
  
  // Icon: Remove book
  let divIconRemove = document.createElement("div");
  divIconRemove.classList.add("book-icon", "icon-remove-div")
  
  let imgIconRemove = document.createElement("img");
  imgIconRemove.setAttribute("src", "./images/close-circle-black.png");
  imgIconRemove.setAttribute("alt", "black circle with white x");
  imgIconRemove.classList.add("icon-remove");
  imgIconRemove.setAttribute("data-id", "book" + newBook.index);
  imgIconRemove.setAttribute("title", "Remove from library");
  imgIconRemove.addEventListener("click", removeBook);

  divIconRemove.appendChild(imgIconRemove);
  
  // Title
  let divTitle = document.createElement("div");
  divTitle.classList.add("book-text", "text-title");
  divTitle.textContent = newBook.title;
  
  // Author
  let divAuthor = document.createElement("div");
  divAuthor.classList.add("book-text", "text-author");
  divAuthor.textContent = newBook.author;
  
  // HR separator
  let divHR = document.createElement("div");
  let eleHR = document.createElement("hr");
  divHR.classList.add("book-line");
  divHR.appendChild(eleHR);
  
  // Icon: Genre; fiction / nonfiction
  let divIconGenre = document.createElement("div");
  divIconGenre.classList.add("book-icon", "icon-genre-div");
  let imgIconGenre = document.createElement("img");
  imgIconGenre.setAttribute("src", "./images/" + newBook.genre + ".png");
  imgIconGenre.setAttribute("alt", "head of stereotypical alien");
  imgIconGenre.classList.add("icon-genre");
  imgIconGenre.setAttribute("title", "Fiction");
  divIconGenre.appendChild(imgIconGenre);
  
  // Icon: Have (not) read
  let divIconRead = document.createElement("div");
  divIconRead.classList.add("book-icon", "icon-read-div");
  let imgIconRead = document.createElement("img");
  imgIconRead.setAttribute("src", "./images/" + newBook.haveRead + ".png");
  imgIconRead.setAttribute("alt", "book with checkmark in lower-right");
  imgIconRead.classList.add("icon-read");
  imgIconRead.setAttribute("title", "Read it!");
  imgIconRead.addEventListener("click", toggleReadIcon);
  divIconRead.appendChild(imgIconRead);
  
  // Icon: Number of pages
  let divIconPages = document.createElement("div");
  divIconPages.classList.add("book-icon", "icon-pages-div");
  if(newBook.numPages <= 9999){
    divIconPages.textContent = newBook.numPages + " pgs";
  }else{
    divIconPages.textContent = "10,000+ pgs";
  }
  
  // Append children to divMain
  divMain.appendChild(divIconRemove);
  divMain.appendChild(divTitle);
  divMain.appendChild(divAuthor);
  divMain.appendChild(divHR);
  divMain.appendChild(divIconGenre);
  divMain.appendChild(divIconRead);
  divMain.appendChild(divIconPages);
   
  let gridLib = document.getElementsByClassName("grid-lib")[0];
  gridLib.appendChild(divMain);
}

function removeBook(){
  document.querySelector(`div[data-id="${this.dataset.id}"]`).remove();
}

function toggleReadIcon(){
  let pattern = /have-read.png$/;

  if(this.src.search(pattern) >= 0){
    this.src = "./images/have-not-read.png";
  } else {
    this.src = "./images/have-read.png";
  }
}
