
var sketchProc = function(processingInstance) {
 with (processingInstance) {
 	var field = true;
 	var titleSize = 40;
 	var menuTextSize = 20;
 	var buttonTextSize = 15;
 	if ($(window).width() < 450) {
 		size(300, 300);
 		field = false;
 		titleSize = 25;
 		buttonTextSize = 10;
 		menuTextSize = 15;
 	}
 	else {
    	size(400, 400); 
    }

    frameRate(60);
    
    // ProgramCodeGoesHere
		/*****
		 * This Program simulates Electrostatic Force between particles
		 * Reset to Place new particles on the screen
		 * 
		 * To-Do:
		 * Display Electric Field
		*****/

		//Random GUI: Change this value to change how many initial particles appear on screen (I wouldn't go over 70)
		var num = 5;
		//Scene Control
		var scene = 0;

		//Global variables
		var mouse = new PVector(mouseX, mouseY);
		var pcount = 0;
		var ecount = 0;
		var particles = [];
		var particlesPreviousx = [];
		var particlesPreviousy = [];
		var f35 = createFont("matura MT script capitals", 20);
		var f = createFont("monospace");
		var released = false;
		var mouseParticle = 0;
		var particleShowP = false;
		var particleShowE = false;
		var force = 0;

		//Preset Masses for Particles (kilograms)
		var realElectronMass = 9.109e-31;  
		var fakeElectronMass = 9.109e-29; //Used for better visual
		var protonMass = 1.67e-27;

		//Button Code
		{

		var Button = function(x,y, width, height, color, text, fcolor) {
		    this.text = text;
		    this.x = x;
		    this.y = y;
		    this.width = width;
		    this.height = height;
		    this.color = color;
		    this.fieldColor = fcolor;
		};

		Button.prototype.display = function(log) {
		    if (log) {
		    //Electric Field Visual
		        var startr = 0;
		        var endr = 204;
		        var outColor = color(255, 255, 255);
		        var inColor = this.fieldColor;
		        var cOffset = 0;
		        var intColor = outColor;
		        noStroke();
		        for (var r = endr; r > startr; r--) {
		            cOffset += 1/(endr - startr);
		            intColor = lerpColor(outColor, inColor, cOffset);
		            fill(intColor);
		            
		            ellipse(this.x + this.width/2, this.y + this.height/2, r, r);
		        }
		    }

		    //Button
		    textAlign(CENTER, CENTER);
		    strokeWeight(this.width/30);
		    stroke(0, 0, 0);
		    fill(this.color);
		    rect(this.x, this.y, this.width, this.height);
		    fill(0, 0, 0);
		    textFont("monospace", menuTextSize);
		    text(this.text, this.x + this.width/2, this.y + this.height/2);
		};

		Button.prototype.inButton = function() {
		    if (mouse.x > this.x && mouse.x < this.x + this.width && mouse.y > this.y && mouse.y < this.y + this.height){
		        return true;}
		    else {
		        return false;}
		};

		Button.prototype.update = function(num) {
		    this.text = num;
		};

		var Arrow = function(x,y, width, height, color, text, fcolor) {
		    Button.call(this, x,y, width, height, color, text, fcolor);
		};

		Arrow.prototype = Object.create(Button.prototype);

		Arrow.prototype.display = function(log) {
		    strokeWeight(this.width/20);
		    stroke(0, 0, 0);
		    fill(this.color);
		    rect(this.x, this.y, this.width, this.height);
		    if (log) {
		        fill(255, 255, 255);
		        triangle(this.x + this.width/4,this.y + this.height/8, this.x + this.width/4, this.y + this.height*(7/8),this.x + this.width*(7/8), this.y + this.height/2);
		    }
		    else {
		        fill(255, 255, 255);
		        triangle(this.x + this.width*(3/4),this.y + this.height/8, this.x + this.width*(3/4), this.y + this.height*(7/8),this.x + this.width*(1/8), this.y + this.height/2);
		    }
		};

		//Initialize Buttons
		{    //Button(x,y, width, height, color, text, fcolor)
		    var randomButton = new Button(.1875*width, .2825*height, 0.25*width, .125*height, color(255, 0, 0), "RANDOM", color(0, 179, 255));
		    var manualButton = new Button(.555*width, 0.6225*height, 0.25*width, .125*height, color(0, 200, 255), "MANUAL", color(255, 0, 0));
		    var resetButton = new Button(.7875*width, 0.9075*height, .2*width, 0.075*height, color(187, 140, 209), "RESET");
		    var menuButton = new Button(0.02*width, 0.9075*height, 0.17*width, 0.075*height, color(187, 140, 209), "MENU", color(255, 0, 0));
		    var particleDisplay = new Button(0.4325*width, 0.9075*height, 0.1*width, 0.075*height, color(187,140,209), num);
		    //Arrow(x,y, width, height, color, text, fcolor)
		    var left = new Arrow(0.34*width, 0.9075*height, 0.075*width, 0.075*height, color(187, 140, 209));
		    var right = new Arrow(0.5475*width, 0.9075*height, 0.075*width, 0.075*height, color(187, 140, 209));
		    
		    //Manual UI Buttons
		    var pButton = new Button(0, 0, 0.07*width, 0.07*height, color(120, 120, 120), "+");
		    var nButton = new Button(0.93*width, 0, 0.07*width, 0.07*height, color(120, 120, 120), "-");
		    var releaseButton = new Button(0.7375*width, 0.9075*height, 0.25*width, 0.075*height, color(187, 140, 209), "RELEASE");
		    var cancelButton = new Button(0.3125*width, 0.905*height, 0.075*width, 0.075*height, color(120, 120, 120), "X");
		    var resetButton2 = new Button(0.7875*width, 0.8075*height, 0.2*width, 0.075*height, color(187, 140, 209), "RESET");
		    var redoButton = new Button(0.4875*width, 0.9075*height, 0.225*width, 0.075*height, color(187, 140, 209), "REPEAT");
		}
		}

		//Proton Code
		{
		var Proton = function(w, x, y) {
		    this.mass = protonMass;   //kilograms
		    this.charge = 1.6092e-19;  //Coulombs
		    this.width = w;
		    
		    this.position = new PVector(x, y);
		    this.velocity = new PVector(0, 0);
		    this.acceleration = new PVector(0, 0);
		};

		Proton.prototype.applyForce = function(force) {
		    var f = PVector.div(force, this.mass);
		    this.acceleration.add(f);
		};
		  
		Proton.prototype.update = function() {
		    this.velocity.add(this.acceleration);
		    this.position.add(this.velocity);
		    this.acceleration.mult(0);
		};

		Proton.prototype.display = function() {
		    stroke(0, 0, 0);
		    strokeWeight(2);
		    fill(0, 0, 0);
		    ellipse(this.position.x, this.position.y, this.width*32, this.width*32);
		    stroke(255, 0, 0);
		    strokeWeight(this.width+2);
		    line(this.position.x, this.position.y - this.width*10, this.position.x, this.position.y + this.width*10);
		    line(this.position.x  - this.width*10, this.position.y, this.position.x  + this.width*10, this.position.y);
		};

		Proton.prototype.calculateElectricForce = function(p2) {
		    var k = 9e9; // Electric Constant    Nm^2/C^2
		    var v = [];
		    
		    //This conditional is used to determine whether the charges attract or repel
		    if (this.charge*p2.charge < 0) {
		        var v = PVector.sub(p2.position, this.position);
		    }
		    else {
		        var v = PVector.sub(this.position, p2.position);
		        v.mult(-1);
		    }
		    var r = v.mag();
		 
		    r = constrain(r, 50, 250);
		    r = map(r, 0, 400, 6.97e-14,1.526e-13); 
		    
		    var efield = k*(this.charge)/((r)^2); //Electric Field Equation
		    
		    var strength = efield*p2.charge; //Magnitude of electric force
		    v.normalize();
		    v.mult(strength); //Applying magnitude to direction of force
		    
		    return v;
		};

		Proton.prototype.inbounds = function() {
		    if (this.position.x < 600 & this.position.x > -200 & this.position.y < 600 & this.position.y > -200) {
		        return true;
		    }
		    else {
		        return false;
		    }
		};
		}

		//Electron Code
		{
		var Electron = function(m, x, y) {
		    Proton.call(this, m, x, y);
		    this.mass = fakeElectronMass;  //kilograms
		    this.charge = -1.6092e-19; //Coulombs
		};

		//Object inheritance is appropriate for the electrons to use the same methods as protons
		Electron.prototype = Object.create(Proton.prototype);

		Electron.prototype.display = function() {
		    stroke(0, 0, 0);
		    strokeWeight(2);
		    fill(0, 0, 0);
		    ellipse(this.position.x, this.position.y, this.width*32, this.width*32);
		    stroke(0, 200, 255);
		    strokeWeight(this.mass+2);
		    line(this.position.x  - this.width*10, this.position.y, this.position.x  + this.width*10, this.position.y);
		};
		}

		//Random UI Code
		{
		var randomUI = function() {
		//Initialize Particles
		for (var i = 0; i < num; i++) {
		        var n = random();
		        if (n > 0.5) {
		            particles.push(new Proton(1/2, round(random(0.25*width, 0.75*width)), round(random(0.25*height, 0.75*height))));       pcount++;
		        }
		        else {
		            particles.push(new Electron(1/5, round(random(0.25*width, 0.75*width)), round(random(0.25*height, 0.75*height))));       ecount++;
		        }
		    }
		};
		
		draw = function() {
		    mouse = new PVector(mouseX, mouseY);
		    if (scene === 0) {
		        background(255, 255, 255);
		        randomButton.display(field);
		        manualButton.display(field);
		        textFont(f35, titleSize);
		        fill(0, 0, 0);
		        text("Electrostatic Force",width/2, height/2);
		        if (randomButton.inButton()) {
		            randomButton.color = color(255, 255, 255);
		        }
		        else {
		        	randomButton.color = color(255, 0, 0);
		        }
		        if (manualButton.inButton()) {
		            manualButton.color = color(255, 255, 255);
		        }
		        else {
		        	manualButton.color = color(0, 200, 255);
		        }
		    }
		    else if (scene === 1) {
		        background(209, 209, 209);
		        textFont(f35, 30);
		        for (var i = 0; i < particles.length; i++) {
		            for (var j = 0; j < particles.length; j++) {
		                if (i !== j) {
		                    var force = particles[j].calculateElectricForce(particles[i]);
		                    particles[i].applyForce(force);
		                }
		            }
		            if (particles[i].inbounds()) {
		                particles[i].update();
		                particles[i].display();
		            }
		        }
		        resetButton.display();
		        menuButton.display();
		        particleDisplay.display();
		        particleDisplay.update(num);
		        left.display(false);
		        right.display(true);
		        textSize(buttonTextSize);
		        text("Particles", 193, 353);
		        text(pcount, 107, 378);
		        text("Protons", 107, 353);
		        text(ecount, 281, 378);
		        text("Electrons", 281, 353);
		        /*if (particles.length === 55) {
		            fill(0, 0, 0);
		            text("HAPPY BIRTHDAY DAD!", 200, 20);
		            text("I hope you enjoy watching these FIFTY-FIVE particles",200, 40);
		            text("interact on the screen! (WOW that's a high number)", 200, 60);
		            text("It's amAzing the computer can even HANDLE \n a number that high!", 200, 85);
		        }*/
		    }
		    else if (scene === 2) {
		        background(209, 209, 209);
		        textFont(f,buttonTextSize);
		        text("<--Press Buttons to Choose Particles-->", 0.5*width, 0.025*height);
		        if (~released) {
		            for (var i = 0; i < particles.length; i++) {
		                particles[i].display();
		            }
		        }
		        if (released) {
		            for (var i = 0; i < particles.length; i++) {
		                for (var j = 0; j < particles.length; j++) {
		                    if (i !== j) {
		                        var force = particles[j].calculateElectricForce(particles[i]);
		                        particles[i].applyForce(force);
		                    }
		                }
		                if (particles[i].inbounds()) {
		                    particles[i].update();
		                    particles[i].display();
		                }
		            }
		        }
		        menuButton.display();
		        pButton.display();
		        nButton.display();
		        releaseButton.display();
		        resetButton2.display();
		        redoButton.display();
		        if (particleShowP || particleShowE) {
		            cancelButton.display();
		            mouseParticle.position = mouse;
		            mouseParticle.display();
		        }
		    }
		};

		mousePressed = function() {
		    if (scene === 0) {
		        if (randomButton.inButton()) {
		            scene = 1;
		            randomUI();
		        }
		        if (manualButton.inButton()) {
		            scene = 2;
		        }
		    }
		    else if (scene === 1) {
		        if (resetButton.inButton()) {
		            pcount = 0;
		            ecount = 0;
		            particles = [];
		            randomUI();
		        }
		        else if (menuButton.inButton()) {
		            num = 5;
		            pcount = 0;
		            ecount = 0;
		            particles = [];
		            scene = 0;
		        }
		        else if (left.inButton()) {
		            if (num > 0) {
		                num = num - 1;
		                pcount = 0;
		                ecount = 0;
		                particles = [];
		                randomUI();
		            }
		        }
		        else if (right.inButton()) {
		            if (num < 99) {
		                num = num + 1;
		                pcount = 0;
		                ecount = 0;
		                particles = [];
		                randomUI();
		            }
		        }
		    }
		    else if (scene === 2) {
		        if (menuButton.inButton()) {
		            num = 5;
		            pcount = 0;
		            ecount = 0;
		            particles = [];
		            particlesPreviousx = [];
		            particlesPreviousy = [];
		            released = false;
		            scene = 0;
		        }
		        else if (pButton.inButton()) {
		            mouseParticle = new Proton(1/2, mouse.x, mouse.y);
		            particleShowP = true;
		            particleShowE = false;
		        }
		        else if (nButton.inButton()) {
		            mouseParticle = new Electron(1/5, mouse.x, mouse.y);
		            particleShowE = true;
		            particleShowP = false;
		        }
		        else if (cancelButton.inButton()) {
		            particleShowP = false;
		            particleShowE = false;
		        }
		        else if (resetButton2.inButton()) {
		            released = false;
		            particleShowP = false;
		            particleShowE = false;
		            particles = [];
		            particlesPreviousx = [];
		            particlesPreviousy = [];
		        }
		        else if (redoButton.inButton()) {
		            released = false;
		            for (var i = 0; i < particles.length; i++) {
		                particles[i].position.x = particlesPreviousx[i];
		                particles[i].position.y = particlesPreviousy[i];
		                particles[i].velocity.mult(0);
		                particles[i].acceleration.mult(0);
		            }
		        }
		        else if (releaseButton.inButton()) {
		            particlesPreviousx = Array(particles.length);
		            particlesPreviousx = Array(particles.length);
		            for (var i = 0; i < particles.length; i++) {
		                particlesPreviousx[i] = particles[i].position.x; 
		                particlesPreviousy[i] = particles[i].position.y; 
		            }
		            particleShowP = false;
		            particleShowE = false;
		            released = true;
		        }
		        else if (particleShowP) {
		            particles.push(new Proton(1/2, mouse.x, mouse.y));
		        }
		        else if (particleShowE) {
		            particles.push(new Electron(1/5, mouse.x, mouse.y));
		        }
		    }    
		};        
    }
};
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 