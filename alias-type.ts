type type1 = number | string;
type type2 = {name: string} | [];

let num: type1 = 0;
let element: type2 = {name: "Jaime"};

console.log('Type of num: ' + typeof num);
console.log(JSON.stringify(element))

num = "0";
element = [];

console.log('Type of num: ' + typeof num);
console.log(JSON.stringify(element));