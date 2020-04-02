var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(1536, 864); 
        size($(window).width(), $(window).height());
        //fullScreen();
        //frameRate(30);

         // ProgramCodeGoesHere
         			fill(255, 255, 255);
					var n = 60;
					var w = 10;
					var h = height/2;
					var gaplength = (width - n*w)/(n);
					var t = random(0, 1);
					noStroke();
					var f35 = createFont("monospace");
					textFont(f35, 80);
					textAlign(CENTER, CENTER);

					// Create Bar Object
					var Bar = function(x,y,h,t,c) {
					    this.x = x;
					    this.y = y;
					    this.w = w;
					    this.h = h;
					    this.t = t;
					    this.color = c;
					};

					// Create Constructor Functions which can be called in the draw function to edit the bar objects live
					Bar.prototype.update = function() {
					    if (this.h < 0) {
					        this.h = map(noise(this.t), 0, 1, -height/2 + 60, 0);
					    }
					    else {
					        this.h = map(noise(this.t), 0, 1, 0, height/2 - 60);
					    }
					};

					Bar.prototype.display = function() {
					    fill(this.color);
					    rect(this.x, this.y, this.w, this.h);
					};

					//Initialize bars 
					var bars = [];
					var randC = color(random(0, 255),random(0, 255),random(0, 255));
					for (var i = gaplength/2; i < width; i+=gaplength+w) {
					    bars.push(new Bar(i, 0, 150, t, randC));
					    t += 0.01;
					}

					var bars2 = [];
					for (var i = gaplength/2; i < width; i+=gaplength+w) {
					    bars2.push(new Bar(i, height, -120, t, randC));
					    t += 0.01;
					}



					fill(255, 255, 255);

					draw = function() {
					    //frameRate(25);
					    noStroke();
					    background(0, 0, 0);
					    
					    for (var i = 0; i < bars.length; i++) {
					        bars[i].update();
					        bars[i].display();
					        bars[i].t += 0.005;
					        bars2[i].update();
					        bars2[i].display();
					        bars2[i].t += 0.005;
					    }

					   // Draw Name Box
					    translate(width/2, height/2);
						rectMode(CENTER);
			         	fill(180, 180, 180, 50);
			         	stroke(0)
			         	rect(0, 0, 420, 100, 20);
			         	stroke(255);
			         	fill(255)
			         	text("Jake Hunt", 0, 0);
			         	rectMode(CORNER)
						  
					};



	}		
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("canvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 