//1. Cats
console.log("------Cats--------");

function cats(arr) {
  const catArr = [];
  class Cat {
    constructor(age, name) {
      (this.age = age), (this.name = name);
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says meow`);
    }
  }
  for (let cat of arr) {
    const catObj = new Cat(cat.split(" ")[1], cat.split(" ")[0]);
    catArr.push(catObj);
  }
  for (let cat of catArr) {
    cat.meow();
  }
}
cats(["Mellon 2", "Tom 3"]);
cats(["Branch 1", "Poppy 3", "Goldy 2"]);

//2. Person
console.log("---------Person--------");
class Person {
  constructor(firstName, lastName, age, email) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.email = email);
  }
  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}), email: ${this.email}`;
  }
}

let person = new Person("Homer", "Simpson", 42, "homer@yahoo.com");
console.log(person.toString());

//3. Circle
console.log("-----Circle-----");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

//4. Point Distance
class Point {
  objArr = [];

  static distance(p1, p2) {
    return Math.abs(Math.abs(p1.x - p2.x) - 1 + Math.abs(p1.y - p2.y) - 1);
  }

  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
let p3 = new Point(14, 2);
let p4 = new Point(5, 3);
console.log(Point.distance(p1, p2));
console.log(Point.distance(p3, p4));

//5. Laptop
console.log("-----Laptop-----");
class Laptop {
  constructor(info, quality) {
    (this.info = info), (this.quality = quality);
  }

  isOn = false;
  turnOn() {
    this.quality--;
    this.isOn = true;
  }
  turnOff() {
    this.quality--;
    this.isOn = false;
  }
  showInfo() {
    let objInfo = {
      producer: this.info.producer,
      age: this.info.age,
      brand: this.info.brand,
    };
    return JSON.stringify(objInfo);
  }

  get price() {
    return 800 - Number(this.info.age) * 2 + Number(this.quality) * 0.5;
  }
}
let info = { producer: "Asus", age: 2, brand: "Zenbook" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

let info2 = { producer: "Lenovo", age: 1, brand: "Legion" };
let laptop2 = new Laptop(info, 10);
laptop2.turnOn();
console.log(laptop2.showInfo());
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);

//6.School Book
console.log("-----School Book------");

function schoolBook(input) {
  const formatedData = [];
  for (let data of input) {
    const dataObj = {};
    dataObj.grade = data.substring(
      data.indexOf(",") + 9,
      data.indexOf("Graduated") - 2
    );
    dataObj.name = data.substring(data.indexOf(":") + 2, data.indexOf(","));
    dataObj.anualScore = data.substring(data.length - 4, data.length);
    formatedData.push(dataObj);
  }
  const uniqueGrade = new Set();
  for (let data of formatedData) {
    uniqueGrade.add(data.grade);
  }

  let preFinalArr = [];
  const finalArr = [];

  for (let data of uniqueGrade) {
    const newDataArray = formatedData.filter(
      (e) => e.grade == data && e.anualScore > 2.99
    );
    preFinalArr = newDataArray.concat(preFinalArr);
    console.log(preFinalArr);
  }

  const aggregatedStudents = {};
  for (let data of preFinalArr) {
    const { grade, name, anualScore } = data;
    if (!aggregatedStudents[grade]) {
      aggregatedStudents[grade] = {
        name: [],
        anualScore: [],
      };
    }
    aggregatedStudents[grade].name.push(name);
    aggregatedStudents[grade].anualScore.push(anualScore);
  }

  for (let [key, value] of Object.entries(aggregatedStudents)) {
    console.log(Number(key) + 1, "Grade");
    console.log(`List of students: ${value.name}`);
    let valSum = value.anualScore.reduce((acc, e) => Number(acc) + Number(e));
    console.log((Number(valSum) / Number(value.name.length)).toFixed(2));
    console.log("===");
  }
}

schoolBook([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

//7. Rectangle
console.log("----Rectangle-----");

class Rectangle {
  constructor(width, height, color) {
    (this.width = width), (this.height = height), (this.color = color);
  }

  calcArea() {
    return this.height * this.width;
  }
}
let rect = new Rectangle(4, 5, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

//8.Data Class
console.log("-------Data Class-------");

class Request {
  response = undefined;
  fulfilled = false;
  constructor(method, uri, version, message) {
    (this.method = method),
      (this.uri = uri),
      (this.version = version),
      (this.message = message);
  }
}
let myData = new Request("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);

//9. Tickets
console.log("------------Tickets-----------");
function tickets(tickets, sorting) {
  const ticketsArr = [];
  for (let data of tickets) {
    let dest = data.split("|")[0];
    let price = data.split("|")[1];
    let status = data.split("|")[2];

    class Ticket {
      constructor(destination, price, status) {
        (this.destination = destination),
          (this.price = price),
          (this.status = status);
      }
    }
    const ticketObj = new Ticket(dest, price, status);

    ticketsArr.push(ticketObj);
  }
  console.log(ticketsArr.sort((a, b) => (b[sorting] < a[sorting] ? 1 : -1)));
}
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);

//10. Sorted list
console.log("--------Sorted List---------");
class List {
  listOfelements = [].sort((a, b) => a - b);
  add(el) {
    this.listOfelements.push(el);
  }
  remove(index) {
    this.listOfelements.splice(index, 1);
  }
  get(index) {
    return this.listOfelements[index];
  }
  size() {
    return this.listOfelements.length;
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(1);
list.add(8);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

//11. String Container
console.log("-------String Container-------");
class StringContainer {
  myString = "";
  myStringLength = 0;
  constructor(str, len) {
    (this.str = str), (this.len = len);
  }

  toString() {
    this.myString = this.str;
    this.myStringLength = this.len;
    if (this.myStringLength >= this.myString.length) {
      return this.myString;
    } else {
      return `${this.myString.substring(0, this.myStringLength)}...`;
    }
  }
  increase(num) {
    this.len += num;
  }
  decrease(num) {
    this.len -= num;
  }
}
let test = new StringContainer("Test", 5);
test.decrease(3);
test.increase(5);
test.decrease(9);
console.log(test.toString());

//12. Company
console.log("---------Company--------");
class Company {
  departments = {};
  addEmployee(name, salary, position, department) {
    if (!this.departments[department]) {
      this.departments[department] = {
        employess: [
          {
            name: name,
            salary: salary,
            position: position,
            department: department,
          },
        ],
      };
    } else {
      this.departments[department].employess.push({
        name: name,
        salary: salary,
        position: position,
        department: department,
      });
    }
  }

  bestDepartment() {
    const bestArr = [];
    const findMaxArr = [];
    let maxAvrgSalary = 0;
    for (let data in this.departments) {
      let len = this.departments[data].employess.length;
      let depname = data;
      let sumSalary = this.departments[data].employess.reduce(
        (acc, e) => acc + e.salary,
        0
      );
      findMaxArr.push(sumSalary / len);
      maxAvrgSalary = Math.max(...findMaxArr);

      bestArr.push([sumSalary / len, depname]);
    }
    const finalResul = bestArr.filter((e) => e[0] === maxAvrgSalary);
    const maxAverageSalary = finalResul[0][0];
    const bestDepartment = finalResul[0][1];
    console.log(`Best department is: ${bestDepartment}`);
    console.log(`Average salary is: ${maxAverageSalary}`);
    for (let emp of this.departments[bestDepartment].employess) {
      console.log(`${emp.name} ${emp.salary} ${emp.position}`);
    }
  }
}

let cmp = new Company();
cmp.addEmployee("Stamat", 2000, "engineer", "Construction");
cmp.addEmployee("Peter", 1500, "electrical engineer", "Construction");
cmp.addEmployee("Martin", 500, "cleaner", "Construction");
cmp.addEmployee("Stanley", 2000, "architect", "Construction");
cmp.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
cmp.addEmployee("Peter", 1000, "graphical designer", "Marketing");
cmp.addEmployee("George", 1350, "HR", "HumanResources");

console.log("-----------------");
cmp.bestDepartment();
