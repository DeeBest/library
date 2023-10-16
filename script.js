// let myLibrary = [];
// const addBookBtn = document.getElementById('add-book-btn');
// let container = document.getElementById('container');
// let booksContainer = document.getElementById('books-container');

// function Book(title,author,pages,readStatus)  {
//     this.title      = title
//     this.author     = author
//     this.pages      = pages
//     this.readStatus = readStatus
// };

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


// Get the button element
const addBookBtn = document.getElementById('add-book-btn');

// Get the form element
const form = document.querySelector('form');
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

// Add a submit event lister to the form
myForm.addEventListener('submit', () => {
    // hide the form and show the add book button
    myForm.style.display = 'none';
    addBookBtn.style.display = 'block';
});