// Book Picker Code
// Populate book skeleton code

var nodes = [];
var limit = books.length; // Currently optimized for 2 cards per row
for (let i = 0; i < limit; i++) {
    nodes = document.querySelectorAll('div.bookRO');
    var firstNode = nodes[0];
    var lastNode = nodes[nodes.length - 1];

    if (books[i].review == '') {
    	var book_row_html = `<div class="row bookRO">

					        <div class="col-lg-1 col-md-1 col-sm-1 col-1"></div>

					        <div class="col-lg-10 col-md-10 col-sm-10 col-10 l-remove-top-padding">

					            <div class = "row l-spacer-7px secondary-bg"></div>

					            <div class = "row">
					                <div class = "col-lg-2 col-md-2 col-sm-4 col-4 l-vertical-center">
					                    <img class="img-fluid book-cover-image" src=`+ books[i].btu +` alt="`+ books[i].title +`Cover Image">
					                </div>

					                <div class = "col-lg-10 col-md-10 col-sm-8 col-8">
					                    <div class="row">
					                        <div class="container-fluid">
					                            <h5 class="l-remove-bottom-margin"><strong>Title: </strong> <i>`+ books[i].title +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Author: </strong> <i>`+ books[i].author +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Release Date: </strong> <i>`+ books[i].releaseDate +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Page Count: </strong> <i>`+ books[i].pageCount +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>I read this in: </strong> <i>`+ books[i].whenRead +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Rating: </strong>`+ books[i].rating +`</h5>
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
					                        <p>`+ books[i].summary +`</p>
					                    </div>
					                </div>
					            </div>

					        </div>

					        <div class="bookRO col-lg-1 col-md-1 col-sm-1 col-1"></div>
					    </div>`;
    }
    else {
	var book_row_html = `<div class="row bookRO">

					        <div class="col-lg-1 col-md-1 col-sm-1 col-1"></div>

					        <div class="col-lg-10 col-md-10 col-sm-10 col-10 l-remove-top-padding">

					            <div class = "row l-spacer-7px secondary-bg"></div>

					            <div class = "row">
					                <div class = "col-lg-2 col-md-2 col-sm-4 col-4 l-vertical-center">
					                    <img class="img-fluid book-cover-image" src=`+ books[i].btu +` alt="`+ books[i].title +`Cover Image">
					                </div>

					                <div class = "col-lg-10 col-md-10 col-sm-8 col-8">
					                    <div class="row">
					                        <div class="container-fluid">
					                            <h5 class="l-remove-bottom-margin"><strong>Title: </strong> <i>`+ books[i].title +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Author: </strong> <i>`+ books[i].author +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Release Date: </strong> <i>`+ books[i].releaseDate +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Page Count: </strong> <i>`+ books[i].pageCount +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>I read this in: </strong> <i>`+ books[i].whenRead +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Rating: </strong>`+ books[i].rating +`</h5>
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
					                        <p>`+ books[i].summary +`</p>
					                    </div>
					                    <div class="container-fluid">
					                        <div class="l-spacer"></div>
					                        <button href="" class="btn btn-primary" onclick="bookPicker(`+ i +`)"><h6 class="l-remove-bottom-margin"> See 'Review' &#8594;</h6></button>
					                    </div>
					                </div>
					            </div>

					        </div>

					        <div class="bookRO col-lg-1 col-md-1 col-sm-1 col-1"></div>
					    </div>`;
	}

    firstNode.insertAdjacentHTML('beforebegin', book_row_html);
}

function bookPicker(num) {
    var rules = [];
    if (document.styleSheets[1].cssRules)
        rules = document.styleSheets[1].cssRules;
    else if (document.styleSheets[1].rules)
        rules = document.styleSheets[1].rules;

    rules[3].style.display = "none";
    $( "#return-to-book-list" ).load( "projects.html #return-to-book-list", function() {
        console.log( "Load was performed." );
    });

    var bookReviewCode =   `<div class="container-fluid">
						    <div class="row">
						        <div class="col-6 ">
						            <img class="l-float-right img-fluid book-cover-review-image" src=`+ window.books[num].btu +` alt="`+ window.books[num].title +` Cover Image">
						        </div>

						        <div class = "col-6 l-vertical-center l-remove-side-padding">
				                    <div class="row ">
				                        <div class="container-fluid">
				                            <h4 class="l-remove-bottom-margin"><strong>Title: </strong> <i>`+ books[num].title +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Author: </strong> <i>`+ books[num].author +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Release Date: </strong> <i>`+ books[num].releaseDate +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Page Count: </strong> <i>`+ books[num].pageCount +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>I read this in: </strong> <i>`+ books[num].whenRead +`</i></h4>
				                            <h4 class="l-remove-bottom-margin"><strong>Rating: </strong>`+ books[num].rating +`</h4>
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
						            `+ window.books[num].review +`
						        </div>
						        <div class="col-lg-2 col-1"></div>
						    </div>

						    <!--**** SPACER ROW **************************************************************-->
						    <div class="container-fluid l-page-spacer-x2 white-bg"></div>    
						    </div>`


    $( '#book_highlighted' ).html(bookReviewCode);
    console.log(bookReviewCode);
    window.scrollTo(0,0);
}
