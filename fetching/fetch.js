let changeQuoteButton = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let submitButton = document.querySelector('#submit');

//storing a return value from setInterval function to be used for clearing the interval when button is pressed
let intervalID = scheduleFetch();

// Setting a timing function that sends a request to our server after 5 seconds and 
// returns a intervalID that is used to clearInterval
function scheduleFetch() {
    return setInterval(fetchQuote, 5000);
}

//setting a function that calls resetInterval and fetchQuote functions when the button is clicked
function resetFetch() {
    resetInterval();
    fetchQuote();
}

//declaring a function that resets interval after button is clicked
function resetInterval() {
    clearInterval(intervalID);
    intervalID = scheduleFetch();
}

// Writing a fetching function that can be used in several places when needed
function fetchQuote() {  
    fetch("http://localhost:8080")
    .then(data => data.json()) //parsing string representation of JSON into javascript object, returns a promise
    .then(data => {
        quote.innerText = data.quote;
        person.innerText = data.person;
    })
    .catch((error) => {
        console.log("Could not fetch the quote", error)
    });
}
// grab the user input for new quote and store into an object which is returned when function called
function getInputValue() {
    let newQuoteEl = document.getElementById('newQuote');
    let newAuthorEl = document.getElementById('newAuthor');

    let newQuoteAuthor = {
        'quote': newQuoteEl.value,
        'person': newAuthorEl.value
    }
    return newQuoteAuthor;
}
// the post request that is sent to the server
function sendNewQuoteRequest () {
    fetch("http://localhost:8080", {
        method: 'POST',
        body: JSON.stringify(getInputValue()) //send a string representation of the return value (object) of the called function
    });
}
// functions to be called upon submit button for new quote clicked
function submitQuote () {
    getInputValue();
    sendNewQuoteRequest();
}

// Adding an event listener which takes resetFetch as a callback
changeQuoteButton.addEventListener('click', resetFetch);
//adding an event listener which takes submitQuote as a callback
submitButton.addEventListener('click', submitQuote);

//closing and opening of 'Add new quote' window
let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}