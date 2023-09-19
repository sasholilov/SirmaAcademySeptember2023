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
