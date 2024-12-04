function showJoke(response) {
  response.data.answer;
  new Typewriter("#joke", {
    strings: response.data.answer,
    cursor: "",
    delay: 15,
    autoStart: true,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "8dcoa24b0fb7aa495436f440dt9ca24e";
  let prompt = "Tell me a short and sweet joke";
  let context =
    "You are a very funny AI assistant and enjoy telling jokes to make people laugh";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a joke for you.. please wait";

  let buttonElement = document.querySelector("#joke-button");
  buttonElement.addEventListener("click", showJoke);

  axios.get(apiURL).then(showJoke);
}

let generateButton = document.querySelector("#joke-button");
generateButton.addEventListener("click", generateJoke);
