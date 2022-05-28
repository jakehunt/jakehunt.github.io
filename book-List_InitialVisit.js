// This script runs upon the first visit to the book-list page

var current_page_num = 1;

// Change this to the desired value
var booksPerPage = 5;

// Load all books on current page
bookListLoader(booksPerPage, current_page_num);
// console.log(books)