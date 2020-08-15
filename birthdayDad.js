var sketchProc = function(processingInstance) {
     with (processingInstance) {
        var navHeight = $(".navbar").outerHeight(true);
        var windowW = $(window).width();
        var windowH = $(window).height();
        var bottomSpacerH = $("#bottomSpacerStatic").outerHeight(true);
        

        // Note: jQuery does not have clientWidth or clientWidth() (and clientHeight...) attributes
        // Determine ScrollBar Width; Note the CSS class "scrollbar-measure" in the style.css file
			// Create the measurement node
			var scrollDiv = document.createElement("div");
			scrollDiv.className = "scrollbar-measure";
			document.body.appendChild(scrollDiv);

			// Get the scrollbar width
			var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

			// Delete the DIV 
			document.body.removeChild(scrollDiv);

        	console.log("Scrollbar Width: " + scrollbarWidth + " px")

        // Rename the window width to account for the scrollbarWidth and the window height to account for the navbar and bottom spacer
        //windowW = windowW - scrollbarWidth;
        windowH = windowH - navHeight - bottomSpacerH;
        size(windowW, windowH); // Critical to resizing the canvas to the window size
        console.log("Window Width Without Scrollbar: " + windowW)
        console.log("Window Width: " + $(window).width())

        frameRate(30); 
        
         // ProgramCodeGoesHere

			translate(windowW/2, (windowH)/2); // Center the drawing on the middle of the webpage
			background(0) // Sets the initial background color (black)
			
			// Font Stuff
			var f35 = createFont("monospace");
			textFont(f35, 120);
			textAlign(CENTER, CENTER);

			// This code makes a trippy animation 
			{//Set Variables
			var r = 20;
			var pi = 3.14159;
			var x1 = 0;
			var y1 = 0;
			var x2 = 0;
			var y2 = 0;
			var x3 = 0;
			var y3 = 0;
			var theta = 0;
			var theta2 = 0;
			var theta3 = 0;
			}
			background(0, 0, 0);
			noStroke();
			var circlebounce = function(x, y, r, triangleL) {
			    theta = degrees(random(0, 2*pi));
			    x1 = r*cos(theta);
			    y1 = r*sin(theta);
			    theta2 = theta + degrees(random(0.5, 1.5));
			    x2 = r*cos(theta2);
			    y2 = r*sin(theta2);
			    theta3 = abs(theta + theta2)/2;
			    x3 = (r+triangleL)*cos(theta3);
			    y3 = (r+triangleL)*sin(theta3);
			    fill(random(0, 255), random(0, 255), random(0, 255));
			    triangle(x1, y1, x2, y2, x3, y3);
			    fill(255, 255, 255);
			    ellipse(x,y,2*r,2*r); 
			};
			text('Happy Birthday Dad!!', 0, 0)
			draw = function() {
			    frameRate(20);
			    //Hurt your eyes fast
			    //background(random(0, 255), random(0, 255), random(0, 255));
			    
			    
			    circlebounce(0, 0, 1, 800);
			    r += 1;
			    if (r > 60) {
			        r = 20;
			        //background(random(0, 255), random(0, 255), random(0, 255));
			    }
			};
		}		
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("canvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 