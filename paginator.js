function pageArrayBuilder(booksPerPage, total_books) {
	var pages_array = [];
	var page_array = [];
	var remainder = NaN;
	var total_pages = NaN;

	// Determine total number of pages
	// Determine how many pages based off of total # of book reviews and desired books per page to be displayed
	if ((total_books % booksPerPage) == 0) {
		total_pages = (total_books - (total_books % booksPerPage))/booksPerPage
		remainder = 0;
	}
	else {
		total_pages = (total_books - (total_books % booksPerPage))/booksPerPage + 1
		remainder = 1;
	}

	// If booksPerPage is greater than the total number of books in the 'books' array in books.js, then set the booksPerPage to the number of total books.
	if (booksPerPage > total_books) {
		booksPerPage = total_books;
	}


	// Build the pages array 
	loop1:
		for (let i = 0; i < total_pages; i++) {
			page_array = [];
			// console.log(page_array)
	loop2:
			for (let j = 0; j < booksPerPage; j++) {
				if (j+i*3 > total_books - 1) {
					// console.log("i: " + i)
					// console.log("j: " + j)
					break loop2
				}
				else {
					page_array.push(books[j+i*3]); 
				}

			}	
			page_array.reverse();
			pages_array.push(page_array)
			// console.log(typeof page_array)
		}
	return {pages_array, total_pages};
}

function paginator(total_pages, current_page_number) {
// This function accepts an integer as its only argument and constructs custom page pagination at the bottom of the page depending on how many booksPerPage there are.


// Rebuild pages array
pages_array = pageArrayBuilder(booksPerPage, total_books);


// Base html
pagination_list_elements = [];
for (i = 1; i < total_pages + 1; i++) {

	

	// console.log('i= ' + i);

	if (i == current_page_number) {
		new_pagination_list_element = `<li class="page-item"><a class="page-link" style="background-color: var(--color2); color: white;" onclick="bookListLoader(`+ i + `, pages_array)">` + i + `</a></li>`;
	}
	else {
		new_pagination_list_element = `<li class="page-item"><a class="page-link" onclick="bookListLoader(`+ i + `, pages_array)">` + i + `</a></li>`;
	}

 	pagination_list_elements = pagination_list_elements + new_pagination_list_element;

    // `<li class="page-item"><a class="page-link" href="#">1</a></li>
    // <li class="page-item"><a class="page-link" href="#">2</a></li>
    // <li class="page-item"><a class="page-link" href="#">3</a></li>`


}

	pagination_html1 =    `<!-- Pagination div  ***************************************************************************-->
	    <nav aria-label="Page navigation example" id="paginator">
	      <ul class="pagination pagination-lg justify-content-center">
	<!--         <li class="page-item">
	          <a class="page-link" href="#" aria-label="Previous">
	            <span aria-hidden="true">&laquo;</span>
	            <span class="sr-only">Previous</span>
	          </a>
	        </li> -->`




	pagination_html2 = `<!--         <li class="page-item">
	          <a class="page-link" href="#" aria-label="Next">
	            <span aria-hidden="true">&raquo;</span>
	            <span class="sr-only">Next</span>
	          </a>
	        </li> -->
	      </ul>
	    </nav>`


	final_pagination_html = pagination_html1 + pagination_list_elements + pagination_html2;
	$( "#paginator" ).html( final_pagination_html );
}