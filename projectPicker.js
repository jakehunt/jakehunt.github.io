// Project Picker Code
function Project(name, id, ctu) {
        this.name = name; // Project Name that appears at the bottom of each card
        this.id = id; // Project id used to access code from the projects.html page
        this.cardThumbnailUrl = ctu; // URL used to access thumbnail image
    }

// ********************************************************************************
// ********************************************************************************
//  UPDATE THIS SECTION WHEN ADDING A PROJECT
//
// 2 STEPS
//
// STEP 0: Have a good project worth sharing
// STEP 1: Create project html code section in the projects.html file.  Determine what format you want by looking at existing project formats.  (SOLIDWORKS VIOLIN FORMAT IS SUPER EASY)
// STEP 1.5: If you want to upload any pictures, make sure to upload pictures to tumblr and grab their urls.
// STEP 2: Create new project variable 'p3', 'p4', 'p5', etc...

// Format:
// const p# = new Project([Project Card Display Name], 
//                        [Project file HTML ID], 
//                        [Project Card Thumbnail URL])

// Project Card Variables
const p0 = new Project("Solidworks Violin", 
                       "#solidworks-violin-project", 
                       "https://66.media.tumblr.com/10b845a5dab45184ee6985ce802e4aa0/8cb78446d64dc744-89/s640x960/909eedb8cc0ade87a0b63796de9411c11b2f03f1.jpg");
const p1 = new Project("Electrostatic Physics using JS", 
                       "#physics-project", 
                       "https://66.media.tumblr.com/ddf7b81eb7fab0db8d7b42671c9ba44e/2e81488abaf366af-a2/s640x960/549d064fbb429e6184d03622bacee29671b34a4c.jpg");
const p2 = new Project("This Website :)",
                       "#website-project", 
                       "https://66.media.tumblr.com/a1b58718b70d9abd9034bc1d6d928b03/b96289c3768629c2-bb/s1280x1920/2c7279200d536a899a5146dbda2be3d30a7c0805.jpg");
const p3 = new Project("Custom Cutting Board",
                       "#cutting-board-project", 
                       "https://66.media.tumblr.com/998bcfcae5bc6c9cba56de3eaf748bbe/ed1a9c7aa4105202-32/s1280x1920/de952cb3576a4d32a8f9f07d54f090eba8a29d40.jpg");
const p4 = new Project("CharlieClock",
                       "#charlieplex", 
                       "https://64.media.tumblr.com/af9b9c8a649b427f39112e3676fdf2b1/d21f68c967606051-ae/s640x960/c481b77a9252328176ddade801ae81ce7359ab84.jpg");

var projects = [p0, p4, p2, p3, p1]; // Projects array
// ********************************************************************************
// ********************************************************************************

// Card Holder Skeleton HTML (2 cards per row)
// Class 'projectRO' is JUST for selecting and inserting project rows in the next for loop
var card_Holder_html = '<div class="container-fluid projectRO">\
                        <div class="row project-row">\
\
                            <div class="P-CARD col-md-6 d-flex justify-content-center"></div>\
                            <div class="P-CARD col-md-6 d-flex justify-content-center"></div>\
\
                        </div>  \
                        </div>';


// This loop populates the Project Card Skeleton code
var nodes = [];
var limit = Math.ceil(projects.length/2); // Currently optimized for 2 cards per row
for (let i = 0; i < limit; i++) {
    nodes = document.querySelectorAll('div.projectRO');
    var lastNode = nodes[nodes.length - 1];
    lastNode.insertAdjacentHTML('afterend', card_Holder_html);
}


// This loop populates the project card info
for (let i = 0; i < projects.length; i++) {
    var p_nodes = document.querySelectorAll('div.P-CARD');

    // This is the Project Card HTML Code
    var cardHTML = `<div class="project-card card shadow" id="p`+ i +`"> 
                        <div class=inner>
                            <img class=card-img-top 
                                 src=` + projects[i].cardThumbnailUrl + ` 
                                 alt=` + projects[i].name + `>
                            <button href="" class= "btn btn-primary" onclick="projectPicker(` + (i+1) +`)">See Project</button>
                        </div>
                        
                        <h4 class= "card-title text-center"> ` + projects[i].name + `</h4>
                    </div>`;

    // Last but not least use Jquery to populate each card with their html
    $( p_nodes[i] ).html(cardHTML);
}

// This function runs when the user selects the See Project Button.  
// No new webpages are loaded.  All project cards become hidden and the respective project "page" is loaded.  It's not actually a new page, but rather just new information now loaded and shown.
function projectPicker(num) {
    var projectID = window.projects[num-1].id;

    var rules = [];
    if (document.styleSheets[1].cssRules)
        rules = document.styleSheets[1].cssRules;
    else if (document.styleSheets[1].rules)
        rules = document.styleSheets[1].rules;
    // console.log(rules);

    if (projectID == "#physics-project")
        window.location.href = "physicsProject.html"; 
    else 
        loadProjectCode(projectID, rules);
}


function loadProjectCode(projectID, rules) {
    rules[2].style.display = "none";
    $( "#return-to-list" ).load( "projects.html #return-to-list", function() {
        console.log( "Load was performed." );
    });

    $( "#project-highlighted" ).load( "projects.html " + projectID, function() {
        console.log( "Load was performed." );
        console.log("projects.html " + projectID);
        console.log(rules[2].style)
    });
}

