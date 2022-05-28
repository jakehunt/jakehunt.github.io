function pageArrayBuilder(booksPerPage, total_books) {
	// console.log('Entered into pageArrayBuilder function');
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

	// console.log('Total Pages: ' + total_pages)
	// console.log('booksPerPage: ' + booksPerPage)

	// Build the pages array 
	loop1:
		for (let i = 0; i < total_pages; i++) {
			page_array = [];
			// console.log(page_array)
	loop2:
			for (let j = 0; j < booksPerPage; j++) {
				if (j+i*booksPerPage > total_books - 1) {
					// console.log("i: " + i)
					// console.log("j: " + j)
					break loop2
				}
				else {
					page_array.push(books[j+i*booksPerPage]); 
				}

			}	
			page_array.reverse();
			pages_array.push(page_array)
			// console.log(typeof page_array)
		}

	// console.log(pages_array)
	// console.log('Exiting pageArrayBuilder function');
	return {pages_array, total_pages, booksPerPage};
}

function paginator(booksPerPage, current_page_number) {
	// This function accepts an integer as its only argument and constructs custom page pagination at the bottom of the page depending on how many booksPerPage there are.
	// console.log('Entered into paginator function');

	// console.log('booksPerPage: ' + booksPerPage);
	// console.log('books.length: ' + books.length);

	// Rebuild pages array
	pg_obj = pageArrayBuilder(booksPerPage, books.length);
	let pages_array = pg_obj.pages_array,
    	total_pages = pg_obj.total_pages;

    booksPerpage = pg_obj.booksPerPage;
    // console.log('booksPerPage: ' + booksPerPage)

	// Base html
	pagination_list_elements = [];
	for (i = 1; i < total_pages + 1; i++) {


		// console.log('i= ' + i);

		if (i == current_page_number) {
			new_pagination_list_element = `<li class="page-item"><a class="page-link" style="background-color: var(--color2); color: white;">` + i + `</a></li>`;
		}
		else {
			new_pagination_list_element = `<li class="page-item"><a class="page-link" onclick="bookListLoader(` + booksPerPage + `,`+ i + `)">` + i + `</a></li>`;
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


		if (total_pages > 1) {
			$( "#paginator" ).html( final_pagination_html );
		}
		// console.log('Exiting paginator function');
}

function bookListLoader(booksPerPage, current_page_num) {
	// This function loads deletes all book rows in the list.  
	// Then it loads the books on the newly clicked page and reloads the pagination section at the bottom, with the current page highlighted gray.  
	// On the initial visit to the book-list html page, the current_page_number is set to 1.

	// console.log('Entered into bookListLoader function');
	var nodes = [];

	// Scroll to top
    window.scrollTo(0,0);

    // Build pages the pages array
    pg_obj = pageArrayBuilder(booksPerPage, books.length);
	let pages_array = pg_obj.pages_array,
	    total_pages  = pg_obj.total_pages;

	booksPerpage = pg_obj.booksPerPage;

	// Delete all elements with 'bookRO' AND 'row' classes 
	const bookrows = document.querySelectorAll('.row.bookRO');
	loopbooks:
		for (let i = 0; i < bookrows.length; i++) {
			// if (i == 0) {
			// 	continue loopbooks;
			// }
			bookrows[i].remove();
		}

	// This selects the desired page
	page_array = pages_array[current_page_num - 1];



	for (let i = 0; i < page_array.length; i++) {
		    nodes = document.querySelectorAll('div.bookRO');
		    var firstNode = nodes[0];
		    var lastNode = nodes[nodes.length - 1];

			// DO NOT CHANGE THE TEXT OF <!-- Review HTML Placeholder --> line or beyond, only make edits above this line.  See end of for loop for better understanding of the fragility.
			var book_row_html = `<div class="row bookRO">

						        <div class="col-lg-1 col-md-1 col-sm-1 col-1"></div>

						        <div class="col-lg-10 col-md-10 col-sm-10 col-10 l-remove-top-padding">

						            <div class = "row l-spacer-7px secondary-bg"></div>

						            <div class = "row">
						                <div class = "col-lg-2 col-md-2 col-sm-4 col-4 l-vertical-center">
						                    <img class="img-fluid book-cover-image" src=`+ page_array[i].btu +` alt="`+ page_array[i].title +`Cover Image">
						                </div>

						                <div class = "col-lg-10 col-md-10 col-sm-8 col-8">
						                    <div class="row">
						                        <div class="container-fluid">
						                            <h5 class="l-remove-bottom-margin"><strong>Title: </strong> <i>`+ page_array[i].title +`</i></h5>
						                            <h5 class="l-remove-bottom-margin"><strong>Author: </strong> <i>`+ page_array[i].author +`</i></h5>
						                            <h5 class="l-remove-bottom-margin"><strong>Release Date: </strong> <i>`+ page_array[i].releaseDate +`</i></h5>
						                            <h5 class="l-remove-bottom-margin"><strong>Page Count: </strong> <i>`+ page_array[i].pageCount +`</i></h5>
						                            <h5 class="l-remove-bottom-margin"><strong>I read this in: </strong> <i>`+ page_array[i].whenRead +`</i></h5>
						                            <h5 class="l-remove-bottom-margin"><strong>Rating: </strong>`+ page_array[i].rating +`</h5>
						                        </div>
						                    </div>
						                </div>

						            </div>

						            <div class="row">
						                <div class="col-lg-2 col-md-2 col-sm-3 col-12">
						                    <h5><strong>Summary:</strong></h5>
						                </div>
						                <div class="col-lg-10 col-md-10 col-sm-9 col-12 l-remove-top-padding">
						                    <div class = "container-fluid">                
						                        <p>`+ page_array[i].summary +`</p>
						                    </div>
						                    <!-- Review HTML Button Placeholder -->
						                </div>
						            </div>

						        </div>

						        <div class="bookRO col-lg-1 col-md-1 col-sm-1 col-1"></div>
						    </div>`;

		    // The below code INJECTS the review button into the book row html code, if the 'review' object name has a value other than empty ('')
			if (page_array[i].review !== '') {
				current_book_id = page_array[i].id;
				var bookReviewHTML_Button =    `<div class="container-fluid">
							                        <div class="l-spacer"></div>
							                        <button href="" class="btn btn-primary" onclick="bookReviewPicker(`+ current_book_id +`)"><h6 class="l-remove-bottom-margin"> See 'Review' &#8594;</h6></button>
							                    </div>`

				var search_string = "<!-- Review HTML Button Placeholder -->";
				bookReviewIndex = book_row_html.indexOf(search_string);

				// See the custom string splice method at the top of this script to understand the below method
				book_row_html = book_row_html.splice(bookReviewIndex + search_string.length, 0, bookReviewHTML_Button)
			}		    

		    firstNode.insertAdjacentHTML('beforebegin', book_row_html);
		    

	}
	console.log( "Book List Page " + current_page_num + " is loaded." );

	// Add pagination to the page
	// console.log("booksPerPage: " + booksPerPage);
	paginator(booksPerPage, current_page_num)
	// console.log('Exiting bookListLoader function');
}

function bookReviewPicker(num) {
	// Scroll to top
    window.scrollTo(0,0);

    // Remove pagination
    // const pagination_element = document.querySelectorAll('#paginator')
    document.getElementById("paginator").outerHTML = "";

    var rules = [];
    if (document.styleSheets[1].cssRules)
        rules = document.styleSheets[1].cssRules;
    else if (document.styleSheets[1].rules)
        rules = document.styleSheets[1].rules;

	// console.log(typeof document.styleSheets[0])
	// console.log(rules[0])
    // console.log(rules[1])
    // console.log(rules[2])
    // console.log(rules[3])

    rules[3].style.display = "none";
    $( "#return-to-book-list1" ).load( "projects.html #return-to-book-list", function() {
        console.log( "Load1 (Return to Book List - Button Top) was performed." );
    });
    $( "#return-to-book-list2" ).load( "projects.html #return-to-book-list", function() {
        console.log( "Load2 (Return to Book List - Button Bottom) was performed." );
    });



    // Pick current book
	var current_book = books.find(obj => {
	  return obj.id === num
	})


	// Assign html to bookReviewCode variable
    var bookReviewCode =   `<div class="container-fluid">
						    <div class="row">
						        <div class="col-6 ">
						            <img class="l-float-right img-fluid book-cover-review-image" src=`+ current_book.btu +` alt="`+ current_book.title +` Cover Image">
						        </div>

						        <div class = "col-6 l-vertical-center l-remove-side-padding">
				                    <div class="row ">
				                        <div class="container-fluid">
				                            <h4 class="l-remove-bottom-margin"><strong>Title: </strong> <i>`+ current_book.title +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Author: </strong> <i>`+ current_book.author +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Release Date: </strong> <i>`+ current_book.releaseDate +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Page Count: </strong> <i>`+ current_book.pageCount +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>I read this in: </strong> <i>`+ current_book.whenRead +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Rating: </strong>`+ current_book.rating +`</h4>
				                        </div>
				                    </div>
				                </div>

						    </div>    
						    </div>

						    <!--**** SPACER ROW **************************************************************-->
						    <div class="container-fluid l-page-spacer white-bg"></div>

						    <div class="container-fluid">
						    <div class="row">
						        <div class="col-lg-2 col-1"></div>
						        <div class="col-lg-8 col-10">
						            `+ current_book.review +`
						        </div>
						        <div class="col-lg-2 col-1"></div>
						    </div>

						    <!--**** SPACER ROW **************************************************************-->
						    <div class="container-fluid l-page-spacer-x2 white-bg"></div>    
						    </div>`;

    
    $( '#book_highlighted' ).html(bookReviewCode);
    // console.log(bookReviewCode);
}

// Slicer Code:
	if (!String.prototype.splice) {
	    /**
	     * {JSDoc}
	     *
	     * The splice() method changes the content of a string by removing a range of
	     * characters and/or adding new characters.
	     *
	     * @this {String}
	     * @param {number} start Index at which to start changing the string.
	     * @param {number} delCount An integer indicating the number of old chars to remove.
	     * @param {string} newSubStr The String that is spliced in.
	     * @return {string} A new string with the spliced substring.
	     */
	    String.prototype.splice = function(start, delCount, newSubStr) {
	        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
	    };
	}

	String.prototype.splice = function(idx, rem, str) {
	    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
	};

	// See Example Below:
	// var result = "foo baz".splice(4, 0, "bar ");
	// console.log(result)