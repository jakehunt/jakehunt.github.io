// Book Variable list
function Book(title, id, author, btu, releaseDate, pageCount, rating, summary, review, whenRead) {
        this.title = title; // Book Title
        this.id = id; // Book id on books .html page
        this.author = author; // Book Author
        this.btu = btu; // URL used to access book thumbnail image
        this.releaseDate = releaseDate; // Book Release Date
        this.pageCount = pageCount; // Book Page Count
        this.rating = rating; // Book Rating (according to me)
        this.summary = summary; // Book summary
        this.review = review;
        this.whenRead = whenRead;
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
// Book Row Variables

const b2 = new Book(
	"Dune Messiah", // title
	"#Dune-Messiah", // id
	"Frank Herbert", // author
	"https://64.media.tumblr.com/3b029f990ff1472a2cc94c2fc06bc9c3/9379152c86a8cd8f-72/s400x600/91a3bc6451d1509daf792385a3d9b26b6fc1e15e.jpg", // btu
	"August 1969", // releaseDate
	"350", // pageCount
	"★★", // rating
	"An ending worth reading.  Dune Messiah takes place 12 years after the end of book one and paints the hero we've come to love in a new light.  \
	Emperor Paul's power of prescience is more thoroughly explored and his imperial regate, divided in support of their emperor, has birthed conspirators against the \
	dual political-religious establishment. Will they succeed in their plots against one with the power of prescience? Don't read the following review unless you want your \
	own derived powers of prescience before reading this book.", // summary
	`<p class="tab"> The complex dialogue I raved about in <i>Dune</i> was perhaps the downfall of <i>Dune Messiah</i>.  Much of the book felt like filler and I don't say this lightly.  \
	I'm an avid supporter of filler when it builds worlds, characters, and philosophical connections to our own world.  However, while I don't consider myself as action-hungry as the \
	casual moviegoer of an MCU film these days (viewers of which are now humor-hungry/humor-fed), I still wanted to see more action.\
    	</p><br> 
    <p class="tab">	I've always expressed disdain for tv shows that bring dead characters back. The CW Network show <i>Arrow</i> season 3 solidified this belief in me (seasons 1 & 2 are the only \
	    ones worth watching coming from someone who has only seen seasons 1 through 3 out of 8).  At first, this is how I felt about Frank Herbert bringing back Duncan Idaho.  However, the way in which \
	    it was done had nothing to do with trying to say the person in question never actually died (Sara Laaaaance from Arrooow! $%&!!).  Instead, the Bene Tleilaxu revived the original Duncan \
	    Idaho's flesh and created an in vitro clone known as a ghola.  This is cool.  And my intrigue of the group responsible for this was greatly increased after being introduced to Scytale, a Tleilaxu\
	    face-dancer, who is also cool.  His presence and dialogue with the other members of the conpiracy including Edric, Reverend Mother Gaius Helen Mohiam, and Princess Irulan, earns him in my mind\
	    as the de facto leader of the group, despite the group's utter dependence on Edric's ability as an oracle to hide the conspiracy's actions from Paul's prescience. 	</p><br>
    <p class = "tab"> After the first chapter, the book seems to devolve into a commentary of blind religious fanaticism with a seemingly overall cynical view of religion in general.  I concur, Frank! \
	    But until Bijaz the dwarf entered the story, I felt as though my mind glazed through the book half-asleep, bored of two repetitive points.  One: the religious cynicism already mentioned \
	    and Two: the concept of prescience.  While the ability to see the future seems straight forward, there are constraints set in this universe.  Don't get me wrong, the concept is cool \
	    (there's that word again), but the constraints are never concretely explained, which would have been okay, but the vAGueness of the prescience is conTINually mentioned.  I get it.  Paul struggles\
	    with this.  But if it's going to mentioned so much, at least give the reader more than just a sense of mysticism.  It gets tiring.</p><br>   
    <p class="tab"> A more garrulous Yoda, Bijaz' dialogue is incredible.  His role as both my activator into a more-interested reader and Hayt's activator into a violent ghola (ultimately unsuccessful)\
    	reminded me of the mechanism of Bucky's activation as the winter soldier in <i>Captain America: The Winter Soldier</i>.  </p><br>  
    <p class="tab"> While <i>Dune Messiah</i> has a wonderful last 30 pages of plot, I would have preferred for it to do its worldbuilding faster. Instead, it feels like nothing\
     	more than a bridge book. R.I.P. Paul but also good riddance.  Hoping for more from <i>Children of Dune</i> (I won't give up on the series just yet).</p>`, // review
	"November 2021"
	);

const b1 = new Book(
	"Dune", // title
	"#Dune", // id
	"Frank Herbert", // author
	"https://64.media.tumblr.com/7f5f4109f33bd7b97920fba45c923a9e/64c95318ca7da0f8-cc/s400x600/2ca97f91dc69975c6f4716df79e1f91258c3132c.jpg", // btu
	"August 1964", // releaseDate
	"896", // pageCount
	"★★★★", // rating
	"I believe even Morgan Wallen would have walked away from this book with more than just Sand in his Boots. \
	The planet Arrakis, also known as Dune, sets the stage for the tumultuous journey of main character Paul Atreides.  \
	From the high-stakes political dialogue, detailed ecological mindfulness, and frequent philisophical musings, \
	<i>Dune</i> leaves its readers more enlightened than a spice-infused Muad&#39;Dib.", // summary
	`<p class="tab"> I believe even Morgan Wallen would have walked away from this book with more than just Sand in his Boots. \
		The planet Arrakis, also known as Dune, sets the stage for the tumultuous journey of main character Paul Atreides.</p>  <br> 
    <p class="tab">I was baited into this read by two of the most common forces known to man: non-verbalized peer pressure (FOMO in this case) \
    	and the desire to experience a blockbuster movie at its finest with the release of Dune: Part One on the big screen on October 22nd, 2021.  \
    	Dune is reknown as a science fiction work of epic proportions, an utmost classic in the genre, and thus surprised me at the depth to which the novel \
    	explores the fields of ecology, philosophy, and psychology.  The latter struck me the most, and the conversation portrayed in the last supper scene \
    	before the Harkonnen invasion is one of the finest pieces of literary dialogue I have encountered.  This scene among others have truly inspired richer personal conversational experiences </p> <br>
    <p class = "tab"> The book as a whole has equipped me with a passion to learn more about the immediate ecosystem in my backyard, \
    	resulting in a walk down 3rd grade memory lane, as I re-learn the differences between vascular and non-vascular plants, angiosperms and gymnosperms, \
    	desparately fleeing from my previous ignorance on the Kingdom Plantae.  Well done, Frank Herbert.  You've sparked a temporary obsession.  \
    	We'll see how long this one lasts.  Time to go find some monocotyledons and dicotyledons, at least until Wednesday, when Amazon Prime delivers Dune Messiah.  </p> `, // review
    "October 2021"
	);

var books = [b1, b2]; // Projects array