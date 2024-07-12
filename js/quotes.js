const quotes = [
    {
        quote: "Life is a journey, not a destination.", 
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    }, 
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle Onassis",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
    },
    {   
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",

    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author; 