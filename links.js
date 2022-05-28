// Links
function Link(id, linkName, url, summary) {
	this.id = id;
	this.linkName = linkName;
	this.url = url;
	this.summary = summary;
}

const L1 = new Link(1, 
					"CPI Inflation Calculator", 
					"https://www.in2013dollars.com/us/inflation/2018?amount=10000", 
					"How does inflation work? What was $100 of today's money worth in 1969? How does CPI work? This site has all the answers.");

const L2 = new Link(2,
					"Datum of 2022: Moving away from Static Datums", 
					"https://www.esri.com/about/newsroom/arcuser/moving-from-static-spatial-reference-systems-in-2022/", 
					"North America's new vertical datum with be based on a <i>geopotential</i> reference frame rather than using physical (static) elevation markers prone to\
					vandalism, erosion, and also inaccuracy due to being relative to the ambiguous '''mean sea level'''. So our reference elevation is based on gravity now. Insane.");

const L3 = new Link(3,
					"Romans 7: Enduring Word Commentary", 
					"https://enduringword.com/bible-commentary/romans-7/", 
					"I'm a fan of inductive Bible study, where one asks God to reveal truths from within rather than seeking truths externally.  However, if there's a book that requires commentary,\
					it's Romans 7. Do NOT use Enduring Word just to sound smart for your Bible study group.  Not cool. But DO use it to deepen your faith in and knowledge of Christ and God.");

const L4 = new Link(4,
					"U.S. Location Predictor Based Off of How You Say Common Words and Phrases", 
					"https://www.nytimes.com/interactive/2014/upshot/dialect-quiz-map.html", 
					"A quiz developed from 350,000 survey responses, its answers are supposedly pretty accurate. When I took it, I was predicted to be from Birmingham.  Fun quiz to take when with friends.");

const L5 = new Link(5,
					"How to Over-Engineer a Website // What is a Tech Stack?",
					"https://www.youtube.com/watch?v=Sxxw3qtb3_g",
					"This video confirms my wildest fears as a novice website developer. Quite an overwhelming and technical video which aptly describes the mess which is modern day website development. \
					And now I truly know and can say I know what a 'Full-Stack Software Developer' does!")

const L6 = new Link(6,
					"Philosophy Timeline",
					"https://www.denizcemonduygu.com/philo/browse/",
					"I like and dislike philosophy.  It's a little pompous.  However, this vast timeline of famous philosophical ideas, grouped by philophers and how they relate to each other is applied software visualization at its finest.")

const L7 = new Link(7,
					"Credit Scores, Bureaus, Reports, Oh MY!",
					"https://animagraffs.com/credit-scores-work/",
					"This website in general has been a go-to of mine for a while.  If you're assimilating into the adult world, this animagraff is super helpful!")

const L8 = new Link(8,
					"Lord of the Rings Interactive Map",
					"http://lotrproject.com/map/#zoom=3&lat=-1315.5&lon=1500&layers=B",
					"See the journeys taken by each character in the books on this high-resolution map! Pretty Dope!")

const L9 = new Link(9,
					"HTML5 Editor",
					"https://html5-editor.net/",
					"Discovering this website has made writing book reviews for my website way more fun.  Now I don't have to write my reviews in html! This website converts it to html for me!")

const L10 = new Link(10,
					"How Does Lightning REALLY Work?",
					"http://hyperphysics.phy-astr.gsu.edu/hbase/electric/ligseq.html",
					"This is probably as detailed and accurate an explanation I can find without buying lightning guru Uman's book; however, note that current does not 'flow' as it states in the stepped leader section.")


var links = [L10, L9, L8, L7, L6, L5, L4, L3, L2, L1];