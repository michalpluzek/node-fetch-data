import fetch from "node-fetch";

const arg = process.argv[2];
let type = "";

if (arg.indexOf("--year") === 0) {
  console.log("szukam informacji o roku...");
  type = "year";
} else if (arg.indexOf("--math") === 0) {
  console.log('"szukam informacji o liczbie...');
  type = "math";
} else if (arg.indexOf("--trivia") === 0) {
  console.log('"szukam liczby-ciekawostki...');
  type = "trivia";
}

const equalSign = arg.search("=");

if (equalSign === -1) console.log("Nie wpisałeś liczby!");

const number = arg.slice(equalSign + 1);

if (number === "" || isNaN(Number(number))) {
  console.log("To nie jest liczba!");
  process.exit();
}

fetch(`http://numbersapi.com/${number}/${type}?json`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else throw new Error("Coś poszło nie tak. Status: " + response.status);
  })
  .then((data) => console.log(data.text))
  .catch((err) => console.log("Error: ", err));
