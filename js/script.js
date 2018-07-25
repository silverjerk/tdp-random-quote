// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
  {
    quote: "Superman is the best Alien",
    source: "Lois Lane",
    citation: "The Daily Planet",
    year: 2009,
    tags: [
      "Silly",
      "Comical"
    ]
  },
  {
    quote: "Batman is rich, and Bruce Wayne is also rich, but saying they're the same person is like saying Bill Burr must be the Joker because they both have a sardonic sense of humor",
    source: "Vicki Vale",
    citation: "Gotham Gazette"
  },
  {
    quote: "Have you ever danced with the Devil in the pale Moonlight?",
    source: "The Joker",
    year: 2009,
    tags: [
      "Ominous",
      "Foreboding"
    ]
  },
  {
    quote: "Do you feel lucky, punk?",
    source: "Clint Eastwood",
    tags: [
      "Words of Warning",
      "Old Guy Quotes"
    ]
  },
  {
    quote: "There once was a man from Nantucket, and that's all I really know of that story",
    source: "Commonmind",
    tags: [
      "Dissapointing Delivery",
      "Unfinished Stories",
      "Sheltered Childhood"
    ]
  },
  {
    quote: "I'd give my right arm to have his looks, and my left one to make sure I didn't get his brains!",
    source: "Commonmind",
    year: 2018,
    tags: [
      "Philosophy",
      "User Created"
    ]
  }
];

// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote(arr) {
  // Storing a random item from the provided argument's array
  let randomQuote = arr[Math.floor(Math.random() * arr.length)];
  return randomQuote;
}

// Create the printQuote funtion and name it printQuote

function printQuote() {
  // Storing our random quote function within a variable to more succinctly build our HTML
  let quoteRes = getRandomQuote(quotes);
  // Creating an empty string variable for our HTML
  let quoteHTML = "";
  // Formating our return results using the contents of the random quote generator
  quoteHTML += '<p class="quote">' + quoteRes.quote + "</p>";
  quoteHTML += '<p class="source">' + quoteRes.source;
  // Using an if statement to check if the Citation value has data, and if it does, we display it in the HTML
  if (quoteRes.citation != null) {
    quoteHTML += '<span class="citation">' + quoteRes.citation + "</span>";
  }
  // Using an if statement to check if the Year value has data, and if it does, we display it in the HTML
  if (quoteRes.year != null) {
    quoteHTML += '<span class="year">' + quoteRes.year + "</span>";
  }
  if (quoteRes.tags != null) {
    quoteHTML += '<div class="tag-block">';
    for (i = 0; i < quoteRes.tags.length; i += 1) {
      quoteHTML += '<span class="tags">' + quoteRes.tags[i] + "</span>";
    }
    quoteHTML += '</div>';
  }
  quoteHTML += "</p>";

  // Creating a random background color to change when the quote changes
  function randomBackground() {
    // Storing rgb as separate variables so we can change each randomly
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // Building our completed style variable
    let backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    return document.body.style.background = backgroundColor;
  }
  randomBackground();

  // Returning the now-complete variable for our random quote generator
  return document.getElementById("quote-box").innerHTML = quoteHTML;
}

// Setting the timer OUTSIDE of the function so it does not require a button press
let timedQuote = setInterval(printQuote, 20000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);
