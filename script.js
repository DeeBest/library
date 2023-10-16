let myLibrary = [];
const addBookBtn = document.getElementById('add-book-btn');
let container = document.getElementById('container');
let booksContainer = document.getElementById('books-container');

function Book(title,author,pages,readStatus)  {
    this.title      = title
    this.author     = author
    this.pages      = pages
    this.readStatus = readStatus
};

function addBookToLibrary() {
    let newBook = new Book (
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('readStatus').value,
    );

    myLibrary.push(newBook);
    document.forms[0].reset();
    for (let i = 0; i < myLibrary.length; i++) {
        booksContainer.innerHTML += `
                                    <div class="book-card">
                                        <p>
                                            Title: ${myLibrary[i].title}
                                        </p>
                                        <p>
                                            Author: ${myLibrary[i].author}
                                        </p>
                                        <p>
                                            Pages: ${myLibrary[i].pages}
                                        </p>
                                        <p>
                                            Read Status: ${myLibrary[i].readStatus}
                                        </p>
                                    </div>
                              `;
    }
};
addBookBtn.addEventListener('click', () => {
    if(title.value === '' || author.value === '' || pages.value === 0 || readStatus.value === '') {

        alert('Please fill up all the fields');
    } else {
        addBookToLibrary();
    }
  });