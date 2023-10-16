// function addBookToLibrary() {
//     let newBook = new Book (
//         document.getElementById('title').value,
//         document.getElementById('author').value,
//         document.getElementById('pages').value,
//         document.getElementById('readStatus').value,
//     );
//     myLibrary.push(newBook);
//     document.forms[0].reset();
//     for (let i = 0; i < myLibrary.length; i++) {
//         booksContainer.innerHTML += `
//                                     <div class="book-card">
//                                         <p>
//                                             Title: ${myLibrary[i].title}
//                                         </p>
//                                         <p>
//                                             Author: ${myLibrary[i].author}
//                                         </p>
//                                         <p>
//                                             Pages: ${myLibrary[i].pages}
//                                         </p>
//                                         <p>
//                                             Read Status: ${myLibrary[i].readStatus}
//                                         </p>
//                                     </div>
//                               `;
//     }
// };
// addBookBtn.addEventListener('click', () => {
//     if(title.value === '' || author.value === '' || pages.value === 0 || readStatus.value === '') {
//         alert('Please fill up all the fields');
//     } else {
//         addBookToLibrary();
//     }
//   });



//getting the main container
const mainContainer = document.getElementById('container');
//getting books container
const booksContainer = document.getElementById('books-container');
//creating an empty array to save the books
let myLibrary = [];
//getting the add a book button by id
const addBookBtn = document.getElementById('add-book-btn');
// Get the form element
const myForm = document.getElementById('my-form');
// Hide the form initially
myForm.style.display = 'none';
// Add a click event listener to the button
addBookBtn.addEventListener('click', () => {
  // Toggle the visibility of the form and the button
  if (addBookBtn.style.display === 'none') {
    addBookBtn.style.display = 'block';
    myForm.style.display = 'none'
  } else {
    addBookBtn.style.display = 'none';
    myForm.style.display = 'block';
  }
});
//function for creating a new book 
function Book(title,author,pages,readStatus)  {
    this.title      = title
    this.author     = author
    this.pages      = pages
    this.readStatus = readStatus
};
//function to add book to my empty array
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
    // Loop through the myLibrary array and print out each book
    for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
  };
// Add a submit event lister to the form
myForm.addEventListener('submit', (event) => {
    // hide the form and show the add book button
    myForm.style.display = 'none';
    addBookBtn.style.display = 'block';
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the addBookToLibrary function to add the new book to the library
    addBookToLibrary();
    // Reset the form inputs
    myForm.reset();
});
