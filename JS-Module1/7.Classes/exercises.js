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
