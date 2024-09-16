"use strict";
const button = document.querySelector('.btn');
const jokeWrapper = document.querySelector('.jokes');
const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
    },
};
button.addEventListener('click', () => {
    joke();
});
const joke = () => {
    fetch('https://icanhazdadjoke.com/', options)
        .then((received) => received.json())
        .then((data) => jokeWrapper.innerText = data.joke)
        .catch((err) => console.log(err));
};
joke();
//# sourceMappingURL=app.js.map