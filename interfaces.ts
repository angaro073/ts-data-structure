interface Animal {
  name: string;
}

interface Dog extends Animal {

}

let dog: Animal = {name: "Kinder"};

console.log('Type of dog: ' + typeof dog);
console.log(JSON.stringify(dog));