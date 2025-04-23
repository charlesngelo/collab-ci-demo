const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" }
  ];
  
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    authorText.textContent = `— ${quote.author}`;
  }
  
  newQuoteBtn.addEventListener('click', displayQuote);
  
  // Initialize with a random quote
  displayQuote();
  