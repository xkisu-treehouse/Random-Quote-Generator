// Array of quote objects
var quotes = [{
        quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
        source: 'Anonymous',
        tags: [
            'Funny',
            'Subtle'
        ]
    },
    {
        quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file. ',
        source: 'Louis Srygley',
        tags: [
            'Truism'
        ]
    },
    {
        quote: 'Before software can be reusable it first has to be usable.',
        source: 'Ralph Johnson',
        tags: [
            'Truism'
        ]
    },
    {
        quote: 'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
        source: 'Oktal',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along wound destroy civilization.',
        source: 'Gerald Weinberg',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'There are two ways to write error-free programs; only the third one works.',
        source: 'Alan J. Perlis',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.',
        source: 'Anonymous',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'It’s not a bug – it’s an undocumented feature.',
        source: 'Anonymous',
        tags: [
            'Truism'
        ]
    },
    {
        quote: 'A good programmer is someone who always looks both ways before crossing a one-way street. ',
        source: 'Doug Linder',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'Walking on water and developing software from a specification are easy if both are frozen. ',
        source: 'Edward V Berard',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
        source: 'Edsger Dijkstra',
        tags: [
            'Truism'
        ]
    },
    {
        quote: 'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. ',
        source: 'Anonymous',
        tags: [
            'Funny',
            'Relatable'
        ]
    },
    {
        quote: 'It’s a curious thing about our industry: not only do we not learn from our mistakes, we also don’t learn from our successes.',
        source: 'Keith Braithwaite',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'The best performance improvement is the transition from the nonworking state to the working state.',
        source: 'J. Osterhout',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
        source: 'Seymour Cray',
        tags: [
            'Funny'
        ]
    },
    {
        quote: 'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
        source: 'Mosher’s Law of Software Engineering',
        tags: [
            'Truism'
        ]
    }
];

// Array for holding the quotes that have been displayed
var displayedQuotes = [];

// Function for generating a random rgb color
function randomColor() {
    // Generate random r, g, and b values between 0 and 254
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    // Use template literals to add the colors to a css rgb color value
    return `rgb(${r}, ${g}, ${b})`;
}

// Function that returns a random quote
function getRandomQuote() {
    // Variable to hold the current random quote
    var quote;

    // Check if we've displayed all the quotes
    if (displayedQuotes.length == quotes.length) {
        console.log('Displayed all quotes, resetting...');

        // If we've displayed them all, reset the array
        displayedQuotes = [];
    }

    /* 
        Get a random quote and check if it's already been displayed, 
        and if it has been displayed keep getting another one till we 
        get one that hasn't been displayed.
    */
    do {
        /*
            Picks a random element from the quotes array, the random number
            will be from 0 to the length of the array minus 1.
        */
        quote = quotes[Math.floor(Math.random() * quotes.length)];

        /* 
            Check if the quote text is in the displayed quotes array, 
            if it has been displayed the do{} will repeat and get a new one.
        */
    } while (displayedQuotes.indexOf(quote.quote) > -1);

    // Log the quote to the console.
    console.log(quote.quote);

    // Add the quote to the displyed quotes array.
    displayedQuotes.push(quote.quote);

    return quote;
}

// Displays the quote on the page
function printQuote() {
    // variable to hold the quote
    var quote = getRandomQuote();


    /*
        Construct the html string, note that I used template literals (backticks)
        to add the variables into the strings for better readability then throwing in
        tons of plus(+)s 
    */
    var html = '';
    html += `<p class="quote"> ${quote.quote} </p>`;
    html += `<p class="source"> ${quote.source}`;
    if (quote.citation != undefined) {
        html += `<span class="citation"> ${quote.citation} </span>`;
    }
    if (quote.year != undefined) {
        html += `<span class="year"> ${quote.year} </span>`;
    }
    html += '</p>';

    // Display the quote html on the page
    document.getElementById('quote-box').innerHTML = html;

    // Set the background color of the page to a new random color
    document.body.style.background = randomColor();
}

/* 
    Event listener to respond to "Show another quote" button clicks.
    When user clicks anywhere on the button, the "printQuote" function is called
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Show a new quote every 30 seconds (30000 milliseconds)
setInterval(function() {
    printQuote();
}, 30000);