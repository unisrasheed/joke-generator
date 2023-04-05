

const jokeText = document.querySelector(".joke-text");
const jokeBtn = document.querySelector('.joke-btn')


jokeBtn.addEventListener('click', getJoke);
 
getJoke();

function getJoke() {
 
  fetch("https://official-joke-api.appspot.com/random_joke/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const setup = data.setup;
      const punchline = data.punchline;
      jokeText.innerText = setup + '\n\n\b' + punchline;
    });
}

