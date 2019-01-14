// OEFENINGEN VARIABELEN

// Fortuinbouwer
const beroep = " web developer";
const land = "belgië";
const vrouw = "toekomstige vrouw";
const kinderen = 3;

console.log(
  "U wordt" +
    beroep +
    " en woont in " +
    land +
    ", en bent getrouwd met " +
    vrouw +
    " met " +
    kinderen +
    " kinderen."
);

//Bereken de leeftijd
let currentYear = 2019;
let bornYear = 1997;

console.log("Ik ben " + (currentYear - bornYear) + " jaar oud.");

//Voorspeller
let currentAge = 22;
let maxAge = 100;

console.log(
  "Je hebt nog steeds " +
    (maxAge - currentAge) +
    " jaar voordat je de leeftijd van " +
    maxAge +
    " jaar bereikt hebt."
);

// Prioriteiten
let resultaat = (1 + 2) * 3 + 4 / 2;

/*stap 1*/ (1 + 2) * 3 + 4 / 2; // (1+2)= 3 haakjes prioriteit
/*stap 2:*/ (1 + 2) * 3 + 4 / 2; //3*3 = 9 product prioriteit
/*stap 3:*/ (1 + 2) * 3 + 4 / 2; // 4/2 = 2
/*stap 4:*/ (1 + 2) * 3 + 4 / 2; //9 + 2 = 11

// OEFENINGEN VERGELIJKINGEN

//Talen
let languages = [
  (fr = "Bonjour tout le Monde"),
  (nl = "Hallo iedereen"),
  (eng = "Hello world")
];
let saveMessage = eng;

if (saveMessage === fr) {
  ("Bonjour tout le monde");
} else if (saveMessage === nl) {
  ("Hallo iedereen");
} else {
  ("Hello world");
}
console.log(saveMessage);

// Scores weergeven
let score = 89;
let result;

if (score <= 50) {
  result = "Rank C";
} else if (score < 90) {
  result = "rank B";
} else {
  result = "rank A";
}

console.log(result);

// In het meervoud
let enkelvoud = "appel";

let number = 2;
let res;

if (number >= 2) {
  res = enkelvoud + "s";
} else {
  res = enkelvoud;
}

console.log(" ik heb " + number + "" + res);

// OEFENINGEN LOOPS

//even en oneven
for (let i = 0; i < 11; i++) {
  // loop gaat maar tot 11 omdat bij console log(i*2 dus tot 20-22)
  console.log(i * 2 + " is even");
}

// Vermenigvuldigingstabellen
for (let i = 1; i < 11; i++) {
  console.log(i + "*9 = " + i * 9);
}

// Score toewijzen

for (let i = 0; i < 100; i++) {
  console.log("Voor " + i + " punten heb je ");
}

// Piramide
for (let i = 0; i < 1; i++) {
  console.log("*");
  console.log("**");
  console.log("***");
  console.log("****");
  console.log("*****");
}

// FUNCTIES

function aftrek(a, b) {
  return a - b;
}
function maal(a, b) {
  return a * b;
}

function percent(a, percent) {
  return a / percent;
}

//
//
//ARRAYS

//Optellen
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(add, 0);

function add(a, b) {
  return a + b;
}

console.log(sum); // 10

//De beste keuze
let actors = ["Sylvester Stalone", "Tom Cruise", "Brad Pitt"];
console.log(
  " De eerste is " +
    actors[0] +
    " de tweede is " +
    actors[1] +
    " de derde is " +
    actors[2]
);
