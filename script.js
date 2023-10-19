const mainContainer = document.getElementById('container');
const booksContainer = document.getElementById('books-container');
let myLibrary = [];
const myForm = document.getElementById('my-form');

const addBookBtn = document.getElementById('add-book-btn');
      addBookBtn.addEventListener('click', () => {
  if (myForm.style.display === 'none') {
    myForm.style.display = 'block';
    //
      myForm.ATTRIBUTE_NODE.classList.add('active');
    //
    addBookBtn.style.display = 'none';
    booksContainer.style.display = 'none';
  } else {
    addBookBtn.style.display = 'block';
    myForm.style.display = 'none';
    booksContainer.style.display = 'grid';
  }
});
   // Get the close form button element
const closeFormBtn = document.getElementById('close-form-btn');
      closeFormBtn.addEventListener('click', () => {
      myForm.style.display = 'none';
      addBookBtn.style.display = 'block';
      booksContainer.style.display = 'grid';
});

//function for creating a new book 
function Book(title,author,pages,readStatus)  {
    this.title      = title
    this.author     = author
    this.pages      = pages
    this.readStatus = readStatus
};

function displayLibrary() {
    // Check if the length of the myLibrary array is greater than 0
    if (myLibrary.length > 0) {
      booksContainer.style.display = 'grid';
    } else {
      booksContainer.style.display = 'none';
    }
    // Clear the books container
    booksContainer.innerHTML = '';
    // Loop through the myLibrary array and create a new HTML element for each book
    for (let i = 0; i < myLibrary.length; i++) {
      // Create a new book element
      const bookElement = document.createElement('div');
            bookElement.classList.add('book');
      // Create a new title element
      const titleElement = document.createElement('p');
            titleElement.classList.add('titleElement');
            titleElement.textContent = 'Book' + ' Name: ' + myLibrary[i].title;
            bookElement.appendChild(titleElement);
      // Create a new author element
      const authorElement = document.createElement('p');
            authorElement.textContent = 'Author: ' + myLibrary[i].author;
            bookElement.appendChild(authorElement);
      // Create a new pages element
      const pagesElement = document.createElement('p');
            pagesElement.textContent = 'Pages: ' + myLibrary[i].pages;
            bookElement.appendChild(pagesElement);
      // Create a new status element
      const statusElement = document.createElement('p');
            statusElement.textContent = 'Status: ' + myLibrary[i].readStatus;
            bookElement.appendChild(statusElement);
      //Creating a button that will toggle the book read status
      const statusButton = document.createElement('button');
            statusButton.classList.add('book-btn');
            statusButton.textContent = 'Change read status';
      //adding event listener to the read status button
            statusButton.addEventListener('click', () => {
                if (bookElement.readStatus === 'Read') {
                    bookElement.readStatus = 'Unread';
                } else {
                        bookElement.readStatus = 'Read';
                }
        statusElement.textContent = `Status: ${bookElement.readStatus}`;
      }); 
      //adding the status button to the book element
      bookElement.appendChild(statusButton);
      // Create a new delete button element
        const deleteButtonElement = document.createElement('button');
              deleteButtonElement.classList.add('book-btn');
              deleteButtonElement.textContent = 'Delete';
              deleteButtonElement.addEventListener('click', () => {
        // Remove the book from the library array
        myLibrary.splice(i, 1);
        // Call the displayLibrary function to update the DOM
        displayLibrary();
      });
      bookElement.appendChild(deleteButtonElement);
      // Add the book element to the books container
      booksContainer.appendChild(bookElement);
    }
    addBookBtn.style.display = 'block';
    myForm.reset();
  }

function addBookToLibrary() {
    // Get the values of the user inputs
    const title = document.getElementById('book-name').value;
    const author = document.getElementById('author-name').value;
    const pages = document.getElementById('book-pages').value;
    const readStatus = document.getElementById('read-status').checked ? 'read' : 'unread';
    // Create a new book object
    const newBook = new Book(title, author, pages, readStatus);  
    // Add the book object to the library array
    myLibrary.push(newBook);
    // Call the displayLibrary function to display the library
    displayLibrary();
  }

// Add a submit event listener to the form
myForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Check whether the form is valid
  if (myForm.checkValidity()) {
    // Call the addBookToLibrary function to add the new book to the library
    addBookToLibrary();
    // Call the displayLibrary function to display the library
    displayLibrary();
    // Reset the form inputs
    myForm.reset();
    // Hide the form and show the add book button
    myForm.style.display = 'none';
    addBookBtn.style.display = 'block';
    booksContainer.style.display = 'grid';
  } else {
    // Display an error message to the user
    alert('Please fill out all the required fields.');
  }
});