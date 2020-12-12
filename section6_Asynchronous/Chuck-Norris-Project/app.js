document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector("#number").value;
  // create XHR
  const xhr = new XMLHttpRequest();

  // set true for async
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    let output = ``;
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const jokes = response.value;

      jokes.forEach((joke) => {
        output += `   <li>ID: ${joke.id}</li>
                    <li>Joke Content: ${joke.joke}</li>
                    <br>
                `;
      });
      document.querySelector(".jokes").innerHTML = output;
    } else {
      output += "<li>Something went wrong</li>";
    }
    document.querySelector(".jokes").innerHTML = output;
  };

  xhr.send();

  e.preventDefault();
}
