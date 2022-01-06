// Links
function Link(linkName, url, summary) {
	this.linkName = linkName;
	this.url = url;
	this.summary = summary;
}

const L1 = new Link("CPI Inflation Calculator", 
					"https://www.in2013dollars.com/us/inflation/2018?amount=10000", 
					"How does inflation work? What was $100 of today's money worth in 1969? How does CPI work? This site has all the answers.");

const L2 = new Link("Datum of 2022: Moving away from Static Datums", 
					"https://www.esri.com/about/newsroom/arcuser/moving-from-static-spatial-reference-systems-in-2022/", 
					"North America's new vertical datum with be based on a <i>geopotential</i> reference frame rather than using physical (static) elevation markers prone to\
					vandalism, erosion, and also inaccuracy due to being relative to the ambiguous '''mean sea level'''. So our reference elevation is based on gravity now. Insane.");

const L3 = new Link("Romans 7: Enduring Word Commentary", 
					"https://enduringword.com/bible-commentary/romans-7/", 
					"I'm a fan of inductive Bible study, where one asks God to reveal truths from within rather than seeking truths externally.  However, if there's a book that requires commentary,\
					it's Romans 7. Do NOT use Enduring Word just to sound smart for your Bible study group.  Not cool. But DO use it to deepen your faith in and knowledge of Christ and God.");
const L4 = new Link("U.S. Location Predictor Based Off of How You Say Common Words and Phrases", 
					"https://www.nytimes.com/interactive/2014/upshot/dialect-quiz-map.html", 
					"A quiz developed from 350,000 survey responses, its answers are supposedly pretty accurate. When I took it, I was predicted to be from Birmingham.  Fun quiz to take when with friends.");
const L5 = new Link("How to Over-Engineer a Website // What is a Tech Stack?",
					"https://www.youtube.com/watch?v=Sxxw3qtb3_g",
					"This video confirms my wildest fears as a novice website developer. Quite an overwhelming and technical video which aptly describes the mess which is modern day website development. \
					And now I truly know and can say I know what a 'Full-Stack Software Developer' does!")

const L6 = new Link("Philosophy Timeline",
					"https://www.denizcemonduygu.com/philo/browse/",
					"I like and dislike philosophy.  It's a little pompous.  However, this vast timeline of famous philosophical ideas, grouped by philophers and how they relate to each other is applied software visualization at its finest.")


var links = [L1, L2, L3, L4, L5, L6];