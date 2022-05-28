// Link List Functions
function pageArrayBuilder(linksPerPage, total_links) {
	// console.log('Entered into pageArrayBuilder function');
	var pages_array = [];
	var page_array = [];
	var remainder = NaN;
	var total_pages = NaN;

	// Determine total number of pages
	// Determine how many pages based off of total # of book reviews and desired books per page to be displayed
	if ((total_links % linksPerPage) == 0) {
		total_pages = (total_links - (total_links % linksPerPage))/linksPerPage
		remainder = 0;
	}
	else {
		total_pages = (total_links - (total_links % linksPerPage))/linksPerPage + 1
		remainder = 1;
	}

	// If linksPerPage is greater than the total number of books in the 'books' array in books.js, then set the linksPerPage to the number of total books.
	if (linksPerPage > total_links) {
		linksPerPage = total_links;
	}

	// console.log('Total Pages: ' + total_pages)
	// console.log('linksPerPage: ' + linksPerPage)

	// Build the pages array 
	loop1:
		for (let i = 0; i < total_pages; i++) {
			page_array = [];
			// console.log(page_array)
	loop2:
			for (let j = 0; j < linksPerPage; j++) {
				if (j+i*linksPerPage > total_links - 1) {
					// console.log("i: " + i)
					// console.log("j: " + j)
					break loop2
				}
				else {
					page_array.push(links[j+i*linksPerPage]); 
				}

			}	
			page_array.reverse();
			pages_array.push(page_array)
			// console.log(typeof page_array)
		}

	// console.log(pages_array)
	// console.log('Exiting pageArrayBuilder function');
	// console.log("")
	return {pages_array, total_pages, linksPerPage};
}

function paginator(linksPerPage, current_page_number) {
	// This function accepts an integer as its only argument and constructs custom page pagination at the bottom of the page depending on how many booksPerPage there are.
	// console.log('Entered into paginator function');

	// console.log('booksPerPage: ' + booksPerPage);
	// console.log('books.length: ' + books.length);

	// Rebuild pages array
	pg_obj = pageArrayBuilder(linksPerPage, links.length);
	let pages_array = pg_obj.pages_array,
    	total_pages = pg_obj.total_pages;

    linksPerPage = pg_obj.linksPerPage;
    // console.log('linksPerPage: ' + linksPerPage)

	// Base html
	pagination_list_elements = [];
	for (i = 1; i < total_pages + 1; i++) {


		// console.log('i= ' + i);

		if (i == current_page_number) {
			new_pagination_list_element = `<li class="page-item"><a class="page-link" style="background-color: var(--color2); color: white;">` + i + `</a></li>`;
		}
		else {
			new_pagination_list_element = `<li class="page-item"><a class="page-link" onclick="linkListLoader(` + linksPerPage + `,`+ i + `)">` + i + `</a></li>`;
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
	// console.log("")
}

function linkListLoader(linksPerPage, current_page_num) {
	// This function loads deletes all book rows in the list.  
	// Then it loads the books on the newly clicked page and reloads the pagination section at the bottom, with the current page highlighted gray.  
	// On the initial visit to the book-list html page, the current_page_number is set to 1.

	// console.log('Entered into linkListLoader function');
	var nodes = [];

	// Scroll to top
    window.scrollTo(0,0);

    // Build pages the pages array
    pg_obj = pageArrayBuilder(linksPerPage, links.length);
	let pages_array = pg_obj.pages_array,
	    total_pages  = pg_obj.total_pages;

	linksPerpage = pg_obj.linksPerPage;

	// Delete all elements with 'bookRO' AND 'row' classes 
	const linkrows = document.querySelectorAll('.row.linkRO');
	loopbooks:
		for (let i = 0; i < linkrows.length; i++) {
			// if (i == 0) {
			// 	continue loopbooks;
			// }
			linkrows[i].remove();
		}

	// This selects the desired page
	page_array = pages_array[current_page_num - 1];

	// console.log(page_array)

	var link_row_html = '';
	var current_link = NaN;
	for (let i = 0; i < page_array.length; i++) {

		// Pick current link
		num = page_array[i].id;
		current_link = links.find(obj => {
		  return obj.id === num
		})

		// console.log('Current Link: ' + i)
		// console.log(current_link)

	    nodes = document.querySelectorAll('div.linkRO');
	    var firstNode = nodes[0];
	    var lastNode = nodes[nodes.length - 1];

		link_row_html = `<div class="row linkRO">

				        <div class="col-lg-3 col-md-2 col-sm-2 col-1"></div>

				        <div class="col-lg-6 col-md-8 col-sm-8 col-10 l-remove-top-padding">

				            <div class = "row l-spacer-7px secondary-bg"></div>
				            <div class = "row l-spacer white-bg"></div>

				            <div class="row">
				            	<h4><a class = "text-center" href=`+ current_link.url +`>`+ current_link.linkName +` &#8594;</a></h4>
				            </div>

				            <div class="row">
				            	<h5><u>Summary:</u></h5>
				            </div>

				            <div class="row">
				            	<p>`+ current_link.summary +`</p>
				            </div>

				        </div>

				        <div class="bookRO col-lg-3 col-md-2 col-sm-2 col-1"></div>
				    </div>`;

		firstNode.insertAdjacentHTML('beforebegin', link_row_html);
	}
	console.log( "Link List Page " + current_page_num + " is loaded." );

	// Add pagination to the page
	// console.log("booksPerPage: " + booksPerPage);
	paginator(linksPerPage, current_page_num)
	// console.log('Exiting linkListLoader function');
	// console.log("")
}