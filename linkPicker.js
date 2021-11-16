// Link Picker
// Book Picker Code
// Populate book skeleton code

var nodes = [];
var limit = links.length; // Currently optimized for 2 cards per row
for (let i = 0; i < limit; i++) {
    nodes = document.querySelectorAll('div.linkRO');
    var firstNode = nodes[0];
    var lastNode = nodes[nodes.length - 1];
	var link_row_html = `<div class="row linkRO">

					        <div class="col-lg-3 col-md-2 col-sm-2 col-1"></div>

					        <div class="col-lg-6 col-md-8 col-sm-8 col-10 l-remove-top-padding">

					            <div class = "row l-spacer-7px secondary-bg"></div>
					            <div class = "row l-spacer white-bg"></div>

					            <div class="row">
					            	<h4><a class = "text-center" href=`+ links[i].url +`>`+ links[i].linkName +` &#8594;</a></h4>
					            </div>

					            <div class="row">
					            	<h5><u>Summary:</u></h5>
					            </div>

					            <div class="row">
					            	<p>`+ links[i].summary +`</p>
					            </div>

					        </div>

					        <div class="bookRO col-lg-3 col-md-2 col-sm-2 col-1"></div>
					    </div>`;

    firstNode.insertAdjacentHTML('beforebegin', link_row_html);
}


