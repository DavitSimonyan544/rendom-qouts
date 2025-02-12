const quotes = [
  "The only way to do great work is to love what you do.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Believe you can and you're halfway there.",
  "The best way to predict the future is to invent it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The only way to do great work is to love what you do.",
  "In the middle of every difficulty lies opportunity.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Believe you can and you're halfway there.",
  "The best way to predict the future is to invent it.",
];
const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();
