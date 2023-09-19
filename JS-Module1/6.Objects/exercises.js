//1. Person Data
console.log("------Person Data-------");
function createName(name, surname, age) {
  return {
    name: name,
    surname: surname,
    age: age,
  };
}
console.log(createName("Alex", "Lilov", 33));

//2. Town
console.log("----Town-----");
function town(obj) {
  for (let entry of Object.entries(obj)) {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
  for (let key of Object.keys(obj)) {
    console.log(`${key} -> ${obj[key]}`);
  }

  for (let value of Object.values(obj)) {
    console.log(`${value.key}`);
  }
}
town({
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: "1000",
});

//3. Convert to Object
console.log("-----Convert to Object------");
function convertToObject(string) {
  let obj = JSON.parse(string);
  for (let entries of Object.entries(obj))
    console.log(`${entries[0]}: ${entries[1]}`);
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');

//4. Convert to JSON
console.log("----Convert to JSON-----");
function convertToJson(name, surname, eyeColor) {
  let obj = {
    name: name,
    surname: surname,
    eyeColor: eyeColor,
  };
  console.log(JSON.stringify(obj));
}

convertToJson("Ivan", "Ivanov", "blue");

//5. Phonebook
console.log("-----------phonebook------------");
function phonebook(arr) {
  let obj = {};
  for (let value of arr) {
    let key = value.substring(0, value.indexOf(" "));
    let val = value.substring(value.indexOf(" ") + 1);
    obj[key] = val;
  }
  return obj;
}

console.log(
  phonebook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"])
);

//6. Movie
console.log("-------Movie--------");
let inputArr = [
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  " Spinderman 2 onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
];

let inputArr2 = [
  "addMovie The Avengers",
  "addMovie Spiderman",
  "The Avengers directedBy Pesho Peshov",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
  "The Avengers directedBy Anthony Russo",
];
function movie(input) {
  let addArray = input.filter((el) => el.includes("addMovie")).map((e) => e);
  let directedByArray = input
    .filter((el) => el.includes("directedBy"))
    .map((e) => e);
  let onDateArray = input.filter((el) => el.includes("onDate")).map((e) => e);
  const movieArr = [];
  for (let movie of addArray) {
    movieArr.push({ movieName: movie.substring(movie.indexOf(" ") + 1) });
  }
  for (let i = 0; i < movieArr.length; i++) {
    for (let j = 0; j < directedByArray.length; j++) {
      let directedValues = directedByArray[j].split(" directedBy ");
      if (movieArr[i].movieName == directedValues[0]) {
        movieArr[i].directedBy = directedValues[1];
      }
    }
  }
  for (let i = 0; i < movieArr.length; i++) {
    for (let j = 0; j < onDateArray.length; j++) {
      let onDateValues = onDateArray[j].split(" onDate ");
      if (movieArr[i].movieName == onDateValues[0]) {
        movieArr[i].onDate = onDateValues[1];
      }
    }
  }
  for (let i = 0; i < movieArr.length; i++) {
    if (
      movieArr[i].hasOwnProperty("movieName") &&
      movieArr[i].hasOwnProperty("directedBy") &&
      movieArr[i].hasOwnProperty("onDate")
    ) {
      console.log(JSON.stringify(movieArr[i]));
    }
  }
}
movie(inputArr);
