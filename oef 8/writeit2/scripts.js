const movies = [
  "Hotel Transylvania 3: Summer Vacation".toLocaleLowerCase(),
  "Don't Worry, He Won't Get Far on Foot".toLowerCase(),
  "Hollywood aan de Schelde".toLocaleLowerCase()
];

moviesR = movies.reverse();
document.write("<ul>" + moviesR + "</ul>");

document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
