// Latest Book Picker
var latestBookObject = books[0]; 
var latestLinkObject = links[0];

var aboutPage_LatestBookInfo = `<div class="row">
									<div class="col-lg-1 l-hidden-phone">
					                </div>
					                <div class="col-lg-9">
					                    <h5><strong>Latest Read:</strong></h5>
					                    <h5><i> `+ latestBookObject.title +`</i></h5>
					                </div>
					            </div>

								<div class = "row">
                    				<div class = "col-lg-3 text-center">
				                        <img class="img-fluid book-cover-image" src=`+ latestBookObject.btu +` alt="`+ latestBookObject.title +` Cover Image">
				                    </div>

                    				<div class = "col-lg-8">
                    						<div class="container-fluid">
					                            <h5 class="l-remove-bottom-margin"><strong>Author: </strong> <i>`+ latestBookObject.author +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Release Date: </strong> <i>`+ latestBookObject.releaseDate +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Page Count: </strong> <i>`+ latestBookObject.pageCount +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>I read this in: </strong> <i>`+ latestBookObject.whenRead +`</i></h5>
					                            <h5 class="l-remove-bottom-margin"><strong>Rating: </strong>`+ latestBookObject.rating +`</h5>
					                        </div>
                    				</div>
                    			</div>`;


var aboutPage_LatestLinkInfo = `<div class="row"> 
					                <div class="col-lg-1 l-hidden-phone">
					                </div>
					                <div class="col-lg-9">
					                    <h5><strong>Latest link:</strong></h5>
					                    <h5><a href=`+ latestLinkObject.url +`>`+ latestLinkObject.linkName +`</a></h5>
					                </div>
					            </div>

					            <div class="row"> 
					                <div class="col-lg-1 l-hidden-phone">
					                </div>
					                <div class="col-lg-9">
					                    <h5><u>Summary:</u></h5>
					                    <p id="highlighted-link-summary">`+ latestLinkObject.summary +`</p>
					                </div>
					            </div>`;

$( '#latestBook' ).html(aboutPage_LatestBookInfo);
$( '#latestLink' ).html(aboutPage_LatestLinkInfo);