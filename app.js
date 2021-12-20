import fetch from "node-fetch";

const year = process.argv[2] || Math.floor(Math.random() * 2022);

fetch(`http://numbersapi.com/${year}/year?json`)
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Error: ", err));
