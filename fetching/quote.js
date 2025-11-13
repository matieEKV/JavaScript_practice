const quotes = [{
    quote: `"Be yourself; everyone else is already taken."`,
    person: `Oscar Wilde`
}, {
    quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person: `Albert Einsten`
}, {
    quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    person: `Maya Angelou`
}, {
    quote: `"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."`,
    person: `Neil Geiman`
}, {
    quote: `"Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect)."`,
    person: `Mark Twain`
}, {
    quote: `"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.`,
    person: `Lao Tzu`
}, {
    quote: `"It is never too late to be what you might have been."`,
    person: 'George Elliot'
}, {
    quote: `"If you can't explain it to a six year old, you don't understand it yourself."`,
    person: `Albert Einstein`
}, {
    quote: `"We don't see things as they are, we see them as we are."`,
    person: `Anais Nin`
}];

const getQuote = function () {
    const random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

const addQuote = function (data) {
    quotes.push(data);
}

module.exports = { getQuote, addQuote };

