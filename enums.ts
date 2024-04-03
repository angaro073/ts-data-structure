enum Possibilities {
  UNINITIALIZED,
  CONST = "A",
  COMPUTED = CONST + 1,

}

console.log('Consts members: ' + Possibilities.CONST);
console.log('Computed members: ' + Possibilities.COMPUTED);
