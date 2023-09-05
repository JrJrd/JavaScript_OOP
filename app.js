//exercise 1
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobby) {
    let foundIdx = this.hobbies.indexOf(hobby);
    // let valueBefore = this.hobbies.slice(0, foundIdx);
    // let valueAfter = this.hobbies.slice(foundIdx + 1); //+1 doesnt exist if last value
    // this.hobbies = valueBefore.concat(valueAfter);
    this.hobbies.splice(foundIdx, 1);

    //.filter returning a new array
    //this.hobbies = this.hobbies.filter((value)) => value != hobby);
  }
  greeting() {
    console.log("hello fellow person!");
  }

  //override the object.proto to string method
  toString() {
    return Object.entries(this).toString();
  }
}

//exercise 2
class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = occupation;
  }

  greeting() {
    console.log("hello world");
  }
}
//exercise 3

let coder = new Coder(
  "ben",
  0,
  "stanford",
  ["running", "diy", "reading"],
  "full stack web dev"
);

coder.addHobby("walking");
console.log(coder);

coder.removeHobby("running");

coder.greeting();

//exercise 4

class Calc {
  result = 0;
  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  sub(a, b) {
    this.result = a - b;
    return this.result;
  }

  multi(a, b) {
    this.result = a * b;
    return this.result;
  }

  div(a, b) {
    this.result = a / b;
    return this.result;
  }
  display() {

      console.log(this.result);
  }
  
}

let calc = new Calc();
calc.add(0, 1);
calc.display();

calc.sub(5, 3);
calc.display();

calc.multi(3, 3);
calc.display();

calc.div(10, 2);
calc.display();
//exercise
//exercise
