const quotes = [
  "Osmanthus wine tastes the same as I remember... But where are those who share the memory? - Zhongli",
  "The greatest victory is that which requires no battle - Sun Tzu",
  "Knowing others is wisdom, knowing yourself is enlightenment - Sun Tzu",
  "Appear weak when you are strong, and strong when you are weak - Sun Tzu",
  "Treat your men as you would your own beloved sons. And they will follow you into the deepest valley - Sun Tzu",
  "So in war, the way is to avoid what is strong, and strike at what is weak - Sun Tzu",
  "If you don't want a sarcastic answer, don't ask a stupid question - Oreki",
  "Don't change so people will like you. Be yourself and the right people will like the real you - Oreki",
  "People start by judging others based on outward appearance. Whether they’re handsome or cute or the total opposite. To put it simply, it’s what we call a first impression - Ayanokouji",
  "Smiling means letting your guard down in front of another person, even if just a little - Ayanokouji",
  "There are limits to how hard one can fight alone - Ayanokouji",
  "For those that live too long, the friends of days gone by and senes from their adventures live on in tbeir menories. As such I have no regrets in meeting you, friend. Should the day ever come that we are not together... you will continue to shine like gold in my memories - Zhongli",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
