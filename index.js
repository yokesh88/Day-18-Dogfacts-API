const response = fetch("https://dogapi.dog/api/facts");
response
  .then((data) => data.json()) 
  .then((result) => {
    document.getElementsByClassName("fact")[0].innerHTML = `${result.facts}`;
  });
const button = document.getElementsByClassName("button")[0];
button
  .addEventListener("click", () => {
    window.location.reload();
  })
  .catch((error) => error.alert("No facts right now come again later..."));