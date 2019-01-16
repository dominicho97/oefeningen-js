const bestActors = [
  { name: "Gary Oldman", age: 60 },
  { name: "Casey Affleck", age: 43 },
  { name: "Leonardo DiCaprio", age: 44 },
  { name: "Eddie Redmayne", age: 37 },
  { name: "Matthew McConaughey ", age: 49 },
  { name: "Daniel Day-Lewis", age: 61 },
  { name: "Jean Dujardin ", age: 46 },
  { name: "Colin Firth ", age: 58 },
  { name: "Jeff Bridges ", age: 69 },
  { name: "Sean Penn ", age: 58 }
];

/*const ordered = bestActors.sort(function(a,b){
    if (a.year > b.year){
    return +1 ;
  } else {
    return -1;
  }
  });
*/
const ordered = bestActors.sort((a, b) => (a.age > b.age ? 1 : -1));

console.log(ordered);
document.write(ordered);
console.table(ordered);
