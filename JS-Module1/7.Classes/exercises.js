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
