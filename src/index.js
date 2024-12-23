function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#user-topic");
  let apiKey = "3tb400c941f2a4edo23f9347ffbbacfd";
  let prompt = `User topic: Genetate a French poem about ${topicInput}`;
  let context =
    "You have an extensive knowledge of poems and love to write short poems. Your mission is to generate a 4 line poem and separate each line with <br />. Make sure to follow the user topic.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
