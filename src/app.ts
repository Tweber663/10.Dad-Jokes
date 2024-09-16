const button = document.querySelector('.btn') as HTMLButtonElement; 
const jokeWrapper = document.querySelector('.jokes') as HTMLDivElement; 

const options = {
    method: "GET", 
    headers: {
        'Accept': 'application/json', 
    }, 
}

button.addEventListener('click', () => {
    joke(); 
})


const joke = () => {
    fetch('https://icanhazdadjoke.com/', options)
    .then((received) => received.json())
    .then((data) => jokeWrapper.innerText = data.joke)
    .catch((err) => console.log(err));
}

joke();

