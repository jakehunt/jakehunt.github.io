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
        this.review = review; // Book Review
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
// STEP 2: Create new project variable 'p3', 'p4', 'p5', etc...

// Format:
// Book Row Variables


// Code Folding Keyboard Bindings:
// Fold all: CTRL + K, CTRL + 1
// Unfold all; CTRL + K, CTRL + J
// Tip: Release CTRL between commands when performing the above.

/*
const b4 = new Book(
	"The Two Towers", // title
	"#TwoTowers", // id
	"J.R.R. Tolkien", // author
	"https://64.media.tumblr.com/f98db3fa6aab4d385c9815666033a246/fa6ee6733519d0dc-f3/s400x600/c2ab428d77f307a7071ab07aa64c9322ded348d9.jpg", // btu
	"November 1954", // releaseDate
	"322", // pageCount
	"★★★★★", // rating
	"This is the meat of the story.  It simply doesn't get more epic than the battle of Helm's Deep.  ", // summary
	`<!-- Use html5-editor at https://html5-editor.net/  -->`,
	"December 2021 - January 2022")
*/

// Dune
const b1 = new Book(
	"Dune", // title
	1, // id
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

// Dune Messiah
const b2 = new Book(
	"Dune Messiah", // title
	2, // id
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

// Great Biographies by Readers's Digest: A Condensation of Edison
const b3 = new Book(
	"Great Biographies by Readers's Digest: A Condensation of Edison", // title
	3, // id
	"Matthew Josephson", // author
	"https://64.media.tumblr.com/5e8abcd2ea5a5185efb75c792494670b/160e8140e6a1343e-b4/s250x400/53b591b12aedc29ffd6fb995c6c95d6cd27349da.jpg", // btu
	"August 1969", // releaseDate
	"336", // pageCount
	"★★★★", // rating
	"An understanding of our world today is quite incomplete without a thorough history of Thomas Alva Edison, that much I understand after reading this biography.  The immense web of notable\
	figures from the mid-to-late 19th century intertwined in Edison's ventures is shocking.  He was a truly monumental contributor to modern society.", // summary
	`<p class="tab"> This shall be less of a review, and more of a condensation of the condensation of Edison, so to say, for myself to look back upon to recall some of the more
	outstanding points and interesting details from such a prolific life. This still turned out to be rather long, so if you're only here for a minute, I would skip to the bottom and read the quotes!</p>
	<br>
	<p class="tab">	Edison was born in 1947 and his life was "an orgy of toil". A common theme throughout Edison's life was improving upon others' inventions.  He improved upon the telegraph, inventing the 
	<a class="primary-tcolor" href="https://ethw.org/Quadruplex_Telegraph" >quadruplex telegraph</a> (1874) allowing for sending and 
	receiving of messages simultaneously along a single line (4 at a time).  He improved upon Alexander Graham Bell's telephone, making it so that one would not have to shout into it for sound to be transmitted.
	In addition, he increased the volume of the transmitted sound, and improved on the articulation of words (1876).  Most famously, he improved upon the incandescent lamp, by lengthening the duration of time it could emit light by finding
	a proper filament mateial (his final solution involved a carbonized cotton filament), and a proper method of creating a vacuum for the filament to reside within (1879).</p>
	<br>
	<p class="tab"> Ironically enough, he was stalwart against improvements upon his idea for mass distribution of power.  The first power station was built by Edison on Pearl Street New York.  It 
	ran on massive 'dynamos', and ran on direct current.  Direct current has a major limitation: it is required to be run at low voltages which requires recipients of electricity to be within 2 miles 
	of a power station.  When alternating current came along, they were able to increase the voltage of the circuit, and transmit electricity over longer distances allowing for power stations to be conveniently 
	placed near power sources (dams, coal mines).</p>
	<br>
	<p class="tab"> The names that Edison came into contact with were none other than the absolute best of American society. The original investors of the Edison Electric Light Company, formed in 1878, included Vanderbilt, President Norvin Green of Western Union, 
	Egisto Fabbri (partner of J.P. Morgan). When Edison later moved from Menlo Park, NJ to Fifth Avenue in NYC, and had his home adorned with his own lights, J.P. Morgan and W.H. Vanderbilt ordered the same for their own 
	residences on Fifth Avenue and Madison Avenue, respectively.  Henry Villard, the railroad magnate, funded Edison's creation of an electric train built in the backyard of the Menlo Park laboratory. 
	George Eastman, the inventor of the "Kodak", created an improved celluloid film, which Edison ordered much of for his motion picture camera: the kineto-phonograph.  Edison was one of the first to created 
	the <a class="primary-tcolor" href="https://www.britannica.com/technology/fluoroscope">fluoroscope</a>, after Professor W.K. Roentgen of the Netherlands discovered X-Rays.  With this fluoroscope devised by 
	Edison, a surgeon performed "the first X-Ray operation in the U.S., with complete success." </p>
	<br>
	<p class="tab">Edison may have been the stimulus which propelled Henry Ford to leave the Detroit Edison Company as chief engineer and start his own small automobile manufacturing unit. 
	The cause: the head of the Detroit Edison Company at the time introduced Ford to Edison and Edison heard the young engineer describe his first automobile.  Edison responded: "You have it! - the self-contained
	unit carrying its own fuel with it. Keep at it!"  As the biography states: "Ford believed that this first encounter was a turning point for him; his gratitude toward Edison endured and became 
	something like idolatry."</p>
	<br>   
	<p class="tab">  
	At the end of his life, he attempted to find a way to domestically produce rubber, important for the growing automobile
	industry, to prepare for wartime. His approach to finding a solution was akin to the way he had always done it: getting his hands on all possible materials and trying everything.  He came across
	the goldenrod plant as the best candidate to be grown in the states for a 12% rubber yield.  Unfortunately, it never gained traction, because of the German chemical process for converting coal or 
	petroleum derivatives into synthetic rubber, which proved less difficult and less costly a process to acheive a product superior to that of natural rubber from plants. Check out a timeline of Edison's 
	inventions <a class="primary-tcolor" href="https://americanhistory.si.edu/lighting/scripts/s19t.htm">here</a>.</p>
	<br> 
	<p class="tab"> I found it curious that although Edison was an agnostic, he made the following statement: "If there is really any soul I have found no evidence of it in my investigations.... 
	But I have found repeatedly evidence of mind.... I do not believe in the God of the theologians; but that there is a Supreme Intelligence, I do not doubt."  On his death bed, his convictions
	did not waver and 'one who ministered to him asked if "he had thought of a life herafter." "It does not matter," [Edison] replied in a low voice. "No one knows"'</p>
	<br>
	<p class="tab"> Due to the demands of work, Edison never had much time for his family and resorted to "spending Sunday afternoons with them when work wasn't busy." This seems to be one of the downfalls
	of a life so prolific in output and contribution to humanity and society as we know it.  His own personal life was lacking.  His children from both of his marriages found him to be remote and not in the picture
	more often than not. This serves as a fair warning to those seeking a balanced life on earth!</p>

	<br>
	<p>Interesting Facts and Notes from the Biography</p>
	<ul>
		<li class="review-quote-list">Edison proposed the formation of a scientific research laboratory for the Navy: thus the <a class="primary-tcolor" href="https://www.nrl.navy.mil/">Naval Research Laboratory</a> was born.</li>
		<li class="review-quote-list">At the age of 15, toward the end of his years as a railway boy selling candy, fruit, and newspapers to railroad passengers, while he was stopped at Clemens station, 
    		he saved the life of a 3-year old boy playing in the tracks from an oncoming train car.  The father of the child, the stationmaster, in his gratefulness, offered to repay Edison 
    		by teaching him to be a telegrapher over the course of a couple of months.</li>
		<li class="review-quote-list">Telegraphers, in the early years of the original invention, were called "Lightning Slingers."</li>
		<li class="review-quote-list">In 1888, the Edison industries, including the Edison Electric Light parent company and its subsidiaries including Edison Lamp, Edison Machine Works, and 
    		Bergmann's, was consolidated into "Edison General Electric Company" due to... "a need for reorganization" at the time.  In 1891, a merger occured between Edison General Electric Company 
    		and Thomson-Houston Company and the new company born was known as "General Electric Company".  During his lifetime, the company Edison had such a hand in forming, saw his name taken off 
    		the company's title.   </li>
		<li class="review-quote-list">The most original of his inventions was the <a class="primary-tcolor" href="https://www.pbs.org/weta/roughscience/series2/challenges/sound/page3.html">phonograph</a> (1877).</li>
		<li class="review-quote-list"> One of his most unsuccessful ventures was electromagnetic ore-separation in Ogdensburg, New Jersey.  </li>
		<li class="review-quote-list"> <i><a class="primary-tcolor" href="https://en.wikipedia.org/wiki/The_Great_Train_Robbery_(1903_film)">The Great Train Robbery</a></i> distributed by Edison's 
		studio in 1904 is now regarded as the classic prototype of the motion-picture play.</li>
		<li class="review-quote-list"><a class="primary-tcolor" href="https://www.computerworld.com/article/2515435/moth-in-the-machine--debugging-the-origins-of--bug-.html">Edison coined the term "bug"</a>, commonly used in the modern-day software problem-solving process.</li>
		<li class="review-quote-list">The places that he lived during his life included: Milan, Ohio; Port Huron, Michigan; Boston; New York City; Menlo Park, New Jersey (where he was given the title: 
		"The Wizard of Menlo Park"); Fort Myers, Florida and West Orange, New Jersey.</li>
	</ul>
	<br>
	<p>Favorite Quotes from the Biography</p>
	<ul>
		<li class="review-quote-list"><i>Edison often lived in vermin-infested bedrooms. The Western Union office in Cincinnati, formerly the site of a large restaurant, was also menaced by armies of rats. 
		One of Edison's first inventions was a "rat-paralyzer," a contrivance made up of two metal plates insulated from each other and connected with a main battery.  
		This machine he laid out in the cellar, and when a rodent chanced to place its forefeet on one plate and its hindfeet on the other, then , as one of his telegrapher friends, 
		Milton Adams, phrased it, "it would render up its soul and depart this earthly sphere." </i></li>
		<li class="review-quote-list"><i>What was electricity? Tom Edison kept asking people. A Scotsman, who was a station agent on the new railway that came to Port Huron, finally explained
		that "it was like a long dog with its tail in Scotland and its head in London. When you pulled its tail in Edinburgh it barked in London."</i></li>
		<li class="review-quote-list"><i>Edison's decision not to undertake inventions unless there was a definite market demand for them was of great historical importance, as a modern commentator, James G. Crowther, has written: "He was the first great scientific
		inventor who clearly conceived of invention as subordinate to commerce." In thus making his inventions conform to the necessitiese of human use and convenience, he also established a social and democratic criterion 
		for applied science... In choosing the "commercial" standard, Edison was by no means being "vulgar" or mercenary. He was determined to make his hazardous profession both businesslike 
			and respectable.</i> In other words, Edison only pursued inventions that had commercial value.  Purists might say he was in some way a lesser form of an inventor because of this. I would say he was a realist.</li>
		<li class="review-quote-list"><i>It was perhaps Edison's greatest blunder (as he himself would admit twenty years afterward).  He seemingly closed his mind and would go no further, resisting a-c systems much 
		as the big gaslight companies earlier had rejected his incandescent electric light. "In 1879 Edison was a bold and courageous inventor," a modern commentator has said. "In 1889 he was a cautious and conservative defender of the status quo."</i></li>
		<li class="review-quote-list"><i>Genius is ninety-nine percent perspiration and one percent inspiration.</i> This Edison quote seems to have been implanted in the foundations of my being from a young child.  At the time of reading, although I agree with its 
		sentiment and its benefit to one's work ethic when harbored in the mind, I'm not sure if I totally agree with the truth of its essence anymore.</li>
	</ul>


	`, // review
	"November 2021"
	)

// The Old Man and the Sea
const b4 = new Book(
	"The Old Man and the Sea", // title
	4, // id
	"Ernest Hemingway", // author
	"https://64.media.tumblr.com/cd33e7e5cf743638325c7ff493594e9a/beb27d0523e19d42-d1/s250x400/0a58b61af72bfff6c6cf1eb872078c2c4f401fdf.jpg", // btu
	"September 1952", // releaseDate
	"93", // pageCount
	"★★★★", // rating
	"For me, I need more than a rod and some bait to go fishing.  I need the desire.  Nothing but this book and its subtle yet powerful description of all the gritty details\
	 could have sparked such a desire. Also I don't like sharks now.", // summary
	``,
	"November 2021")

// The Hobbit
const b5 = new Book(
	"The Hobbit", // title
	5, // id
	"J.R.R. Tolkien", // author
	"https://64.media.tumblr.com/aab0c83cebc53e95104b44d2da2fa6bf/fcd35af9c1c3fce3-9d/s400x600/4c37ea57904eca5eb574e7975ff58509742f7de5.jpg", // btu
	"September 1937", // releaseDate
	"365", // pageCount
	"★★★★", // rating
	`If you're feeling adventurous, but not in the mood to leave your house, then this is the perfect novel to take you beyond your four walls
	and follow the character of Bilbo Baggins.  Will this book awaken the Took inside you? Get ready for an "enchanting" and classic fantasy adventure.`, // summary
	`<p>Thoughtless, idle you can be, to ponder, consider... will you flee?</p>
	<br>
	<p>Fantasy novels may seem like a waste of time to some people.  I beg to differ.</p><br>
	<p  class="tab">My first reading of the <i>The Hobbit</i> was in late elementary school.  Over a decade later, here I am again, reading 
	it for a second time.  If you know my background, I am not good at wasting time and I typically don't read or watch things twice.  Actually, I take it back... 
	I have enjoyed watching certain movies twice or even three times (<i>Days of Future Past</i>), so what I really mean is that I don't typically read things twice.  Okay, okay so I'll re-read captions
	for my instagrams posts until they're "perfect" but what I really mean is that you won't find me re-reading a book twice.  Perhaps I do waste time in the digressing of thought... 
	</p>
	<br>
	<p class="tab">Whereas reading the previous paragraph may have been a waste of time, fantasy novels as a genre are not.  They curate your imagination to think beyond.  Sure, if you talk about goblins, 
	orcs, trolls, and recite the names of Balin, Dwalin, Kili, Fili, Dori, Nori, Ori, Oin, Gloin, Bifur, Bofur, Bombur, and Thorin Oakenshield like I do, you'll get some looks.  However, beneath the surface 
	of strange lands, characters and other fantastical creations outside of our world, there lies a doorway.  Some see this doorway as an escape, and fantasy stories are often presented as such; however, 
	I believe fantasy is best enjoyed when you stand on the threshold between our world and its own.  What do I mean by this? A good fantasy story should make you see the world with new eyes, and beckon you
	to live life with more "whimsy" (to quote Bob Goff's favorite trait).  I've come to realize that strangeness is often just reason unrealized and this realization opens up one's 
	ability to interact with a whole new group of people: those we naturally consider weird/strange.  I could probably keep rambling on, but for my future self to reminisce a little bit on the actually
	details of the book, I'll include some observations and connections I made to my life's experiences while 'standing on the threshold'.</p>
	<br>
	<p class="tab">The cadence of Bilbo's adventure follows his stomach! The reader is constantly made aware of where the food is or is not.  This adds a plumb line of utter realism amidst so many strange, new,
	fascinating things.  In my opinion, this is a brilliant device to augment the reader's ability, or lack thereof, to put themselves in Bilbo's shoes.</p>
	<br>
	<p class="tab">Our hairy-toed friend makes a comment that really stood out to me on page 286 in chapter 16.  Here's the context: after Smaug's demise, when Thorin and company have sealed themselves within 
	the Lonely Mountain, Bard, with a large group of Lake-men and elves from Mirkwood, speaks parley to the dwarfs, or specifically Thorin.  Bard communicates that within the hoard there is much wealth 
	that belongs to him as heir of Girion of Dale (Dale being the city adjacent to the mountain and previously decimated by Smaug).  He also mentions how a portion of the hoard should be given to the 
	men of Esgaroth for their now-destroyed town.  Lastly, he mentions that he deserves a portion himself for slaying the dragon.  Upon this final statement, Tolkien reveals Bilbo's following thoughts: 
	"[Bilbo] did not, of course, expect that any one would remember that it was he who discovered all by himself the dragon's weak spot; and that was just as well, for no one ever did." So Bard was only able 
	to slay the dragon because of the intel from the thrush.  The thrush would have made a nice kebab if it hadn't carried the important information given to it by the one and only Bilbo! And he had to learn this 
	information while in close proximity to Smaug from in his lair! Bilbo plays to Smaug's pride to learn his weakness, yet demonstrates a humble spirit when the treasure is doled out.  
	In our world, how many great deeds of individuals/companies do the masses
	of society (which includes me) misallocate?  Just the thought that there are countless unsung heroes in the world imparts more passion within me to treat everyone with more respect. </p>
	<br>
	<p class="tab">Lastly, the fight between dwarves versus men and elves being averted at the last minute due to the appearance of a common enemy, the goblins and warg army, is both highly fortunate
	and utterly crazy to think about.  Right when they were at each other's throats, they put everything aside to fight the enemy.  Maybe you and your coworker don't naturally get along and the common enemy which
	bonds you together is your intense work life.  Perhaps the relational strife of peacetime and clashing of personalities is pacified by the onset of national war.  If war broke out on U.S. homesoil due to the
	onset of another nation, I believe the national unrest, widespread perpetuation of racism, and polarization of thought which is televised in the news would recede as people
	rally together to fight the common enemy.  As strange as it is to say, I think that war may be the best antidote the secular world can offer to a modern society in need of true peace between neighbors; such peace which 
	is *rarely (*See the final statement of this paragraph) found during 'times of peace'.  And after a war, people in general go back to pursuing ease of living and the whole cycle starts over.  How sad is it if the best glue that holds people and
	societies together is having a common enemy! I may have butchered the thought I was trying to
	say in this paragraph, but I will end with this so it at least sounds like I got to a point: Jesus is the permanent reconciliation that humanity so craves.</p>
	<br>
	<p class="tab">Oh, and Gollum and Bilbo's riddle battle is just extraordinary.  Here's one of my favorite riddles from the scene: "A box without hinges, key, or lid, Yet golden treasure inside is hid." 
	I know, it's easy.  But that doesn't mean it's not good!</p>
	<br>`,
	"November 2021")

// The Fellowship of the Ring
const b6 = new Book(
	"The Fellowship of The Ring", // title
	6, // id
	"J.R.R. Tolkien", // author
	"https://64.media.tumblr.com/11ad7eebba1f411807a827499a28241d/e3091b3755d4b3f0-8c/s400x600/f28cf43b5aaf7e496f15d7f0a986ab808aa64e0f.jpg", // btu
	"July 1954", // releaseDate
	"398", // pageCount
	"★★★★★", // rating
	"The beginning of a journey like no other.  This book evokes a great sense of wonder and longing, and brooding and awareness.", // summary
	`<p>WARNING: Spoilers ahead.</p>
	<br>
	<p class="tab">A poetic summary of the adventures of Frodo in this wonderful book: From the safety of the Shire, to their beginning in Buckland, to the orneriness of the Old Forest and its wicked Withywindle, to the sound home of Tom Bombadil and daughter Goldberry, to the
	buried plight of the Barrow-Downs, to the predicament at the Prancing Pony in Bree, to the security of Strider, to the mosquitos in Midgewater, to the wound at Weathertop, to the luck at the Last Bridge, to the throwback at the trollshaw, to the fight at the ford of the Bruinen,
	to the reward of rest at Rivendell.</p> 
	<br>
	<p class="tab"> At Rivendell, Frodo is healed of his wound, Bilbo's whereabouts are revealed, and Gandalf is finally met.  At the Council of Elrond, much lore of Middle-Earth is revealed.  Aragorn's love is made apparent in Arwen, later to be discovered as granddaughter of the Lady Galadriel. Frodo's mission is established to 
	destroy the Ring in the Cracks of Doom at Orodruin (Mount Doom).  Elrond organizes a group of eight to accompany Frodo, making nine total, a fellowship consisting of Merry, Pippin, Frodo, Sam, Gandalf, Gimli, Legolas, Aragorn, and Boromir.</p>
	<br>
	<p class="tab"> To the south they make haste, for the long hand of the enemy is still stretching.  Across the Misty Mountains they must go but which way will they take? To the Redhorn Gate of cantankerous Caradhras, misfortune they meet and back they came.  Beyond they could travel to the Gap of Rohan but after the ill-tidings
	Gandalf brought of Saruman at Isengard, little faith they had in the horse-lords of the Rohirrim.  Over and beyond were both out of question, so at last they determined to go under in the ancient mines of Moria.  To the east gate they travelled, to the waterhole of the Watcher, in they went with little time to spare.  
	To the west they went, the tomb of Balin they found, stuck they were, they escaped Durin's Bane, the Balrog, not as nine but as eight.  Down the Celebrant to the mallorns of Lothlorien, thankfully with Legolas, accepted by the Sylvan elves.  To the green elevated city of Caras Galadhon, to the great river Anduin, to the 
	falls of Rauros, and to the end of the journey together.  Frodo almost escapes alone, if not for the loyalty of Sam Gamgee, to begin the next leg of the quest a quarter of their previous number.</p>`,
	"December 2021")

// Immune - A Journey into the Mysterious System That Keeps You Alive
const b7 = new Book(
	"Immune - A Journey into the Mysterious System That Keeps You Alive", // title
	7, // id
	"Philipp Dettmer", // author
	"https://64.media.tumblr.com/cdeb915a9d199434029c41cf6428caf2/1d1d52343baac469-cf/s400x600/7c2c24c8d073f33a21f52ae27dc1e351a259c912.jpg", // btu
	"November 2021", // releaseDate
	"315", // pageCount
	"★★★★★", // rating
	"This book explains so much in so little.  The use of analogy is not only brilliant for explaining this ghastly complicated system but truly enjoyable.  A greater sense of wonder is beset upon the reader.", // summary
	`<p class="tab">HIV/AIDS: When the immune system is too weak.  Allergies: When the immune system is too strong.  Autoimmune Disease: When the immune system stops differentiating between "self" and "other".  
	Cancer: When part of you 'decides' to no longer be a part of you.  Hygiene: what do you think the book says about this? You may be surprised...</p> 
	<br>
	<p class="tab"> Since the pandemic of Covid-19 has befallen our current world, I have been inundated, overwhelmed with, and increasingly bored with... no not the disease itself... but rather conversation around Covid-19.  Many people 
	discuss things without concern for doing research.  And research is difficult regarding a topic so politically charged.  So I forgive them, and I forgive myself for not taking the time to research.  I can't imagine how much time I would
	have wasted in lieu of reading this book! <i>Immune</i> dives into the deep end of the pool but avoids getting sucked down the drain in terms of surveying the information available.  Every single page invites potential further study.  Let's not
	relate this book to studying; however, because it was truly a joy to read.  I now have more confidence in navigating discussions around the immune system, vaccines in particular, and Covid-19 itself.  </p>
	<br>
	<p class="tab"> The analogies employed are incredible! First he breaks the immune system into 2 types: The Innate Immune System and the Adaptive Immune System.  This sets the framework for the book.  One analogy that really stuck was the way that 
	your Neutrophil cells (the crazy Suicidal Spartan Warriors of the Immune System) attack intruder pathogens: they use a 'NET'.  Or rather, a 'Neutrophil Extracellular Trap', which involves the Neutrophil dissolving its nucleus allowing its DNA to 
	spread out into its body which causes the DNA strands to pick up proteins and other particles. Then the Neutrophil rips its body open and pulls the DNA stands out and starts 'swinging them around' as a sort of spiky whip to catch anyone unfortunate 
	enough to be near its wrath.</p>
	<br>
	<p class="tab">Some information is kind of scary.  The human immune system is more dangerous than any pathogen out there. Also the fact that adult-onset allergies is a thing makes me way more appreciative of each day.  Most of the information 
	is more encouraging.  The intricate dance that gets played by your immune system every day and especially during infections, is ridiculously magical.  There are so many safeguards, like two-factor authentication methods deterring your immune system 
	from just going crazy all willy nilly.</p>  
	<br>
	<p>I cannot give this book enough praise.  What are antibodies, what are the different types of vaccines, what are Dendritic cells, what apoptosis have to do with hot dog buns? All these questions and way way more are answered in this book.<br>
	Absolutely a magnificent journey worth taking again.</p>`,
	"December 2021 - January 2022")

// The Two Towers
const b8 = new Book(
	"The Two Towers", // title
	8, // id
	"J.R.R. Tolkien", // author
	"https://64.media.tumblr.com/f98db3fa6aab4d385c9815666033a246/fa6ee6733519d0dc-f3/s400x600/c2ab428d77f307a7071ab07aa64c9322ded348d9.jpg", // btu
	"November 1954", // releaseDate
	"322", // pageCount
	"★★★★★", // rating
	"This is the meat of the story.  It simply doesn't get more epic than the battle of Helm's Deep.  ", // summary
	`<p class="tab">Impending doom drives the tension of this book.  Evil lurks around every bend.  I've always worried about how I enjoy to talk about the great evils in the Lord of the Rings but fail 
	to remember their conqueroring.  How did Frodo and Sam escape the clutches of Shelob? How did Aragorn, Gimli, and Legolas escape the legions of Orcs and Uruk-hai at Helm's Deep? In this re-read, I truly enjoy
	seeing evil topple over and good triumph.</p> 
	<br>
	<p class="tab">Tolkien continues to sear the geography of Middle-Earth into my mind, just as the first book.  Some things, in particular, that I enjoyed this time around included the description of the power of Saruman's voice/will.  
	To have a commanding air and voice as of Saruman is as tempting as the choice offered to King Theoden to join him.  Even in defeat, long-practiced wisdom holds power even when applied for wrongdoing.  Or perhaps the 
	moral is to simply not celebrate while your enemy is still standing.</p>
	<br>
	<p class="tab">Another aspect I enjoyed was seeing characters deal with the power of temptation to wield the Ring (and similarly Pippin and the Palantir).  This theme runs through all the books but its message
	is powerful: when presented with the temptation of true power, do you take it? It makes me question the root of my moral tendencies.  If I think deep down, I (just physical me) am truly good, and all bad in me are 
	simply blemishes I have picked up along the way in life, then I may be tempted to say "Yes, I can wield true power".  But what is true power? Whatever it is, how would someone innately without true power, ever be 
	able to use such a power without being enslaved to it? These comments are getting a little abstract, so I'll mention that my appreciation of the discussion of temptation is more generalized, in which I have enjoyed
	gaining a heightened sense of the inner battles within me.  Okay, that sounded melodramatic. Life is more fun when the senses are awake.  Is this a book review or a reflection on life? I hope all these 'reviews' 
	include parallels to life!</p>
	<br>
	<p class="tab">Sam's description of Gollum as Slinker and Stinker was right on.  I love it.  I mistrusted Gollum right alongside Sam the whole way.  The last 3 pages of the Battle of Helm's Deep I had to 
	re-read aloud again while writing this, and wow it really is incredible.  The walk through Shelob's lair was quite the olfactory experience, to my surprise.  I had a dream (nightmare you may call it), where
	I had an evil smell that persisted in and even after waking.  Tolkien's description of that evil smell in the lair reminded me of my own experience.  Thankfully we have something even better in our world than
	the light of Galadriel.  We have the light of Christ.</p>`,
	"December 2021 - January 2022")

// Ready Player One
const b9 = new Book(
	"Ready Player One", // title
	9, // id
	"Ernest Cline", // author
	"https://64.media.tumblr.com/568197decb59260f3a3ff528787284fe/7d121c80730f8a53-a3/s500x750/d510c0451289efe85d26c3fc22b82c4f19e6bd9a.jpg", // btu
	"August 2011", // releaseDate
	"15 hrs 40 mins", // pageCount
	"★★★★★", // rating
	"Stunned at the power of my first audiobook.  This narrator plus this story is a must listen!", // summary
	`<p class="tab">SPOILERS AHEAD.  As stated in the summary, this was my first audiobook experience.  Had a lot of travel one week for work driving around Tennessee and Mississippi and the length of the book matched my total drive time almost PERFECTLY.  I started it when I left the house on Monday and finished an hour before I got back on Thursday.  Impeccable timing.</p> 
	<br>
	<p class="tab">I'm going to keep this review short and to the point.  Ready player one is the first story I've experienced which comments in a meaningful, big picture way on my experience of playing video games in my childhood.  Where I've sometimes looked back with a guilty conscience, wondering how else I could have spent days of my life, 
	the nostalgia Wade has for 80's games and culture (albeit a vicarious nostalgia semi-forced on him through his socio-economic position and Halliday's hunt), is highly akin to the nostalgia I have for the games played growing up.  Kingdom Hearts, Sly Cooper, Uncharted... games that truly broadened my worldview and appreciation for life.  Also, the
	parallel between the Oasis and with Facebook's Metaverse is crazy! It's such a feasible reality which the world is heading.  
	</p>
	<br>
	<p class="tab"> Paraphrase: "5 years later, a name finally appeared on Halliday's scoreboard, and that name was me" - LEGendary!! I love this line.  I was really feeling this story from this point and beyond.</p>
	<br>
	<p class="tab">The quarter.  What does this item do??? I was thinking, it's going to be sneaky high-level powerful, but what could it be?? While I'm continuing to listen, I'm running through all the possibilities of the effect of the quarter, already preparing myself to be disappointed.  But the reveal was lit!!! As I'm writing this review, I'm thinking I need to listen to this again.</p>
    	<br>
	<p class="tab">Halliday's final advice before handing the Oasis to Wade reminded me that while the virtual world is a place where real-world relationships can grow, the virtual world will never fulfill like the real-world can.  <-- THat's the basic conclusion Halliday finally comes to which is cool I guess... which makes me wonder how a change in heart for Wade would make for an interesting 
	second book if he walks away from the Oasis!!?! I would add to Halliday's conclusion and say that even the real world will never truly fulfill our human desires.  Only God can fill the void in our heart, with a new spirit: Christ in us.</p>`,
	"January 2022")

// The Return of the King
const b10 = new Book(
	"The Return of the King", // title
	10, // id
	"J.R.R. Tolkien", // author
	"https://64.media.tumblr.com/0399640f1496e9a0cd8c7ea4cb9b28b5/0b56595920758b1a-72/s250x400/c9e213e33529512ca5a243686ca38b8721b0dab8.jpg", // btu
	"October 1955", // releaseDate
	"277", // pageCount
	"★★★★★", // rating
	"The ending of the Third age of Middle-Earth, told in all of its magnificent detail.", // summary
	`<p><i>When I read this book...</i></p>
	<p class="tab">I was traveling for work performing Walmart site surveys in TN, MS, LA, and TX.  My evenings at the hotel were spent enjoying this masterpiece.</p> 
	<br>
	<p><i>On Denethor</i></p>
	<p class="tab">During this second reading, I was greatly appalled that the burning of Denethor is actually a viable event that Tolkien could write into this world.  What deplorable
	combination of hubris and cowardice could lead a man to such a monstrous decision to burn himself alive merely to avoid seeing the downfall of his kingdom.  I hate that this sentiment is one
	that could actually be dreamed of existing within us in our world. I suppose that people who enact great evils were first ensnared by a seemingly small evil.  In Denethor's case, I believe his 'small'
	evil was imagining himself capable of looking into his palantir and not succumbing to Sauron's evil will.</p>
	<br>
	<p><i>On Eowyn</i></p>
	<p class="tab">If you are slightly interested at all in the Christian symbolism in Lord of the Rings, then carve out 20 minutes of your day to watch this video: 
	 <a href="https://www.youtube.com/watch?v=-gvuk3pxjnU">Is the Lord of the Rings a Christian Story? (With Tolkien Scholar Dr. Steve Fratt)</a> and also check out the section on Christ at the
	 following wikipedia page: <a href="https://en.wikipedia.org/wiki/Christianity_in_Middle-earth#:~:text=the%20symbolism.%5B25%5D-,Christ,-%5Bedit%5D">Christianity in Middle-Earth</a>.  However, on the 
	 topic of Eowyn, you have to listen to why Steve Fratt in the aforementioned video relates most to him (14:08 - 15:06). </p> 
	<br>
	<p><i>On Samwise</i></p>
	<p class="tab">It really hit home when Gandalf and Frodo, two of the most influential characters throughout the story, leave Middle-Earth.  It truly felt like a great loss to me emotionally.  Middle-Earth is left 
	more beautiful than when the story began, but now only Samwise is left.  All of this is great fodder for pondering the concept of change, on which I thought of my own life and leaving college, confronting major life change, 
	and feeling much of what Sam must have felt at the leaving of many of his friends.</p>  
	<br>
	<p><i>On the World of Middle-Earth</i></p>
	<p class="tab">I love it.  The history of the world is much too detailed for me to commit to memory all of the many peripheral characters, but helps me better grasp our own world's history 
	(particularly the book of Genesis).  The vastness of lore present here rather inspires me to create!  What a creation that Tolkien made! Let us simply wonder at the fact God has enabled us to be co-creators with him in life.
	What a beautiful thing.  Let's always remember to enjoy creation, but enjoy our creator, and his gracious love for us, even more.</p>`,
	"January 2022 - February 2022")

// From Hell's Half Acre to The Moon
const b11 = new Book(
	"From Hell's Half Acre to The Moon", // title
	11, // id
	"Ernest Pullen", // author
	"https://64.media.tumblr.com/ae6e05126e7b27cd1003731f7803ff8e/53d9a669b6c15cbe-e5/s640x960/ff70047325801eb0045aba85ff67a166ab8a6cb3.jpg", // btu
	"December 2020", // releaseDate
	"285", // pageCount
	"★★★★★", // rating
	"The fascinating, turbulent story of C.E. Pullen.  This book was given to me by a new friend from church who also happens to be the author.", // summary
	`<p><strong>How I heard about this book:&nbsp;</strong><em>From Hell's Half Acre to The Moon&nbsp;</em>is the story of C.E. Pullen, as told by his son Ernest Pullen. &nbsp;I met Ernest while living with my parents in our new home in Ball Ground, GA. &nbsp;After church one Sunday, the three of us went out to eat with some other church members at a local seafood restaurant, one among the company I had the pleasure of meeting Ernest. &nbsp;In addition to good conversation, it came up that he wrote a book. &nbsp;I was fascinated and inquired more and was pleased to be offered a copy he had in his car. &nbsp;I hadn't known it at the time, but our conversation over lunch had quite coincidentally touched on a sample of topics mentioned in his book about his Dad, Charles Eugene Pullen (C.E.). &nbsp;Those topics solely brought up by me included my recent trips to Miami for work, and my experience at GTRI in the Electro-Optical Systems Laboratory (EOSL). &nbsp;I'm glad Ernest thought I would appreciate his Dad's story based on our conversation, because it was a joy of a read, made even more special by walking away from the book a better person than before, having witnessed a man worthy of respect, yet seemingly abundantly willing to give respect&nbsp;out to everyone he encountered.</p>
	<p>&nbsp;</p>
	<p><strong>Amazon Review</strong><strong>:&nbsp;</strong>Why should you read this book? C.E. is an accomplished individual, and the stories of each accomplishment are utterly fascinating, but you can get the summary about his major accomplishments on the back cover, so that's not why. &nbsp;The absurd number of times C.E. has a brush with death is also entertaining to read, if you may (like why he wears an eye patch), but that's also not why. &nbsp;You should read this book because it is truly enjoyable to become immersed in the story of an era, a family, and a man that very few people know about! This is not a story where all loose ends are tied into a happy ending either; no, it is very real. &nbsp;If you let it, the story of C.E. will make you think critically about your own place, purpose, and relationships, and you will walk away a better human being.</p>
	<p>&nbsp;</p>
	<p>Warning: ****Spoilers Ahead****</p>
	<p>&nbsp;</p>
	<p><strong>All brushes with death:</strong></p>
	<p>This may be a weird list to want to make, but I wanted to revisit this aspect of the book, because it's straight crazy how many times C.E. almost dies. &nbsp;Seriously.&nbsp; Read this list.&nbsp; I probably missed 1 or 2 events.</p>
	<ol>
	<li>pg 56 -- At 6 yrs old, C.E. trips on fence lands face first into the wash pot he was holding. Cuts his lip on the pot leaving a lifelong scar, and a piece of fence wire "pierced his right eye leaving him blind in the right eye for several years."</li>
	<li>pg 82 -- Each member of the Pullen family gets malaria at some point during a year.</li>
	<li>pg 11 &amp; 121 -- C.E. is shot in his right eye with a shotgun. &nbsp;Barely gets to eye doctor in Atlanta in time to save his left eye. &nbsp;Almost had to get both eyes removed.</li>
	<li>pg 154 -- At the Naval Air Station machine shop in Pensacola,&nbsp;<span id="isPasted">&nbsp;C.E.'s friend Tex spins up the gyroscope just like C.E. and others had done previously, and it explodes sending shrapnel everywhere, killing Tex. &nbsp;C.E. had incidentally walked away for 5 minutes from the death zone, an area he stands at all day.</span></li>
	<li><span id="isPasted">pg 186 -- C.E. gives a ride into town to a large mysterious man whose car broke down on the road right outside his house. &nbsp;Later found out the man was an escapee from Texas serving time for murder.</span></li>
	<li><span id="isPasted">pg 189 -- C.E. and family were rear-ended by a car "going at least 80 mph". &nbsp;After impact, the man gets out of his car menacingly holding a knife at C.E. &nbsp;</span></li>
	<li><span id="isPasted">pg 232 -- Unloading heavy marble slab from truck using an industrial I-beam winch to unload the slab. &nbsp;Slabs slips off truck, winch falls onto slabs shattering them. &nbsp;C.E. was in between both shattered slabs.</span></li>
	<li><span id="isPasted">pg 248 -- Back in Connecticut, C.E. slips on ice and falls onto his guitar case. &nbsp;Breaks his lower back and can't move. &nbsp;Stuck in the cold. &nbsp;Would have frozen if not for an individual that pulled up and called an ambulance.</span></li>
	<li><span id="isPasted">pg 275 -- Foggy car crash accident - injured ribs</span></li>
	<li><span id="isPasted">pg 276 -- Another car crash, head-on collision, 2 to 3 miles from previous car accident.</span></li>
	<li><span id="isPasted">pg 280 -- While riding a zero-radius lawn mower, C.E. flips it and was nearly stuck under it at the risk of a fire starting. &nbsp;Was able to push mower over and walk away with re-injured ribs.</span></li>
	</ol>`,
	"February 2022 - March 2022")

// Ready Player Two
const b12 = new Book(
	"Ready Player Two", // title
	12, // id
	"Ernest Cline", // author
	"https://64.media.tumblr.com/01f40658ad12e5e6067947dc56bb09a5/397f414f156c2c60-f9/s640x960/ff02ccbc4e0f844e944262bbc059fff2b9f561ab.jpg", // btu
	"November 2020", // releaseDate
	"13 hrs 47 mins", // pageCount
	"★★★★", // rating
	"More 80's trivia and new brain-stimulating technology that will make you think critically about its ethical implications.", // summary
	`<p><em>Ready Player Two</em> takes the fascinating 80's trivia from&nbsp;<em>Ready Player One</em> and goes even deeper... for better or for worse.&nbsp; If you want to see what sort of trivia this book covers (It goes beyond just the 80's), you should just go to this wiki that lists all the references from the book:&nbsp;<a title="Ready Player Two Wiki" href="https://readyplayerone.fandom.com/wiki/Ready_Player_Two">https://readyplayerone.fandom.com/wiki/Ready_Player_Two</a></p>
	<p>&nbsp;</p>
	<p><em>Warning: Spoilers Lie Ahead</em></p>
	<p>I love trivia, but still felt like I was having to tolerate the depth of knowledge I gained about a couple of topics, particularly about pop artist Prince and arcade game Ninja Princess.&nbsp; As much as I didn't enjoy getting in the weeds on a couple of these topics, Ernest Cline still did a great job of covering such a wide variety.&nbsp; In fact, reading these two books may be the fastest route to becoming sufficiently 'pop-cultured' on the final three decades of the twentieth century.&nbsp; (Sufficient is a debatable term here... and someone who lived during these decades would and should doubtless disagree with my sentiment).</p>
	<p>The bigger draw for me in this book was the new ONI headset technology it introduces and being able to connect into the virtual world at a whole new level previously unpioneered in&nbsp;<em>Ready Player One.&nbsp;&nbsp;</em>I had no clue how Cline would make this book interesting because at the end of book one it seems like Wade is done with the Oasis and his virtual life, ready to live his real life (which would make for a boring book two).&nbsp; But the ONI changes everything... being able to be induced into a coma to detach your consciousness from your physical body and place it into a new digital body that you can feel and live in as your own in the virtual world.&nbsp; What a cool concept!&nbsp;</p>
	<p>Here's two more fun concepts this book poses:</p>
	<ol>
	<li>Is it ethical to make a digital clone of someone's consciousness/resurrect a clone of their consciousness without their permission?</li>
	<li>Cline doesn't merely toy around with his proposal on how humanity will search for another planet.&nbsp; He gives a full-blown idealized solution which I find super cool! The main problem with interstellar space travel is how long it takes to get from one star to the next.&nbsp; It would take many generations of humans living and dying their entire lives on a spaceship, dealing with problems like food, radiation, oxygen, and entertainment.&nbsp; Cline solves all of these problems by removing the human... the human body that is.&nbsp; &nbsp;The human consciousness in the form of a digital human (still fully human, I believe Cline would argue) would not have to worry about food, radiation, oxygen, and would have an entire universe to explore on the spaceship within the oasis which would meet all stimulation and entertainment needs for such a long voyage.&nbsp; Once they find a star, they would begin incubating the thousands of frozen embryos they brought along.</li>
	</ol>
	<p>&nbsp;</p>
	<p>I was a sucker for the last-minute twist when you find out Wade's clone has been the one narrating the whole story.&nbsp; Incredible!&nbsp; After writing this review, I think I may be interested in a&nbsp;<em>Ready Player Three</em>... but I wonder how many more 80's references can be pulled off without becoming a bore!&nbsp;</p>
	<p>&nbsp;</p>`,
	"March 2021 - April 2022")

// Children of Dune
const b13 = new Book(
	"Children of Dune", // title
	13, // id
	"Frank Herbert", // author
	"https://64.media.tumblr.com/1ed87d051ce5d52b38527a6e53fca49b/36a182d2a27eb9e4-8a/s640x960/9b75ff095de69923598b85ba10b6c44a391c8cb4.jpg", // btu
	"April 1976", // releaseDate
	"605", // pageCount
	"★★★★", // rating
	"Favorite so far of the Dune saga! I now feel myself wanting a video game in the Dune universe similar to what Shadow of Mordor does for the Lord of the Rings...", // summary
	`<p>I love the beach.  The beach has sand.  Dune has sand.  I like Dune.</p>`, // review
    	"April 2022 - May 2022"
	)


var books = [b13, b12, b11, b10, b9, b8, b7, b6, b5, b4, b3, b2, b1]; // Projects array1