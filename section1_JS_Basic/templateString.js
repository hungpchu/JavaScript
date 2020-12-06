const name = "Hung";
const age = 23;
const job = "Web Developer";
const city = "Ha Noi";

let html;

html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

function hello() {
  return "hello";
}

// With template string
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>2 + 2: ${2 + 2}</li>
    <li>hello function: ${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

// out put this to brower
document.body.innerHTML = html;
