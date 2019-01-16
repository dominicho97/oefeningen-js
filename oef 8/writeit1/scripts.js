const movies = [
  "Hotel Transylvania 3: Summer Vacation".toLocaleUpperCase(),
  "Don't Worry, He Won't Get Far on Foot".toLocaleUpperCase(),
  "Hollywood aan de Schelde".toLocaleUpperCase()
];

document.write(movies);

document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
