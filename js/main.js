// Random sent
sentences = [
    "Did you lost?",
    "You are not supposed to be here.",
    "Go away!",
    "This is not a right place for you.",
    "I'm busy.",
    "Nothing here.",
    "Curious about me? lol",
    "Bye."
];

const random = [Math.floor ( Math.random() * sentences.length )];

document.getElementById("content").innerHTML = sentences[random];

// Year
let dateObj = new Date();
let year = dateObj.getUTCFullYear();

document.getElementById("year").innerHTML = year;