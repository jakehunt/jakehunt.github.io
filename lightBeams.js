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
        windowW = windowW - scrollbarWidth;
        windowH = windowH - navHeight - bottomSpacerH;
        size(windowW, windowH); // Critical to resizing the canvas to the window size
        console.log("Window Width Without Scrollbar: " + windowW)


        frameRate(30); 
        
         // ProgramCodeGoesHere
         // Circle Code
         	var myArray = [-1, 1];
	         	var randInd = Math.floor(Math.random() * myArray.length);
	         	var C = myArray[randInd];
	         	//console.log(myArray.length);

         	// Variables
         	var innerSteps = 25; // Decrease this value to increase inner endpoint movement Default: 25
	       	var spinSpeed = C*0.05; //Increase this value to increase spin speed; Default: 0.05
         	var numSteps = 50; // Decrease this value to increase color speed Default: 50
         	var lineWidth = 2; //In Pixels
         	var r = height/2 - 1/50*height - navHeight; // Radius of circle being drawn
			// var r = width; // Radius of circle being drawn


			translate(windowW/2, (windowH)/2); // Center the drawing on the middle of the webpage
			background(0) // Sets the initial background color (black)
			
			var x = 0;	//Initialize outer x position 
			var y = 0;  //Initialize outer y position
			var xs = width/2; //Initialize inner x position
			var ys = 0; //initialize inner y position

			var temp = Math.random();
			var randInd2 = Math.floor(Math.random() * myArray.length);
			var k = myArray[randInd2];
			if (temp > 0.5) {
				xs = k*width/2;
				ys = k*Math.floor(Math.random() * height/2);
			}
			else {
				xs = k*Math.floor(Math.random() * width/2);
				ys = k*height/2;
			}


			
			var xe = random(-200, 200);
			var ye = random(-200, 200);
			var xstep = (xe - xs)/innerSteps;
			var ystep = (ye - ys)/innerSteps;
			var innerStepTemp = innerSteps;
			var theta = 0;
			var rInner = 1;


			strokeWeight(lineWidth); //Line Stroke Width in Pixels
			var rand11 = random(0, 255);
			var rand12 = random(0, 255);
			var rand13 = random(0, 255);
			var randC1 = color(rand11, rand12, rand13); //Establish initial random color for the line
			var rand21 = random(0, 255);
			var rand22 = random(0, 255);
			var rand23 = random(0, 255);
			var randC2 = color(rand21, rand22, rand23); //Establish initial random color for the line

			//Map the progression from one color to the next
			
			var diff1 = rand21 - rand11;
			var diff2 = rand22 - rand12;
			var diff3 = rand23 - rand13;
			var step1 = diff1/numSteps;
			var step2 = diff2/numSteps;
			var step3 = diff3/numSteps;
			var step = numSteps;

			// Font Stuff
			var f35 = createFont("monospace");
			textFont(f35, 80);
			textAlign(CENTER, CENTER);

			draw = function() {
			    frameRate(25); // 
			    //background(0, 0, 0);
			    stroke(randC1); //Set stroke for the line
			    line(xs,ys, r*Math.cos(x), r*Math.sin(y));
			    xs += xstep;
			    ys += ystep;
			    x += spinSpeed;
			    y += spinSpeed;
			    
			    // Redefine each RGB value
			    rand11 += step1;
			    rand12 += step2;
			    rand13 += step3;

			    randC1 = color(rand11, rand12, rand13)

			    // Iterate through each step, once step = 0, that means color 2 has been reach and its time to reassign color 1 as the color 
			    // 2 from the previous iteration and begin progressing towards the next color2
			    step -= 1;
			    if (step < 1) {
			    	step = numSteps;
			    	rand11 = rand21;
			    	rand12 = rand22;
			    	rand13 = rand23;

			    	randC1 = color(rand11, rand12, rand13);
					
					rand21 = random(0, 255);
					rand22 = random(0, 255);
					rand23 = random(0, 255);

			    	randC2 = color(rand21, rand22, rand23);
			    	diff1 = rand21 - rand11;
					diff2 = rand22 - rand12;
					diff3 = rand23 - rand13;
					step1 = diff1/numSteps;
					step2 = diff2/numSteps;
					step3 = diff3/numSteps;
			    }

			    innerStepTemp -= 1;
			    if (innerStepTemp < 1) {
			    	innerStepTemp = innerSteps;
			    	xs = xe;
			    	ys = ye;
			    	xe = random(-windowW/2, windowW/2);
			    	ye = random(-windowH/2, windowH/2);
			    	//theta = Math.floor(Math.random()*2*3.14159) //Provides random angle in radians
			    	//rInner = Math.floor(Math.random()*r + r) //Provides random radius less than r
			    	// xe = rInner*Math.cos(theta)
			    	// ye = rInner*Math.sin(theta)
			    	// xe = random(-windowW/2, windowW/2);
			    	// ye = random(-(windowH)/2, (windowH)/2);
			    	xstep = (xe - xs)/innerSteps;
					ystep = (ye - ys)/innerSteps;
			    }

			    /*
			    rectMode(CENTER);
	         	//fill(180, 180, 180, 50);
	         	fill(180, 180, 180);
	         	strokeWeight(4);
	         	stroke(0)
	         	rect(0, 0, 420, 100, 20);
	         	strokeWeight(lineWidth);
	         	stroke(255);
	         	fill(0)
	         	text("Jake Hunt", 0, 0);
	         	*/
			};	
		


         /*
        translate(width/2, height/2);
		background(0, 0, 0);
		strokeWeight(1);
		var r = 0;
		var theta = 0;
		var pi = 3.14159;
		var f35 = createFont("monospace");
		textFont(f35, 80);
		textAlign(CENTER, CENTER);

		var linePainter = function(r) {
			theta = degrees(random(0, 2*pi));
			stroke(random(0, 255), random(0, 255), random(0, 255));
			line(0, 0, r*cos(theta), r*sin(theta));
		}        


        draw = function() {
        	frameRate(60);
         	linePainter(width);

         	rectMode(CENTER);
         	fill(180, 180, 180, 50);
         	stroke(0)
         	rect(0, 0, 420, 100, 20);
         	stroke(255);
         	fill(0)
         	text("Jake Hunt", 0, 0);
        }
     */   
	}		
	
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("canvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 